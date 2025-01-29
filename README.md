# IRCTC Railway Management System

# Problem Statement

Hey there, Mr. X. You have been appointed to design a railway management system like IRCTC, where users can come on the platform and check if there are any trains available between two stations. The app will also display how many seats are available between any two stations, and the user can book a seat if the availability is greater than 0 after logging in. Since this has to be real-time and multiple users can book seats simultaneously, your code must be optimized enough to handle large traffic and should not fail while doing any bookings. If more than one user simultaneously tries to book seats, only one of the users should be able to book. Handle such race conditions while booking.

# Overview

This Railway Management System enables train seat bookings, checks train availability, updates train details, and enforces role-based access control. The backend is built using Node.js, Express.js, and MySQL.

# Features

User authentication (registration & login)

1.JWT-based secure access

2.Train availability check

3.Real-time seat booking with race condition handling

4.Admin functionalities (add/update train details, seat availability)

5.Role-based access (Admin/User)

6.Error handling & input validation

# Project Setup

# Prerequisites

Ensure the following are installed:

Node.js (v14+)

MySQL

Postman (for API testing)

# Environment Variables

Create a .env file in the root directory with:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=irctc_db
JWT_SECRET=your_jwt_secret
API_KEY=your_admin_api_key

# Installation

1. Clone the repository: https://github.com/Hiomio/WorkIndia_Assignment-.git
2. Install dependencies: npm install
3. Setup MySQL database:
   CREATE DATABASE irctc_db;
# USE irctc_db;
a. CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
b. CREATE TABLE trains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    train_number VARCHAR(50) NOT NULL,
    source VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    total_seats INT NOT NULL,
    available_seats INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
c. CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    train_id INT,
    seats INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (train_id) REFERENCES trains(id) );

  # Start Server 
  By default, the server runs on http://localhost:3000.


# API Endpoints 
User Route
1. Register a new user
   * HTTP Method :- POST
   * Endpoint :- http://localhost:3000/user/register
   * Body:
            {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password"
      }
2 . Login
HTTP Method :- POST
Endpoint :- http://localhost:3000/user/login  
Body:
    {
  "email": "john@example.com",
  "password": "password"
    }
3. Check Train Availability:
    HTTP Method :- GET
Endpoint :- http://localhost:3000/user/availability?source=Ranchi&destination=Delhi
Query Parameters
source: Source station (e.g., "Ranchi")
destination: Destination station (e.g., "Delhi")
Response:

{
  "available": true,
  "availableTrainCount": 1,
  "trains": [
    {
      "trainNumber": "123123",
      "availableSeats": 600
    }
  ]
}

4 .Book Seats
HTTP Method :- POST
Endpoint :- http://localhost:3000/user/book
Request Body:

  {
  "trainId": 1,
  "seatsToBook": 2
}
Response:
{
  "message": "Seats booked successfully"
}

Note :- Requires JWT authentication.

5. Booking Details

HTTP Method :- GET

Endpoint :- http://localhost:3000/user/getAllbookings

Response:

[
    {
        "booking_id": 17,
        "number_of_seats": 50,
        "train_number": "123123",
        "source": "Ranchi",
        "destination": "Delhi"
    }
]

# Admin Routes
1. Add a new train
   HTTP Method :- POST

Endpoint :- http://localhost:3000/admin/addTrain

Request Body:

{
    "message": "Trains added successfully",
    "trainIds": [
        {
            "trainNumber": "172622",
            "trainId": 21
        }
    ]
  }

       * Headers :
         * x-api-key: Your admin API key which is stored in .env
2. Update seat availability

HTTP Method :- PUT
Endpoint :- http://localhost:3000/admin/update-seats/10
Request Body:

 {
  "totalSeats": 200,
  "availableSeats": 150
 }

    * Response:
  {
  "message": "Seats updated successfully"
}

    * Headers:
        * x-api-key:  Your admin API key which is stored in .env 
        # Running Tests
You can test all the available APIs using Postman. The endpoints are well-structured and follow RESTful conventions.

[
  {
    "trainNumber": "123123",
    "source": "Ranchi",
    "destination": "Delhi",
    "totalSeats": 300
  },
  {
    "trainNumber": "124124",
    "source": "Ranchi",
    "destination": "Delhi",
    "totalSeats": 350
  },
  {
    "trainNumber": "125125",
    "source": "Ranchi",
    "destination": "Delhi",
    "totalSeats": 400
  },
  {
    "trainNumber": "126126",
    "source": "Ranchi",
    "destination": "Delhi",
    "totalSeats": 500
  },
  {
    "trainNumber": "127127",
    "source": "Ranchi",
    "destination": "Delhi",
    "totalSeats": 600
  }
]

# Technologies Used
1.Node.js: For backend logic
2.Express.js: Web framework for building the RESTful API
3.MySQL: Database for storing train, user, and booking data
4.JWT: For authentication and authorization
5.bcrypt: For hashing the passwords
6.dotenv: For managing environment variables

# Future Enhancements
1.Add frontend interface using React or Angular
2.Implement seat selection

Feel free to fork this repository and contribute via pull requests. Any bug fixes, enhancements, or suggestions are welcome!

🚀 Happy Coding!















