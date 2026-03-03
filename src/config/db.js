import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async () => {
    try {
        await mongoose.connect(env.mongoUri, {
            autoIndex: true
        });

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;   