import express from 'express';
import { notifyLikesCommentsShares } from '../controllers/notificationController';

const router = express.Router();

router.post('/notify', notifyLikesCommentsShares);

export default router;
