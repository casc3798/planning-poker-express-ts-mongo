/**
 * App Variables
 */

import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.${process.env.NODE_ENV}.env` });
import "./config/environment";

/**
 * Database connection
 */
import "./database/connection/database";

/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as routes from "./routes/index";
/**
 *  App Configuration
 */

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/v1", [routes.healthCheckRouter]);

module.exports = app;
export default app;
