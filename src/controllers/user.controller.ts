import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { config } from "../config/index";
import UserModel, { IUser, LoginCredentials } from "../models/user.model";
import { createDashboard } from "../services/user.services";

export const signup = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: IUser = req.body;

  if (!user.email || !user.password || !user.dashboardName) {
    return res.status(400).json({
      message: "Please. Send your email, password and the dashboard name",
    });
  }

  const existingUser = await UserModel.findOne({
    dashboardName: user.dashboardName,
  });

  if (existingUser) {
    return res
      .status(400)
      .send({ message: "This dashboard name already exists." });
  }

  const newUser = await UserModel.create(user);
  await createDashboard(newUser.dashboardName);
  return res.status(201).send(newUser);
};

const createToken = (user: IUser) => {
  const token = jwt.sign(
    { id: user.id, email: user.email, dashboardName: user.dashboardName },
    config.JWT_SECRET,
    {
      expiresIn: 1800,
    }
  );
  return token;
};

export const signin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: LoginCredentials = req.body;
  if (!payload.dashboardName || !payload.password) {
    return res
      .status(400)
      .send({ message: "Please. Send your password and the dashboard name" });
  }

  const user = await UserModel.findOne({
    dashboardName: payload.dashboardName,
  });

  if (!user) {
    return res
      .status(400)
      .send({ message: "This dashboard doesn't exit or is incorrect" });
  }

  const validPassword = await user.comparePassword(payload.password);

  if (validPassword) {
    const token = createToken(user);
    return res.status(200).json({ token });
  }

  return res.status(400).send({ message: "Dashboard or Password incorrect" });
};
