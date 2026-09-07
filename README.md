# DevTask-API-s

REST API backend for the DevTasks Android application.

## Features

- Create tasks
- Retrieve tasks
- Update tasks
- Delete tasks

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a task |
| PATCH | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Request Example

POST /api/tasks

{
  "title": "Learn Kotlin",
  "description": "Study Kotlin fundamentals"
}

## Response

{
  "success": true,
  "task": {...}
}

## Project Structure

config/
controller/
models/
routes/
index.js
