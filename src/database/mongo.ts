import mongoose from "mongoose";

import { currentEnvConfig } from "../config/index";

export const connectDb = (): void => {
  const uri: string = currentEnvConfig.MONGO_URI;
  mongoose.connect(uri);
  mongoose.connection.once("open", () => {
    console.log("[MONGO] Connection stablished");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err);
    process.exit(1);
  });
};
