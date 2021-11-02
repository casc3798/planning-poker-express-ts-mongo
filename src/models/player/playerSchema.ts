import { generateToken } from "../../utils/jwt/jwt";
import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema({
  nickname: { type: String, required: true },
  token: {
    type: String,
  },
});

playerSchema.pre("save", function (next) {
  this.token = generateToken({ nickname: this.nickname });
  next();
});

const Player = mongoose.model("Player", playerSchema);

export default Player;
