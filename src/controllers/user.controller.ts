import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { config } from "../config/index";
import UserModel, { IUser } from "../models/user.model";

export const signup = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.email || !req.body.password || !req.body.dashboardName) {
    return res.status(400).json({
      message: "Please. Send your email, password and the dashboard name",
    });
  }
  const existingUser = await UserModel.findOne({ email: req.body.email });
  console.log("existingUser", existingUser);
  if (existingUser) {
    return res.status(400).send({ message: "This user already exists." });
  }
  const newUser = await UserModel.create(req.body);
  console.log("newUser", newUser);
  return res.status(201).send(newUser);
};

const createToken = (user: IUser) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    config.JWT_SECRET,
    {
      expiresIn: 86400,
    }
  );
  return token;
};

export const signin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("req.body", req.body);
  if (!req.body.email || !req.body.password || !req.body.dashboard_name) {
    return res
      .status(400)
      .send({ message: "Please. Send your email, password and dashboardName" });
  }

  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(400)
      .send({ message: "This user doesn't exit or is incorrect" });
  }

  const validPassword = await user.comparePassword(req.body.password);

  if (validPassword) {
    const token = createToken(user);
    return res.status(200).json({ token });
  }

  return res.status(400).send({ message: "Email or Password is incorrect" });
};
