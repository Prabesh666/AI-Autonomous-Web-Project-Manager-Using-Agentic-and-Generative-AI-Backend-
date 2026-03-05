import express from "express";
import session from "express-session";
import passport from "./config/passport.js";
import taskRoutes from "./routes/task.routes.js";
import agentRoutes from "./routes/agent.routes.js";
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";

const app = express();

app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", projectRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api", taskRoutes);

export default app;