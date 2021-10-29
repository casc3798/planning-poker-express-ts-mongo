import { param } from "express-validator";

function getPlayerValidator() {
  return [param("id").isMongoId().exists()];
}

export { getPlayerValidator };
