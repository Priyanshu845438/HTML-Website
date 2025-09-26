#!/usr/bin/env python3
"""
Simple HTTP server with cache control headers for Replit environment.
Serves static files with proper caching disabled for development.
"""

import http.server
import socketserver
import os
import socket
from http.server import SimpleHTTPRequestHandler

class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    """HTTP request handler that adds cache control headers."""
    
    def end_headers(self):
        """Add cache control headers to prevent caching issues in Replit iframe."""
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        # Enable CORS for cross-origin requests
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def main():
    """Start the HTTP server."""
    PORT = 5000
    HOST = "0.0.0.0"
    
    # Change to the directory containing the website files
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Create server with SO_REUSEADDR to handle port reuse
    class ReuseTCPServer(socketserver.TCPServer):
        allow_reuse_address = True
    
    with ReuseTCPServer((HOST, PORT), NoCacheHTTPRequestHandler) as httpd:
        print(f"Serving HTTP on {HOST} port {PORT} (http://{HOST}:{PORT}/) ...")
        print("Cache control headers enabled for Replit compatibility")
        httpd.serve_forever()

if __name__ == "__main__":
    main()