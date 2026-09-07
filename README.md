# DevTask API

REST API backend for the DevTasks Android application.

The API provides task management functionality and handles communication between the Android application and MongoDB.

## Features

- Create tasks
- Retrieve tasks
- Update tasks
- Delete tasks
- JSON-based REST API
- MongoDB persistence
- Input validation and error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API
- JSON

## Architecture

```text
DevTasks Android App
        │
        │ HTTP / JSON
        ▼
   Express.js API
        │
        │ Mongoose
        ▼
      MongoDB
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## API Usage

### Create a Task

**POST** `/api/tasks`

Request body:

```json
{
  "title": "Learn Kotlin",
  "description": "Study Kotlin fundamentals"
}
```

Response:

```json
{
  "success": true,
  "task": {
    "_id": "...",
    "title": "Learn Kotlin",
    "description": "Study Kotlin fundamentals",
    "completed": false
  }
}
```

### Retrieve Tasks

**GET** `/api/tasks`

Response:

```json
{
  "success": true,
  "tasks": [
    {
      "_id": "...",
      "title": "Learn Kotlin",
      "description": "Study Kotlin fundamentals",
      "completed": false
    }
  ]
}
```

### Update a Task

**PATCH** `/api/tasks/:id`

Request body:

```json
{
  "completed": true
}
```

Response:

```json
{
  "success": true,
  "task": {
    "_id": "...",
    "title": "Learn Kotlin",
    "description": "Study Kotlin fundamentals",
    "completed": true
  }
}
```

You can also update the title or description:

```json
{
  "title": "Learn Kotlin and Android",
  "description": "Study Kotlin and Android fundamentals"
}
```

### Delete a Task

**DELETE** `/api/tasks/:id`

Response:

```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

## Project Structure

```text
DevTasks-API/
├── config/
│   └── db.js
├── controller/
│   └── taskController.js
├── models/
│   └── taskSchema.js
├── routes/
│   └── taskRoute.js
├── index.js
├── package.json
└── README.md
```

### Structure Overview

- **config/** — Database configuration and connection
- **controller/** — Task request handling and business logic
- **models/** — MongoDB/Mongoose models
- **routes/** — API route definitions
- **index.js** — Express application entry point

## Android Application

This API is consumed by the DevTasks Android application built with Kotlin and Jetpack Compose.

**Android repository:**  
[DevTasks](https://github.com/Sharon812/DevTask-Android)

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

The `.env` file should not be committed to the repository.

## Current Status

The API currently supports the complete task CRUD workflow:

- Create tasks
- Retrieve tasks
- Update task completion status
- Update task details
- Delete tasks
- MongoDB persistence

Authentication and user-specific task management are planned as future improvements.

## License

This project is built as a learning and portfolio project.
