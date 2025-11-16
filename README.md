# Online Bookstore - MERN Stack

A responsive online bookstore application built with MongoDB, Express, React, and Node.js.

## Features

- Home Page with hero section and features
- User Registration with database storage
- User Login with JWT authentication
- Book Catalogue with search functionality
- Responsive design for all devices

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Installation

1. Install backend dependencies:
```
npm install
```

2. Install frontend dependencies:
```
cd client
npm install
cd ..
```

3. Configure environment variables:
Edit `.env` file and update MongoDB URI if needed

4. Start MongoDB (if using local):
```
mongod
```

## Running the Application

1. Start the backend server:
```
npm start
```

2. In a new terminal, start the React frontend:
```
npm run client
```

The backend runs on http://localhost:5000
The frontend runs on http://localhost:3000

## Adding Sample Books

You can add books using a POST request to `/api/books`:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 12.99,
  "description": "A classic American novel",
  "category": "Fiction",
  "stock": 10
}
```

## Project Structure

```
bookstore-mern/
├── models/          # MongoDB schemas
├── routes/          # API routes
├── client/          # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       └── pages/
├── server.js        # Express server
└── .env            # Environment variables
```

## API Endpoints

- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- GET /api/books - Get all books
- GET /api/books/:id - Get book by ID
- POST /api/books - Add new book
