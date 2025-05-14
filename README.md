# Task Management Frontend

A React-based frontend for the Task Management application. This application provides a user-friendly interface for managing tasks, including features like task creation, editing, deletion, and bulk import/export functionality.

frontend:https://task-management-front-green.vercel.app/tasks
backend: https://task-management-back-qqaj.onrender.com

## Features

- User authentication (login/register)
- Task management (CRUD operations)
- Task import/export via Excel files
- Responsive design using Tailwind CSS
- Form validation using React Hook Form

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd task-management-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following:
```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
  ├── api/          # API configuration
  ├── contexts/     # React contexts
  ├── pages/        # Page components
  ├── components/   # Reusable components
  ├── App.js        # Main App component
  └── index.js      # Entry point
```

## Technologies Used

- React
- React Router
- React Hook Form
- Axios
- Tailwind CSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
