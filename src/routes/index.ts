import express from 'express';

const router = express.Router();

router.get('/helloWorld', (req, res) => {
  res.status(200).send({ message: 'Hello, world' });
});

export default router;
