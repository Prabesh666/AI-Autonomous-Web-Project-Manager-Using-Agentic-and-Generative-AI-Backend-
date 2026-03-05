import express from "express";
import { runAgent } from "../controllers/agent.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

/*
POST /api/agents/run
Run an AI agent
*/

router.post("/run", verifyToken, runAgent);

export default router;