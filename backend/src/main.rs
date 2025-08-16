use axum::{routing::get, Json, Router};
use std::net::SocketAddr;
use axum::serve;
use tokio::net::TcpListener;
use tower_http::cors::{CorsLayer, Any};
use reqwest;
use serde::{Deserialize, Serialize}; // Make sure serde is in your Cargo.toml with "derive" feature

// --- Structs to deserialize GitHub API response ---
#[derive(Debug, Deserialize)]
struct GithubRepo {
    name: String,
    description: Option<String>,
    html_url: String,
    homepage: Option<String>, // Often used for live demos
    language: Option<String>,
    fork: bool,
}

// --- Struct to serialize projects for the frontend ---
#[derive(Debug, Serialize)]
struct FrontendProject {
    title: String,
    desc: String,
    tech: Vec<String>,
    github: String,
    demo: String,
    image: String, // Path to the local image for the project
}

#[tokio::main]
async fn main() {
    // Configure CORS to allow requests from your React frontend
    let cors = CorsLayer::new()
        .allow_methods(Any) // Allow all HTTP methods
        .allow_headers(Any) // Allow all headers
        .allow_origin(Any); // Allow requests from any origin (for development)

    // Build the Axum application router
    let app = Router::new()
        .route("/", get(root_handler)) // Existing root handler
        .route("/github-repos", get(github_repos_handler)) // New endpoint for GitHub repos
        .layer(cors); // Apply the CORS layer

    // Set the address for the server to listen on
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = TcpListener::bind(&addr).await.unwrap_or_else(|e| {
        eprintln!("Failed to bind to {}: {}", addr, e);
        std::process::exit(1);
    });
    println!("🚀 Rust backend running at http://{}", listener.local_addr().unwrap());

    // Start serving the application
    serve(listener, app).await.unwrap_or_else(|e| {
        eprintln!("Server error: {}", e);
        std::process::exit(1);
    });
}

// Handler for the root path
async fn root_handler() -> &'static str {
    "Hello from Rust backend!"
}

// Handler to fetch and format GitHub repositories
async fn github_repos_handler() -> Result<Json<Vec<FrontendProject>>, String> {
    let github_username = "ARJUN-RAJESH-24";
    let api_url = format!("https://api.github.com/users/{}/repos", github_username);

    // Create an HTTP client with a required User-Agent header for GitHub API
    let client = reqwest::Client::builder()
        .user_agent("Arjun-Rajesh-Portfolio-App") // Use a descriptive user agent
        .build()
        .map_err(|e| format!("Failed to build reqwest client: {}", e))?;

    // Make the request to the GitHub API
    let response = client.get(&api_url).send().await
        .map_err(|e| format!("Failed to fetch GitHub repositories: {}", e))?;

    // Check if the request was successful
    if !response.status().is_success() {
        return Err(format!("GitHub API returned an error: Status {}", response.status()));
    }

    // Deserialize the JSON response into a vector of GithubRepo structs
    let repos: Vec<GithubRepo> = response.json().await
        .map_err(|e| format!("Failed to parse GitHub API response: {}", e))?;

    // Process the fetched repositories into the FrontendProject format
    let formatted_projects: Vec<FrontendProject> = repos
        .into_iter()
        .filter(|repo| !repo.fork) // Filter out repositories that are forks
        .map(|repo| {
            // Convert repository name (kebab-case) to a more readable title (Title Case)
            let title = repo.name.replace("-", " ")
                                .split_whitespace()
                                .map(|s| {
                                    let mut chars = s.chars();
                                    match chars.next() {
                                        None => String::new(),
                                        Some(f) => f.to_uppercase().collect::<String>() + chars.as_str(),
                                    }
                                })
                                .collect::<Vec<String>>()
                                .join(" ");

            // Use the description from GitHub, or a default if none is provided
            let desc = repo.description.unwrap_or_else(|| "No description provided.".to_string());

            // Use the primary language from GitHub, or an empty vector if none
            let tech = if let Some(lang) = repo.language {
                vec![lang]
            } else {
                vec![]
            };

            // Use the homepage URL as the demo link, or "#" if not set
            let demo = repo.homepage.unwrap_or_else(|| "#".to_string());

            // Construct the image path based on your expected local file structure
            // This assumes image files are named like 'repository-name-thumbnail.png'
            // and are in the 'public/project-images/' folder of your React app.
            let image = format!("/project-images/{}-thumbnail.png", repo.name.to_lowercase());

            FrontendProject {
                title,
                desc,
                tech,
                github: repo.html_url,
                demo,
                image,
            }
        })
        .collect();

    // Return the formatted projects as JSON
    Ok(Json(formatted_projects))
}