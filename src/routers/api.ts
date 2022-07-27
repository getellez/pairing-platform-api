import { Application } from "express";

import dashboardRouter from "./dashboard.router";
import userRouter from "./user.router";

export const loadApiEndpoints = (app: Application): void => {
  app.use("/api/v1/dashboards", dashboardRouter);
  app.use("/api/v1/auth", userRouter);
};
