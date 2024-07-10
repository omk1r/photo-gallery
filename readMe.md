### README

# Photo Gallery Application

A full-stack photo gallery application that allows users to upload images with titles and descriptions and view them in a gallery. The backend is built using Node.js, Express, and MongoDB, and the frontend is built using React.

## Features

- Upload images with titles and descriptions
- View uploaded images in a gallery
- Responsive and user-friendly interface

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB instance (local or remote)
- Cloudinary account for image storage
- Basic knowledge of React, Node.js, and Express

## Getting Started

### Backend

1. **Navigate to the backend directory:**

   ```sh
   cd server
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the backend server:**

   ```sh
   npm start
   ```

   The backend server will be running on `http://localhost:3000`.

### Frontend

1. **Navigate to the frontend directory:**

   ```sh
   cd client
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the frontend development server:**

   ```sh
   npm start
   ```

   The frontend development server will be running on `http://localhost:3000`.
