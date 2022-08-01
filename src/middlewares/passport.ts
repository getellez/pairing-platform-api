import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";

import { currentEnvConfig } from "../config/index";
import UserModel from "../models/user.model";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: currentEnvConfig.JWT_SECRET,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await UserModel.findById(payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, null);
  } catch (error) {
    console.log(error);
  }
});
