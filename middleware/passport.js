import { Strategy, ExtractJwt } from "passport-jwt";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const User = mongoose.model("users");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

export default (passport) => {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.userId).select(
                    "email id"
                );

                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (err) {
                console.log(err);
            }
        })
    );
};
