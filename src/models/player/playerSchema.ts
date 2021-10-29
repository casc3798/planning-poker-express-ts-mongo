import { generateToken } from "../../utils/jwt/jwt";
import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new Schema({
  nickname: { type: String, required: true },
  token: {
    type: String,
    required: true,
  },
});

playerSchema.pre("save", function (next) {
  this.token = generateToken(this.nickname);
  next();
});

const Player = mongoose.model("Player", playerSchema);

export default Player;
