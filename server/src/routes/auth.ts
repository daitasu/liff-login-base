import express from 'express';
import { authorize } from '../controllers/auth_controller';

const router = express.Router();

router.get('/', authorize);

export default router;
