import { Request, Response } from "express";

import { getDashboard } from "../store/dashboard.store";

export const getDashboardById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const dashboardId = "62d1da628ac5f31e8848d36c";
  const dashboard = await getDashboard(dashboardId);
  if (dashboard) {
    return res.status(200).json(dashboard);
  }
  return res.status(400).json({ message: "We couldn't find the dashboard" });
};
