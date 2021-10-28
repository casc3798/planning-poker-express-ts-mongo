import { Request, Response } from "express";

/**
 * Callback triggered by the GET / endpoint. Returns a status 200 code and a simple
 * message to say that the server is up
 *
 * @returns Server response (if successfull, contains only a message saying ok)
 *
 */
async function healthCheck(req: Request, res: Response) {
  return res.json({ message: "ok" });
}

export default healthCheck;
