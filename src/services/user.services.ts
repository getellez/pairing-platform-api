import DashboardModel from "../models/dashboard.model";
import { Dashboard } from "../types/dashboard.model";

export const createDashboard = async (
  dashboardName: string
): Promise<Dashboard> => {
  const newDashboard = await DashboardModel.create({
    title: dashboardName,
    members: [],
    tasks: [],
  });
  return newDashboard;
};
