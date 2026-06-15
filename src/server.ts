import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => res.send("API is running"));


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
