import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Project name is required"],
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        status: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default: "pending"
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        }

    },
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;