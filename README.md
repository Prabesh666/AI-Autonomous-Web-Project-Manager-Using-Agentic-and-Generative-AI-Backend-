# AI Autonomous Web Project Manager – Backend

A scalable **Node.js + Express + MongoDB** backend for an **AI-driven autonomous web project management system**.
This backend provides authentication, project management APIs, task management, reporting, and agent-based decision modules.

---

## 📌 Project Overview

The **AI Autonomous Web Project Manager** is designed to automate and manage software projects using **Agentic AI and Generative AI**.
The backend exposes REST APIs that handle authentication, project creation, task tracking, and system decision modules.

This system is designed with a **modular and scalable architecture** suitable for research and production environments.

---

## 🚀 Features

* User Authentication (Register, Login, JWT)
* Password Recovery (Forgot Password & Reset Password)
* Protected API Routes
* Role-Based Access Control
* Project Management APIs
* Task Management APIs
* Agent Decision System
* Reporting System
* Modular Backend Architecture

---

## 🏗 Backend Architecture

The project follows a **layered architecture**:

```
Controller → Service → Model → Database
```

This ensures clean code separation and scalability.

---

## 📁 Project Structure

```
src
│
├── agents
│
├── config
│
├── controllers
│   ├── auth.controller.js
│   ├── project.controller.js
│   ├── task.controller.js
│   ├── report.controller.js
│   └── agent.controller.js
│
├── docs
│
├── engine
│
├── logs
│
├── middleware
│   └── auth.middleware.js
│
├── models
│   ├── user.model.js
│   ├── project.model.js
│   ├── task.model.js
│   ├── report.model.js
│   └── decision.model.js
│
├── routes
│   ├── auth.routes.js
│   ├── project.routes.js
│   ├── task.routes.js
│   ├── report.routes.js
│   ├── agent.routes.js
│   └── health.routes.js
│
├── services
│
├── utils
│
├── validators
│
├── app.js
└── server.js
```

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* dotenv
* Nodemon
* Postman (API Testing)

---

## 🔑 Authentication Flow

The system implements secure authentication using **JWT tokens**.

### Authentication APIs

| Method | Endpoint                          | Description          |
| ------ | --------------------------------- | -------------------- |
| POST   | `/api/auth/register`              | Register new user    |
| POST   | `/api/auth/login`                 | User login           |
| POST   | `/api/auth/forgot-password`       | Generate reset token |
| PUT    | `/api/auth/reset-password/:token` | Reset password       |

---

## 🔐 Protected Routes

Routes requiring authentication must include a **JWT token** in the header:

```
Authorization: Bearer <JWT_TOKEN>
```

Example:

```
GET /api/projects
```

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/yourusername/ai-autonomous-project-backend.git
```

Navigate to the project folder:

```
cd ai-autonomous-project-backend
```

Install dependencies:

```
npm install
```

---

## ▶️ Running the Server

Start development server:

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 🗄 Database Configuration

MongoDB connection string example:

```
MONGO_URI=mongodb://localhost:27017/ai-project
```

---

## 🧪 API Testing

APIs can be tested using:

* Postman
* Thunder Client
* Insomnia

Example request:

```
GET http://localhost:5000/api/projects
```

Header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📊 Future Enhancements

* AI-powered task prioritization
* Automated project generation
* GitHub repository automation
* AI agent collaboration
* Real-time analytics dashboard
* CI/CD pipeline integration

---

## 👨‍💻 Author

**Prabesh Shah**

AI Autonomous Web Project Manager – Research Project

---

## 📄 License

This project is intended for **research and educational purposes**.
