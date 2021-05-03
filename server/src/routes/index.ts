import express from 'express';
import auth from './auth';

const router = express.Router();

//Authorization
router.use('/auth', auth);

// ping
router.get('/ping', (req, res) => {
  res.status(200).json({
    message: 'Success!!',
  });
});

export default router;
