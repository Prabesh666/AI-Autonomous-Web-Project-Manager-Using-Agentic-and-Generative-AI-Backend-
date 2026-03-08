import dotenv from "dotenv";

/* Load environment variables FIRST */
dotenv.config();

import mongoose from "mongoose";
import app from "./app.js";

/* Debug check (remove later if you want) */
// console.log("GitHub Client ID:", process.env.GITHUB_CLIENT_ID);
// console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);

/* MongoDB connection */
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("📡  MongoDB connected 🟡 successfully! 🛢️");
    })
    .catch((error) => {
        console.error("⚠️ MongoDB connection failed:", error);
    });

/* Server port */
const PORT = process.env.PORT || 5001;

/* Start server */
app.listen(PORT, () => {
    console.log(`🖥️  Server started 🟡 on port  🔌  ${PORT}`);
});