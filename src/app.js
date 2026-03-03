// import express from "express";
// import helmet from "helmet";
// import cors from "cors";
// import rateLimit from "express-rate-limit";
// import agentRoutes from "./routes/agent.routes.js";
// import errorMiddleware from "./middleware/error.middleware.js";
// import authRoutes from "./routes/auth.routes.js";
// import projectRoutes from "./routes/project.routes.js";
// import taskRoutes from "./routes/task.routes.js";

// import reportRoutes from "./routes/report.routes.js";
// import healthRoutes from "./routes/health.routes.js";

// import env from "./config/env.js";

// const app = express();

// // Security
// app.use(helmet());
// app.use(cors({ origin: env.clientUrl, credentials: true }));
// app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// // Body parser
// app.use(express.json({ limit: "10kb" }));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/projects", projectRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/agents", agentRoutes);
// app.use("/api/reports", reportRoutes);
// app.use("/health", healthRoutes);

// // Error handler
// app.use(errorMiddleware);

// export default app;
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});

export default app;