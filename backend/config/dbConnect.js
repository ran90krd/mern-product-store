import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to database ${error.message}`);
    process.exit(1);
  }
};