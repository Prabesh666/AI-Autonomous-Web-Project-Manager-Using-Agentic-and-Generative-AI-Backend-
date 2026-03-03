import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
    "PORT",
    "MONGO_URI",
    "JWT_SECRET",
    "OPENAI_API_KEY"
];

requiredEnv.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
});

export default {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    openaiKey: process.env.OPENAI_API_KEY,
    clientUrl: process.env.CLIENT_URL
};