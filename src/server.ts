import app from "./app";
import { connectDb } from "./database/mongo";

/**
 * Start Express server.
 */

connectDb();

const server = app.listen(app.get("port"), () => {
  console.log(
    "[APP] App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;
