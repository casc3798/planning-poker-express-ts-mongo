import jwt from "jsonwebtoken";

function generateToken(payload: any) {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string);
  return token;
}

export { generateToken };
