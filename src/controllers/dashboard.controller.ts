import { getDashboard } from "../store/dashboard.store";
import { Dashboard } from "../types/dashboard.model";

export const getDashboardById = async (id: string): Promise<Dashboard> => {
  const dashboard = await getDashboard(id);
  return dashboard;
};
