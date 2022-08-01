import dotenv from "dotenv";

dotenv.config();

type EnvironmentName = "development" | "production" | "test";
interface Settings {
  [key: string]: string;
  JWT_SECRET: string;
  MONGO_URI: string;
}
type Config = {
  [key in EnvironmentName]: Settings;
};

const currentEnv: string = process.env.NODE_ENV || "development";

export const config: Config = {
  production: {
    JWT_SECRET: "s3cr3t0",
    MONGO_URI:
      "mongodb+srv://germantellezv:g3rm4n.0625@cluster0.g6jc6pl.mongodb.net/easypair_production?retryWrites=true&w=majority",
  },
  development: {
    JWT_SECRET: "s3cr3t0",
    MONGO_URI:
      "mongodb+srv://germantellezv:g3rm4n.0625@cluster0.g6jc6pl.mongodb.net/pairingp_dev?retryWrites=true&w=majority",
  },
  test: {
    MONGO_URI: "",
    JWT_SECRET: "s3cr3t0",
  },
};

export const currentEnvConfig: Settings = config[currentEnv as EnvironmentName];
