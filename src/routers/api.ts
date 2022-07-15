import { Application } from "express";

import dashboardRouter from "./dashboard.router";

export const loadApiEndpoints = (app: Application): void => {
  app.use("/api/v1/dashboards", dashboardRouter);
};
