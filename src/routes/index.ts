import express from 'express';
import user from './user';
import activity from './activity';
import habit from './habit';
import auth from './auth';

const router = express.Router();

// Authorication
router.use('/auth', auth);

// Controller
router.use('/user', user);
router.use('/activity', activity);
router.use('/habit', habit);

export default router;
