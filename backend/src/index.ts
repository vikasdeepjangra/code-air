import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { compileAndRun } from "./controllers/Run";
const app = express();
const port = 3300;

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());

app.post("/compileAndRun", compileAndRun);

const server = http.createServer(app);

server.listen(port, () => {
  console.log("Running on Port: ", port);
});
