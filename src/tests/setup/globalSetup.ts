import * as dotenv from "dotenv";
dotenv.config({
  path: `${__dirname}/../../../.${process.env.NODE_ENV}.env`,
});
import "../../config/environment";

module.exports = async () => {
  try {
    console.log("Here should be the setup process!");
  } catch (err) {
    throw new Error(err as string);
  }
};

export {};
