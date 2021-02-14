import passport from 'passport';
import { Strategy as TwitterStrategy, Profile } from 'passport-twitter';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY || '',
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET || '',
      callbackURL: process.env.BASE_URL + '/api/v1/auth/twitter/callback',
    },
    (token, tokenSecret, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser<Profile['id']>((user: Express.User, done) => {
  const twitterUser = user as Profile;
  done(null, twitterUser.id);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

export default passport;
