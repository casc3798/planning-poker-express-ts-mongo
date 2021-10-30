import { param, body } from "express-validator";

function getPlayerValidator() {
  return [param("id").isMongoId().exists()];
}

function createPlayerValidator() {
  return [body("nickname").isAlphanumeric().exists().trim()];
}

export { getPlayerValidator, createPlayerValidator };
