import { options, dbUri } from "./config";
import mongoose from "mongoose";

mongoose.connect(dbUri, options, (err) => {
  if (err) {
    console.log(err);
    throw new Error("Error connecting to mongo database");
  } else {
    console.log(`Connected to ${dbUri}`);
  }
});

export {};
