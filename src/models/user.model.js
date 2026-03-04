import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },

        email: {
            type: String,
            unique: true
        },

        password: {
            type: String
        },

        githubId: {
            type: String
        },

        googleId: {
            type: String
        },

        role: {
            type: String,
            default: "user"
        },

        resetPasswordToken: String,
        resetPasswordExpire: Date
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", userSchema);