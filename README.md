# MERN_jwt_Authentication
This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the Vite Build tool. This authentication workflow is based off of my MERN Stack From Scratch 


It includes the following:

Backend API with Express & MongoDB
Routes for auth, logout, register, profile, update profile
JWT authentication stored in HTTP-only cookie
Protected routes and endpoints
Custom middleware to check JSON web token and store in cookie
Custom error middleware
React frontend to register, login, logout, view profile, and update profile
React Bootstrap UI library
React Toastify notifications
Usage
Create a MongoDB database and obtain your MongoDB URI - MongoDB Atlas
Create a PayPal account and obtain your Client ID - PayPal Developer
Env Variables
Rename the .env.example file to .env and add the following

 - NODE_ENV = development
 - PORT = ****
 - MONGO_URL = your mongodb url
 - JWT_SECRET = 'use yours'
 - Change the JWT_SECRET to what you want

Install Dependencies (frontend & backend)
 * npm install
 * cd frontend
 * npm install
 * Run

# Run frontend (:3000) & backend (:8080)
npm run dev

# Run backend only
 * npm run server
 * Build & Deploy
# Create frontend prod build
 * cd frontend
 * npm run build
