import { Request, Response } from "express";
import Room from "../../models/room/roomSchema";

/**
 * Callback triggered by the PUT /room/:id endpoint. Update the data of the
 * room found by id
 *
 * @returns Server response (if successfull, containing the updated room detail)
 *
 */
async function updateRoom(req: Request, res: Response) {
  try {
    const roomUpdated = await Room.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    return res.json({ message: "Room updated", data: roomUpdated });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error", err });
  }
}

/**
 * Callback triggered by the POST /room endpoint. Stores a new room in the
 * database and returns the new room data
 *
 * @returns Server response (if successfull, containing the new room detail)
 *
 */
async function createRoom(req: Request, res: Response) {
  try {
    const room = new Room(req.body);
    const newRoom = await room.save();
    return res.status(201).json({ message: "Room created", data: newRoom });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error", err });
  }
}

export { updateRoom, createRoom };
