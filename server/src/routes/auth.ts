import express from 'express';
import passport from '../lib/passport';

const router = express.Router();

router.get('/twitter', passport.authenticate('twitter'));

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/views/failure',
  }),
  (req, res) => {
    res.redirect('/views/success');
  }
);

export default router;
