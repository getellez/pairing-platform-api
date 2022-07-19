import cors from "cors";
import express from "express";
import morgan from "morgan";
import passport from "passport";

import passportMiddleware from "./middlewares/passport";
import { loadApiEndpoints } from "./routers/api";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use(passportMiddleware);

loadApiEndpoints(app);

export default app;
