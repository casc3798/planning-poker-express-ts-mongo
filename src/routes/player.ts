import express from "express";
import { getPlayers, getPlayer } from "../controllers/player/player";
import { getPlayerValidator } from "../controllers/player/validators";
const playerRouter = express.Router();

playerRouter.get("/player", getPlayers);
playerRouter.get("/player/:id", getPlayerValidator(), getPlayer);

export default playerRouter;
