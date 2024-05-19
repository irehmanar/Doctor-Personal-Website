
# Doctor-Personal-Website

## Description
Doctor-Personal-Website is a comprehensive web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes features such as appointment booking, patient management, prescription handling, promotional content management, and a contact form.

## Table of Contents
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites
Ensure you have the following software installed:
- Node.js
- npm (Node package manager)
- MongoDB

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/irehmanar/Doctor-Personal-Website.git
   cd Doctor-Personal-Website
   ```

2. Install dependencies:
   - Navigate to the directory containing package.json file and install the frontend and backend dependencies:

     npm install


3. Create a `.env` file in the Doctor-Personal-Website directory and add the following environment variables:
   ```
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=your_server_port
   ```

## Database Setup

1. To get a MongoDB URI, you can use MongoDB Atlas, a cloud-based database service. Follow these steps:

   Create an Account: Go to MongoDB Atlas and create a free account.

   Create a Cluster:

   After signing in, click on "Build a Cluster".
   Choose the free tier (shared cluster) and follow the prompts to create your cluster.
   Set Up Your Cluster:

	Click on "Clusters" in the left-hand menu.
	Click on the "Connect" button for your cluster.
	Follow the instructions to whitelist your IP address and create a database user.
	Get the Connection String:

	After setting up your cluster, you will be provided with a connection string. It will look something like this:
	php
	Copy code
	mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
	Replace <username>, <password>, and <dbname> with your MongoDB Atlas username, password, and database name respectively.
	Add the Connection String to Your .env File:

	Copy the connection string and paste it into the MONGO_URI variable in your .env file.


 2. Database Models:
   The project includes the following database models located in the `models` directory:
   - `appointment.js`
   - `ContactUsModel.js`
   - `prescriptionModel.js`
   - `promotionModel.js`
   - `userModel.js`

   These models are used to interact with MongoDB collections for managing appointments, user contacts, prescriptions, promotions, and user details.

## Usage

1. Start the server and client:
   Use the following command to run both the server and client concurrently:
   ```
   npm run both
   ```

2. Access the application:
   Open a web browser and navigate to `http://localhost:3000`.

## Project Structure

- `backend/`: Contains the backend code (Node.js, Express.js, MongoDB).
  - `models/`: Contains Mongoose models for database interactions.
  - `routes/`: Contains route definitions for API endpoints.
  - `controllers/`: Contains business logic for handling requests.
  - `middleware/`: Contains middleware functions for request processing.
  - `config/`: Contains configuration files.
  - `src/`: Contains React components, Redux setup, and other frontend resources.

## Features

- User Authentication: Secure login and registration system.
- Appointment Management: Schedule, view, and manage doctor appointments.
- Patient Management: Keep track of patient information and history.
- Prescription Handling: Create and manage prescriptions for patients.
- Promotional Content: Manage promotional content and offers.
- Contact Form: Users can send messages or inquiries.

## Technologies

- Frontend: React.js, Redux, Axios
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Other: JWT for authentication, bcrypt for password hashing


