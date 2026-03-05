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



# Project Module – AI Autonomous Web Project Manager

## Overview

The **Project Module** manages all project-related operations in the backend of the **AI Autonomous Web Project Manager** system.
It allows authenticated users to create, read, update, and delete projects while ensuring that each project belongs to the authenticated user.

All project APIs are **protected using JWT authentication**.

---

# Features

* Create new projects
* Retrieve all projects for the logged-in user
* Retrieve a single project by ID
* Update project details
* Delete projects
* Secure access using JWT authentication
* User ownership validation

---

# Folder Structure

```
src
│
├── controllers
│   └── project.controller.js
│
├── models
│   └── project.model.js
│
├── routes
│   └── project.routes.js
│
├── middleware
│   └── auth.middleware.js
│
└── services
    └── project.service.js
```

---

# Project Model

The project schema defines how projects are stored in MongoDB.

Fields:

| Field       | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| name        | String   | Name of the project                           |
| description | String   | Project description                           |
| status      | String   | Current project status                        |
| owner       | ObjectId | Reference to the user who created the project |
| createdAt   | Date     | Automatically generated timestamp             |
| updatedAt   | Date     | Automatically generated timestamp             |

Example Document:

```
{
 "_id": "65abc123",
 "name": "AI Website Builder",
 "description": "System that generates websites automatically",
 "status": "pending",
 "owner": "69a7cdfd248c686b0ff6ec40",
 "createdAt": "2026-03-05T10:00:00",
 "updatedAt": "2026-03-05T10:00:00"
}
```

---

# API Endpoints

## Create Project

Creates a new project for the authenticated user.

**Endpoint**

```
POST /api/projects
```

Headers

```
Authorization: Bearer JWT_TOKEN
Content-Type: application/json
```

Body

```
{
 "name": "AI Autonomous Web Project Manager",
 "description": "System that generates full web applications automatically"
}
```

Response

```
{
 "success": true,
 "project": {
   "_id": "PROJECT_ID",
   "name": "AI Autonomous Web Project Manager",
   "status": "pending"
 }
}
```

---

## Get All Projects

Returns all projects belonging to the authenticated user.

**Endpoint**

```
GET /api/projects
```

Headers

```
Authorization: Bearer JWT_TOKEN
```

Response

```
{
 "success": true,
 "count": 1,
 "projects": []
}
```

---

## Get Single Project

Fetch a specific project using its ID.

**Endpoint**

```
GET /api/projects/:id
```

Example

```
GET /api/projects/65abc123
```

Response

```
{
 "success": true,
 "project": {}
}
```

---

## Update Project

Updates project information.

**Endpoint**

```
PUT /api/projects/:id
```

Body Example

```
{
 "status": "in-progress"
}
```

---

## Delete Project

Deletes a project permanently.

**Endpoint**

```
DELETE /api/projects/:id
```

Response

```
{
 "success": true,
 "message": "Project deleted successfully"
}
```

---

# Security

The Project Module uses **JWT authentication middleware**.

Every request must include:

```
Authorization: Bearer JWT_TOKEN
```

The middleware verifies the token and attaches the authenticated user to the request.

---

# Request Flow

```
Client (Postman / Frontend)
        ↓
Route (project.routes.js)
        ↓
JWT Middleware
        ↓
Controller
        ↓
Service Layer
        ↓
MongoDB (Project Model)
```

---

# Future Improvements

The Project Module will integrate with additional modules:

* **Task Module** – manage project tasks
* **Agent Module** – assign AI agents to tasks
* **Decision Engine** – autonomous project decision making
* **Report Module** – generate project performance reports

These modules will transform the system into a fully functional **AI Autonomous Web Project Manager**.

---

# Task Module

## Overview

The **Task Module** manages tasks associated with projects in the **AI Autonomous Web Project Manager** backend.
Each task represents a specific unit of work that belongs to a project and can be tracked through different stages such as **todo**, **in-progress**, and **done**.

This module follows a **modular layered architecture**:

```
Routes → Controllers → Services → Models → Database
```

This design improves scalability, maintainability, and separation of concerns.

---

# Module Architecture

```
src
│
├── controllers
│   └── task.controller.js
│
├── services
│   └── task.service.js
│
├── models
│   └── task.model.js
│
├── routes
│   └── task.routes.js
```

### Responsibilities

