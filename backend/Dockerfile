# Use the official Rust image as the base image for the builder stage
FROM rust:1.85 as builder

# Create a new empty shell project
WORKDIR /usr/src/backend
COPY . .

# Build the application in release mode
RUN cargo install --path .

# Start a new stage with a minimal image
FROM debian:bookworm-slim

# Install OpenSSL, which is often required by Rust applications (especially with reqwest/tokio-tls)
RUN apt-get update && apt-get install -y libssl-dev ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy the binary from the builder stage
COPY --from=builder /usr/local/cargo/bin/backend /usr/local/bin/backend

# Set the environment variable for the port (optional, but good practice)
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Run the binary
CMD ["backend"]
