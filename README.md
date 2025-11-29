Leave Management System (MERN Stack)

A full-stack Leave Management System built using MongoDB, Express, React, and Node.js (MERN).
It allows employees to apply for leave and managers to review, approve, or reject requests through an intuitive dashboard.

🚀 Features
👤 Employee

Apply for leave

View leave request status (Pending / Approved / Rejected)

👨‍💼 Manager

View all employee leave requests

Approve / Reject requests

Dashboard showing:

✔ Accepted leaves

✖ Rejected leaves

⏳ Pending leaves

🔐 Authentication

Register / Login

JWT-based secure authentication

Role-based access control (Employee / Manager)

🛠 Tech Stack
Frontend

React (Vite)

Axios

React Router

Tailwind CSS / Custom CSS

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Bcrypt Password Hashing

dotenv

📁 Project Structure
leave-management/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── api/
    │   ├── App.jsx
    │   └── main.jsx
    └── vite.config.js

⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/yourusername/leave-management.git
cd leave-management

🖥 Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run backend:

npm start

🌐 Frontend Setup
cd frontend
npm install
npm run dev

🔗 API Endpoints
Auth

POST /api/auth/register

POST /api/auth/login

Leaves

POST /api/leave/apply

GET /api/leave/myrequests

GET /api/leave/all (Manager)

PUT /api/leave/update/:id (Approve/Reject)

📊 Manager Dashboard

Displays:

✔ Accepted Requests

✖ Rejected Requests

⏳ Pending Requests

🚀 Deployment

Can be deployed using:

Frontend → Vercel / Netlify

Backend → Render / Railway

Database → MongoDB Atlas

🤝 Contributing

Feel free to fork the project and create pull requests.

📜 License

This project is for educational and personal use.
