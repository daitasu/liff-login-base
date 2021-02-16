import express from 'express';

const router = express.Router();

// GET  http://localhost:3000/api/v1/habit/test
router.get('/test', (req, res) => {
  res.status(200).json({
    message: 'This is habit api',
  });
});

export default router;
