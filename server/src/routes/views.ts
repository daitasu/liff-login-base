import express from 'express';

const router = express.Router();

router.get('/success', (req, res) => {
  res.status(200).json({
    message: '成功しました',
  });
});
router.get('/failure', (req, res) => {
  res.status(200).json({
    message: '失敗しました',
  });
});

export default router;
