import mongoose from "mongoose";

import { config } from "../config";

export const connectDb = (): void => {
  const uri: string = config.MONGO_URI;
  mongoose.connect(uri);
  mongoose.connection.once("open", () => {
    console.log("[MONGO] Connection stablished");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err);
    process.exit(1);
  });
};
