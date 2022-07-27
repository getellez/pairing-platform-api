import bcrypt from "bcrypt";
import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  dashboardName: string;
  comparePassword: (password: string) => Promise<boolean>;
}

export interface LoginCredentials {
  dashboardName: string;
  password: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  dashboardName: {
    type: String,
    unique: true,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

const UserModel = model<IUser>("users", UserSchema);

export default UserModel;
