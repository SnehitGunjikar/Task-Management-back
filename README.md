# Task Management App Backend

A Node.js and Express backend for the Task Management App, using MySQL for data storage.

backend on render link: https://task-management-back-qqaj.onrender.com

## Features

- User authentication (register/login) with JWT
- CRUD operations for tasks
- Secure API endpoints
- MySQL integration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL (v8 or higher)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TaskMgmtApp/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=task_management
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Deployment

- Deployed on Render

## License

MIT 
