## Book Management API  

This is a simple **Node.js** and **Express.js** backend application that manages books using a **MySQL** database. It provides RESTful API endpoints to create, read, and update books.  

### Features  
- Connects to a MySQL database using mysql2  
- Supports CORS for frontend integration  
- API routes to fetch, add, and update books  
- Automatically creates the books table if it does not exist  

## Technologies

- **Frontend**: React, React Router, Fetch API
- **Backend**: Express.js
- **Database**: Mysql
- **CORS**: For handling cross-origin requests between the React frontend and Express backend.

## Getting Started
### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)


### Frontend Setup (React)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rishikumar-simform/trainee_frontend.git
   ```


2. **Navigate to the client folder** and install dependencies:

   ```bash
   cd trainee_frontend
   npm install
   ```

3. **Run the React frontend**:

   To start the frontend development server, run:

   ```bash
   npm run dev
   ```

   This will start the React app on `http://localhost:3000` by default.