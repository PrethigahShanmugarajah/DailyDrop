// Server/server.js
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

/* -------- ALLOW MULTIPLE ORIGINS -------- */
const allowedOrigins = ["http://localhost:5173"];

/* -------- MIDDLEWARE CONFIGURATION -------- */
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => res.send("API is Working"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
