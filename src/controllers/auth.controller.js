import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


// REGISTER
export const register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// LOGIN
export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const resetToken = crypto.randomBytes(20).toString("hex");

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

        await user.save();

        res.json({
            message: "Reset token generated",
            token: resetToken
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// RESET PASSWORD
export const resetPassword = async (req, res) => {
    try {

        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid or expired token"
            });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.json({
            message: "Password reset successful"
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};