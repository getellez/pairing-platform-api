import mongoose from "mongoose";

export interface Member {
  id: string;
  name: string;
  image: string;
}

export interface Task {
  id: string;
  title: string;
  assignedMembers: Member[];
}

export interface Dashboard {
  _id: mongoose.Types.ObjectId;
  title: string;
  members: Member[];
  tasks: Task[];
}
