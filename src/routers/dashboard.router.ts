import { Router } from "express";

const dashboardRouter = Router();

dashboardRouter.get("/:id", (_req, res) => {
  res.send("hola");
});

export default dashboardRouter;
