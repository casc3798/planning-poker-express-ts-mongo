import express from "express";
import {
  getPlayers,
  getPlayer,
  createPlayer,
} from "../controllers/player/player";
import {
  getPlayerValidator,
  createPlayerValidator,
} from "../controllers/player/validators";
const playerRouter = express.Router();

playerRouter.get("/player", getPlayers);
playerRouter.get("/player/:id", getPlayerValidator(), getPlayer);
playerRouter.post("/player", createPlayerValidator(), createPlayer);

export default playerRouter;
