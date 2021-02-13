import express from 'express';
import user from './user';
import activity from './activity';
import habit from './habit';

const router = express.Router();

router.use('/user', user);
router.use('/activity', activity);
router.use('/habit', habit);

export default router;
