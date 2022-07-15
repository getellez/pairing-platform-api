import { Router } from "express";

import { getDashboardById } from "../controllers/dashboard.controller";

const dashboardRouter = Router();

dashboardRouter.get("/:id", async (_req, res) => {
  const dashboardId = "62d1da628ac5f31e8848d36c";
  const data = await getDashboardById(dashboardId);
  res.send(data);
});

export default dashboardRouter;
