import DashboardModel from "../models/dashboard.model";
import { Dashboard } from "../types/dashboard.model";

export const getDashboard = async (
  title: string
): Promise<Dashboard | null> => {
  const dashboard = await DashboardModel.findOne({ title });
  return dashboard || null;
};
