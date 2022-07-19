import { Router } from "express";
import passport from "passport";

import { getDashboardById } from "../controllers/dashboard.controller";
import DashboardModel from "../models/dashboard.model";
import { Dashboard } from "../types/dashboard.model";

const dashboardRouter = Router();

dashboardRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getDashboardById
);

dashboardRouter.post("/:id", async (req, res) => {
  const payload: Dashboard = req.body;
  const dashboard = await DashboardModel.updateOne(
    { _id: payload._id },
    payload
  );

  res.status(201).send(dashboard);
});

export default dashboardRouter;