| Layer           | Responsibility                      |
| --------------- | ----------------------------------- |
| **Routes**      | Defines API endpoints               |
| **Controllers** | Handles HTTP requests & responses   |
| **Services**    | Contains business logic             |
| **Models**      | Defines MongoDB schema              |
| **Middleware**  | Handles authentication and security |

---

# Task Model

Tasks are stored in MongoDB using Mongoose.

### Fields

| Field       | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| title       | String   | Task title                                    |
| description | String   | Task details                                  |
| status      | String   | Task progress (`todo`, `in-progress`, `done`) |
| project     | ObjectId | Reference to Project                          |
| assignedTo  | ObjectId | Assigned user                                 |

### Example Document

```json
{
  "_id": "66ab12c3...",
  "title": "Design Landing Page",
  "description": "Create UI for homepage",
  "status": "todo",
  "project": "669940597556769f35bea473",
  "assignedTo": "69a7cdfd248c686b0ff6ec40",
  "createdAt": "2026-03-04T08:12:21.000Z"
}
```

---

# API Endpoints

All task endpoints require **JWT authentication**.

Header:

```
Authorization: Bearer JWT_TOKEN
```

---

## Create Task

Creates a new task for a project.

**Endpoint**

```
POST /api/tasks
```

**Request Body**

```json
{
 "title": "Design Landing Page",
 "description": "Create homepage UI",
 "project": "PROJECT_ID"
}
```

**Response**

```json
{
 "success": true,
 "task": {
   "_id": "TASK_ID",
   "title": "Design Landing Page",
   "status": "todo"
 }
}
```

---

## Get Tasks for a Project

Returns all tasks associated with a specific project.

**Endpoint**

```
GET /api/tasks/project/:projectId
```

**Response**

```json
{
 "success": true,
 "tasks": [
   {
     "_id": "TASK_ID",
     "title": "Design Landing Page",
     "status": "todo"
   }
 ]
}
```

---

## Get Single Task

Retrieve a specific task.

```
GET /api/tasks/:id
```

---

## Update Task

Update task status or details.

```
PUT /api/tasks/:id
```

**Example Request**

```json
{
 "status": "in-progress"
}
```

---

## Delete Task

Remove a task from the project.

```
DELETE /api/tasks/:id
```

---

# Security

The Task Module uses **JWT authentication middleware** to protect routes.

```
verifyToken middleware
```

Flow:

```
Client Request
   ↓
JWT Authentication
   ↓
Task Routes
   ↓
Controller
   ↓
Service Layer
   ↓
MongoDB
```

---

# Task Lifecycle

Tasks move through three main states:

```
todo → in-progress → done
```

This allows the system to track project progress and automate task management.

---

# Integration with Project Module

Tasks belong to a project through a reference:

```
Project
   ↓
Multiple Tasks
```

This relationship allows the system to:

* Organize work per project
* Track task completion
* Enable AI-driven automation

---

# Future Enhancements

Planned improvements for the Task Module include:

* AI-based task generation
* Automatic task assignment
* Task priority system
* Task progress analytics
* Project completion prediction

These features will support the **autonomous workflow capabilities** of the platform.

---

#


## 🧪 API Testing

APIs can be tested using:

* Postman
* Thunder Client
* Insomnia

Example request:

```
GET http://localhost:5001/api/projects
```

Header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 🚀 Future Enhancements

The following features are planned to further enhance the capabilities of the **AI Autonomous Web Project Manager**:

- **AI-Driven Task Prioritization** – Intelligent prioritization of tasks based on project requirements, dependencies, and deadlines.
- **Automated Project Generation** – AI-powered generation of project structures, workflows, and initial tasks from high-level requirements.
- **GitHub Repository Automation** – Automatic creation of repositories, code scaffolding, and integration with version control workflows.
- **AI Agent Collaboration** – Multiple autonomous agents coordinating to manage tasks, optimize workflows, and resolve dependencies.
- **Real-Time Analytics Dashboard** – Interactive dashboards providing insights into project progress, task completion rates, and performance metrics.
- **CI/CD Pipeline Integration** – Automated build, testing, and deployment pipelines integrated directly into the project workflow.

---

## 👨‍💻 Author

**Prabesh Shah**  
Developer & Researcher  

**Project:** *AI Autonomous Web Project Manager Using Agentic and Generative AI*

---

## 📄 License

This project is developed for **research and educational purposes**.  
The codebase may be used for **academic study, experimentation, and learning**, but is not intended for commercial distribution without permission.

---