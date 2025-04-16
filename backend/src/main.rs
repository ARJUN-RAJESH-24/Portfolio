use axum::{routing::get, Router};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // Build our app with a single route
    let app = Router::new().route("/", get(root_handler));

    // Define address
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("🚀 Backend running at http://{}", addr);

    // Start server
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

// Simple handler
async fn root_handler() -> &'static str {
    "Hello from Rust backend!"
}
