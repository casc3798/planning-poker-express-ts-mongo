import express from "express";
import healthCheck from "../controllers/healthCheck/healthCheck";
const healthCheckRouter = express.Router();

// Set route for testing
healthCheckRouter.get("/", healthCheck);

export default healthCheckRouter;
