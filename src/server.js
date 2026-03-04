// import app from "./app.js";
// import connectDB from "./config/db.js";
// import env from "./config/env.js";

// const startServer = async () => {
//     await connectDB();

//     app.listen(env.port, () => {
//         console.log(`Server running on port ${env.port}`);
//     });
// };

// startServer();
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

/* Load environment variables FIRST */
dotenv.config();

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
    })
    .catch((error) => {
        console.error("❌ MongoDB Connection Error:", error);
    });

/* Debug check (optional) */
// console.log("GitHub Client ID:", process.env.GITHUB_CLIENT_ID);

/* Server Port */
const PORT = process.env.PORT || 5000;

/* Start Server */
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});