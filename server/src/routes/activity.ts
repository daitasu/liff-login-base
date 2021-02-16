import express from 'express';

const router = express.Router();

// GET  http://localhost:3000/api/v1/activity/test
router.get('/test', (req, res) => {
  res.status(200).json({
    message: 'This is activity api',
  });
});

export default router;
