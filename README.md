# Learn Express - Basic Routing

This is a simple Node.js project to demonstrate basic routing using the Express.js framework.

## Features

- Basic GET and POST routes
- Route parameters handling
- Query string handling
- Custom 404 route handler

## Routes Overview

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Returns homepage |
| `/about` | GET | Returns about page |
| `/cats` | GET | Returns cats page |
| `/cats` | POST | Returns POST request to cats page |
| `/blog/:title/:category/:author` | GET | Displays blog post details using route params |
| `/search?q=keyword` | GET | Displays search results based on query string |
| `*` | ALL | Returns custom 404 page |

## How to Run

1. Install dependencies:
   ```bash
   npm install

2. Run the server:
   ```bash
   node index.js

3. Server will be running at:
   ```bash
   
    http://localhost:8080





Tech Stack
Node.js

Express.js


---

