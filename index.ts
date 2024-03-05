import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import { sequelize } from "./models/db";

const app = express();
const port = 3000;

// Sync models with the database
sequelize.sync();

app.use(bodyParser.json());

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
