import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.use(express.urlencoded({ extended: true }));

try {
  await db.authenticate();
  console.log('Database Connected...');

  app.use(cors({ credentials: true, origin: ['http://localhost:4200'] }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(router);

  httpServer.listen(5000, () => console.log('Server running at port 5000'));
} catch (error) {
  console.error(error);
}
