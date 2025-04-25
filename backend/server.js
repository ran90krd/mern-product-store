import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDb } from "./config/dbConnect.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(express.json());
app.use("/api/products", productRoutes);

// if (process.env.NODE_ENV === "DEV") {
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});
// }

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
