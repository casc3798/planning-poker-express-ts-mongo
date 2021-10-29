import { Request, Response } from "express";
import Player from "../../models/player/playerSchema";

/**
 * Callback triggered by the GET /player endpoint. Returns the list of
 * players
 *
 * @returns Server response (if successfull, containing the list of players)
 *
 */
async function getPlayers(req: Request, res: Response) {
  try {
    const players = await Player.find();
    return res.status(200).send(players);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error", err });
  }
}

/**
 * Callback triggered by the GET /player:id endpoint. Returns player detail
 *
 * @returns Server response (if successfull, containing the player detail)
 *
 */
async function getPlayer(req: Request, res: Response) {
  try {
    const player = await Player.findById(req.params.id);
    return player;
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error", err });
  }
}

export { getPlayers, getPlayer };
