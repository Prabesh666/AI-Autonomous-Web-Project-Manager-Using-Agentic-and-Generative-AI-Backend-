import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";

/* GitHub OAuth */

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "http://localhost:5001/api/auth/github/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            try {

                let user = await User.findOne({ githubId: profile.id });

                if (!user) {
                    user = await User.create({
                        name: profile.displayName,
                        email: profile.emails?.[0]?.value,
                        githubId: profile.id
                    });
                }

                return done(null, user);

            } catch (error) {
                return done(error, null);
            }
        }
    )
);

/* Google OAuth */

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5001/api/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            try {

                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    user = await User.create({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id
                    });
                }

                return done(null, user);

            } catch (error) {
                return done(error, null);
            }
        }
    )
);

export default passport;