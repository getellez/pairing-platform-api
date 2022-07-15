// import { Application, Request, Response } from "express";
import { Application } from "express";

// import CoursesData from "../../data/courses.json";
import dashboardRouter from "../routers/dashboard.router";

export const loadApiEndpoints = (app: Application): void => {
  app.use("/api/v1/dashboards", dashboardRouter);
  /* app.get("/api", (req: Request, res: Response) => {
    return res.status(200).send(CoursesData);
  }); */
};
