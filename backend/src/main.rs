use axum::{routing::get, Router};
use std::net::SocketAddr;
use axum::serve;
use tokio::net::TcpListener;
use tower_http::cors::{CorsLayer, Any}; // Essential imports for CORS

#[tokio::main]
async fn main() {
    // Configure CORS - Crucial for frontend-backend communication
    // For development, `Any` is okay. For production, specify your frontend's URL.
    let cors = CorsLayer::new()
        .allow_methods(Any) // Allow all HTTP methods
        .allow_headers(Any) // Allow all headers
        .allow_origin(Any); // Allow requests from any origin (replace with specific origins for production)
        // Example for specific origins in production:
        // .allow_origin([
        //     "https://your-frontend-domain.com".parse().unwrap(),
        //     "http://localhost:5173".parse().unwrap() // If you want to allow local dev during prod
        // ]);

    // Build the Axum app and apply the CORS layer
    let app = Router::new()
        .route("/", get(root_handler))
        .layer(cors); // Apply the CORS middleware

    // Server binding
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = TcpListener::bind(&addr).await.unwrap_or_else(|e| {
        eprintln!("Failed to bind to {}: {}", addr, e);
        std::process::exit(1);
    });
    println!("🚀 Backend running at http://{}", listener.local_addr().unwrap());

    // Start serving the application
    serve(listener, app).await.unwrap_or_else(|e| {
        eprintln!("Server error: {}", e);
        std::process::exit(1);
    });
}

async fn root_handler() -> &'static str {
    "Hello from Rust backend!"
}