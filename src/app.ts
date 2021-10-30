/**
 * App Variables
 */

import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.${process.env.NODE_ENV}.env` });
import "./config/environment";

/**
 * Database connection
 */
//import "./database/connection/database";

/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as routes from "./routes/index";
/**
 *  App Configuration
 */

const app = express();

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": ["'self'", "https://cdn.socket.io/4.3.2/socket.io.min.js"],
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/v1", [routes.healthCheckRouter, routes.playerRouter]);

/**
 * Socket Configuration
 */

import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

import playerHandler from "./handlers/player";

const onConnection = (socket: Socket) => {
  socket.emit("greeting-from-server", {
    greeting: "Welcome to your Planning Poker!",
  });
  playerHandler(io, socket);
};

io.on("connect", onConnection);
module.exports = httpServer;
export default httpServer;
