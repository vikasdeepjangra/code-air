import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { compileAndRun } from "./controllers/CompileAndRun";
import { healthChecks } from "./controllers/Healthcheck";
const app = express();
const port = 3300;

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());

app.get("/healthCheck", healthChecks);

app.post("/compileAndRun", compileAndRun);

const server = http.createServer(app);

server.listen(port, () => {
  console.log("Running on Port: ", port);
});
