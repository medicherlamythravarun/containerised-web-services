# Containerized REST API with CRUD Functionality

A complete containerized web server hosting a REST API built with Node.js, Express, and MongoDB. The project features a multi-container architecture orchestrated via Docker Compose, including a backend API, a background worker, and a MongoDB database.

## Architecture

- **API Service** (`api`): Node.js + Express REST API running on port `3000`.
- **Worker Service** (`worker`): Node.js background worker simulating periodic tasks.
- **Database** (`database`): MongoDB instance storing application data.

## Prerequisites

- **Docker** and **Docker Compose** installed on your machine.

## Quick Start

1. Clone or navigate to the project directory.
2. Build and start the containers using Docker Compose:

   ```bash
   docker compose up --build -d
   ```

3. The API will be available at `http://localhost:3000/api/items`.

To stop the application, run:

```bash
docker compose down
```

## API Endpoints

The API manages `Item` resources with the following endpoints:

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/items`         | Retrieve all items       |
| GET    | `/api/items/:id`     | Retrieve a specific item |
| POST   | `/api/items`         | Create a new item        |
| PUT    | `/api/items/:id`     | Update an existing item  |
| DELETE | `/api/items/:id`     | Delete an item           |

### Example Payload for POST / PUT

```json
{
  "name": "Smartphone",
  "description": "Latest model smartphone",
  "price": 699.99
}
```

## Useful Links

- **Postman API Collection**: A pre-configured `postman_collection.json` file is included in the root directory. You can import this directly into Postman to test the endpoints.
- **Docker Hub Image URL**: [Placeholder: https://hub.docker.com/r/yourusername/crud-api] (Update this once the image is published).

## Project Structure

```text
.
├── api/                    # Node.js Express REST API
│   ├── src/                # TypeScript source files (Controllers, Models, Routes)
│   ├── Dockerfile          # Multi-stage Docker build for the API
│   └── package.json        
├── worker/                 # Node.js Background Worker
│   ├── index.js            # Worker entry point
│   ├── Dockerfile          # Docker build for the worker
│   └── package.json
├── compose.yaml            # Docker Compose orchestration file
├── README.md               # Project documentation
└── postman_collection.json # Exported Postman collection
```
