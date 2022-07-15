import DashboardModel from "../models/dashboard.model";
import { Dashboard } from "../types/dashboard.model";

export const getDashboard = async (id: string): Promise<Dashboard> => {
  const dashboard = (await DashboardModel.findOne({ _id: id })) as unknown;
  return dashboard as Dashboard;
};
