import passport from 'passport';
import { Strategy as TwitterStrategy, Profile } from 'passport-twitter';
import dotenv from 'dotenv';
import {
  createUser,
  findUniqueUserByTwitterId,
  findUniqueUserById,
} from '../models/user';

dotenv.config();

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY || '',
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET || '',
      callbackURL: process.env.BASE_URL + '/api/v1/auth/twitter/callback',
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await findUniqueUserByTwitterId(profile.id);
        if (!user) {
          user = await createUser({
            twitterId: profile.id,
            username: profile.username,
            displayName: profile.displayName,
            profileImage: profile.photos?.[0].value || '',
          });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser<string>((user: Express.User, done) => {
  const userProfile = user as Profile;
  done(null, userProfile.id);
});

passport.deserializeUser(async (userId: string, done) => {
  try {
    const user = await findUniqueUserById(userId);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    done(err);
  }
});

export default passport;
