import { Router } from "express";

import { getDashboardById } from "../controllers/dashboard.controller";
import DashboardModel from "../models/dashboard.model";
import { Dashboard } from "../types/dashboard.model";

const dashboardRouter = Router();

dashboardRouter.get("/:id", async (_req, res) => {
  const dashboardId = "62d1da628ac5f31e8848d36c";
  const data = await getDashboardById(dashboardId);
  res.send(data);
});

dashboardRouter.post("/:id", async (req, res) => {
  const payload: Dashboard = req.body;
  const dashboard = await DashboardModel.updateOne(
    { _id: payload._id },
    payload
  );

  res.status(201).send(dashboard);
});

export default dashboardRouter;
