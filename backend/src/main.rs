use axum::{routing::get, Router};
use std::net::SocketAddr;
use axum::serve;
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    // Build our app
    let app = Router::new().route("/", get(root_handler));

    // Bind TCP listener
    let listener = TcpListener::bind("127.0.0.1:3000").await.unwrap();
    println!("🚀 Backend running at http://127.0.0.1:3000");

    // Start serving
    serve(listener, app).await.unwrap();
}

async fn root_handler() -> &'static str {
    "Hello from Rust backend!"
}
