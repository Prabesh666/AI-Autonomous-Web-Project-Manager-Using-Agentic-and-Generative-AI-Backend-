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
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});