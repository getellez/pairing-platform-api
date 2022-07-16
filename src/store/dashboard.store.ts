import DashboardModel from "../models/dashboard.model";
import { Dashboard } from "../types/dashboard.model";

export const getDashboard = async (id: string): Promise<Dashboard | null> => {
  const dashboard = await DashboardModel.findOne({ _id: id });
  return dashboard || null;
};
