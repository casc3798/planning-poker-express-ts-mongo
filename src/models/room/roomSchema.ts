import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const roomSchema = new Schema({
  uuid: {
    type: String,
    default: function () {
      return uuidv4();
    },
  },
  name: { type: String, required: true },
  description: { type: String },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  members: [{ type: Schema.Types.ObjectId, ref: "Player" }],
  round: { type: Number, default: 0 },
});

roomSchema.pre("save", function (next) {
  this.members = [this.owner];
  next();
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
