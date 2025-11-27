# Online Bookstore - MERN Stack

A responsive online bookstore application built with MongoDB Atlas, Express, React, and Node.js.

## Features

- Home Page with hero section and features
- User Registration with database storage
- User Login with JWT authentication
- Book Catalogue with search functionality
- Responsive design for all devices
- Cloud database with MongoDB Atlas

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (free tier available at https://www.mongodb.com/cloud/atlas)

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

3. Set up MongoDB Atlas:
   - Create a free account at https://www.mongodb.com/cloud/atlas
   - Create a new cluster (free M0 tier is sufficient)
   - Click "Connect" and choose "Connect your application"
   - Copy the connection string
   - Create a database user with username and password
   - Whitelist your IP address (or use 0.0.0.0/0 for development)

4. Configure environment variables:
   - Open the `.env` file in the root directory
   - Replace `<username>` with your MongoDB Atlas username
   - Replace `<password>` with your MongoDB Atlas password
   - Replace `<cluster-url>` with your cluster URL (e.g., cluster0.xxxxx.mongodb.net)
   - Update `JWT_SECRET` with a secure random string

Example `.env` configuration:
```
MONGODB_URI=mongodb+srv://Atharva:mongopass1234@cluster0.olkdj1k.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_secure_random_string_here
PORT=5000
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

## MongoDB Atlas Setup Guide

1. **Create MongoDB Atlas Account**
   - Visit https://www.mongodb.com/cloud/atlas/register
   - Sign up for a free account

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose the FREE "Shared" tier (M0)
   - Select your preferred cloud provider and region
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Enter username and password (save these for your .env file)
   - Set user privileges to "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add your specific IP address
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<database-name>` with `bookstore` (or your preferred name)

## Troubleshooting

- **Connection Error**: Ensure your IP is whitelisted in MongoDB Atlas Network Access
- **Authentication Failed**: Verify username and password in .env file
- **Database Not Found**: MongoDB Atlas will automatically create the database on first connection
