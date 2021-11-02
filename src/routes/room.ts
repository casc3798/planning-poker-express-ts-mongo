import express from "express";
import { updateRoom, createRoom } from "../controllers/room/room";
import {
  updateRoomValidator,
  createRoomValidator,
} from "../controllers/room/validators";
const roomRouter = express.Router();

roomRouter.put("/room/:id", updateRoomValidator(), updateRoom);
roomRouter.post("/room", createRoomValidator(), createRoom);

export default roomRouter;
