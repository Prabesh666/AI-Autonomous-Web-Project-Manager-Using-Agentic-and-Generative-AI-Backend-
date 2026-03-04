import express from "express";
import passport from "passport";

import {
    register,
    login,
    forgotPassword,
    resetPassword
} from "../controllers/auth.controller.js";

const router = express.Router();

/* Email auth */

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);


/* GitHub Login */

router.get(
    "/github",
    passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
    "/github/callback",
    passport.authenticate("github", { session: false }),
    (req, res) => {

        res.json({
            message: "GitHub login successful",
            user: req.user
        });

    }
);


/* Google Login */

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {

        res.json({
            message: "Google login successful",
            user: req.user
        });

    }
);

export default router;