import { param, body } from "express-validator";

function updateRoomValidator() {
  return [
    param("id").isMongoId().exists(),
    body("name").isString().trim(),
    body("description").isString().trim(),
    body("owner").isMongoId(),
    body("members").isArray(),
    body("round").isNumeric(),
  ];
}

function createRoomValidator() {
  return [
    body("name").isString().exists().trim(),
    body("description").isString().trim(),
    body("owner").isMongoId().exists(),
  ];
}

export { updateRoomValidator, createRoomValidator };
