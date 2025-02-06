import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error("Erro: MONGODB_URI não está definida!");
    process.exit(1);
  }

  await mongoose.connect(MONGODB_URI);
  console.log("Database connected");
};