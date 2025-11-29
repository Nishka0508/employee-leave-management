# 🚀 Leave Management System (MERN Stack)

A production-ready **Leave Management System** built using the **MERN stack**.  
Employees can apply for leave, check status, while managers can approve/reject requests with a clear dashboard.

---

## 📌 Features

### 👤 Employee
- Apply for leave
- View all submitted leave requests
- Track status: **Pending / Approved / Rejected**

### 👨‍💼 Manager
- View all employee leave requests
- Approve or reject requests
- Dashboard statistics:
  - ✔ Approved requests  
  - ✖ Rejected requests  
  - ⏳ Pending requests  

### 🔐 Authentication & Authorization
- JWT-based login & registration
- Password hashing using bcrypt
- Role-based access (Employee / Manager)

---

## 🛠 Tech Stack

### **Frontend**
- React (Vite)
- Axios
- React Router DOM
- Tailwind CSS / Custom CSS

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- dotenv  

---
leave-management/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
│ ├── api/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
└── vite.config.js


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/leave-management.git
cd leave-management

🖥 Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run backend server:

npm start

🌐 Frontend Setup
cd frontend
npm install
npm run dev

📡 API Endpoints
🔑 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
📝 Leave Management
Method	Endpoint	Description
POST	/api/leave/apply	Apply for leave
GET	/api/leave/myrequests	Employee leave history
GET	/api/leave/all Manager	View all requests
PUT	/api/leave/update/:id	Approve / Reject request
📊 Manager Dashboard Overview

Total pending requests

Total approved requests

Total rejected requests

Table of all leave applications

🚀 Deployment Guide
Frontend

Vercel

Netlify

Backend

Render

Railway

Database

MongoDB Atlas

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to submit a pull request.

📄 License

This project is created for educational and personal use.
## 📁 Project Structure

