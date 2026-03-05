import express from "express";
import {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} from "../controllers/task.controller.js";

import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/tasks", verifyToken, createTask);

router.get("/tasks/project/:projectId", verifyToken, getTasks);

router.get("/tasks/:id", verifyToken, getTaskById);

router.put("/tasks/:id", verifyToken, updateTask);

router.delete("/tasks/:id", verifyToken, deleteTask);

export default router;