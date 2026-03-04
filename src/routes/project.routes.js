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
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Test protected route
router.get("/projects", verifyToken, (req, res) => {
    res.json({
        message: "Protected route working",
        user: req.user
    });
});

export default router;