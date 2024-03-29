import mongoose from "mongoose";

import { Dashboard } from "../types/dashboard.model";

const DashboardSchema = new mongoose.Schema({
  title: String,
  members: [
    {
      id: String,
      name: String,
      image: String,
    },
  ],
  tasks: [
    {
      id: String,
      title: String,
      assignedMembers: [
        {
          id: String,
          name: String,
          image: String,
        },
      ],
    },
  ],
});

const DashboardModel = mongoose.model<Dashboard>("dashboards", DashboardSchema);

export default DashboardModel;
