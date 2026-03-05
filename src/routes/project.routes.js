// import express from "express";
// import { verifyToken, authorizeRoles } from "../middleware/auth.middleware.js";

// const router = express.Router();

// router.get("/projects", verifyToken, getProjects);

// router.delete(
//     "/delete/:id",
//     verifyToken,
//     authorizeRoles("admin"),
//     deleteProject
// );

// export default router;

import express from "express";
import {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
} from "../controllers/project.controller.js";

import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Create project
router.post("/projects", verifyToken, createProject);

// Get all projects
router.get("/projects", verifyToken, getProjects);

// Get single project
router.get("/projects/:id", verifyToken, getProjectById);

// Update project
router.put("/projects/:id", verifyToken, updateProject);

// Delete project
router.delete("/projects/:id", verifyToken, deleteProject);

export default router;