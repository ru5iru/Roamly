import express from 'express';
import { getClientSecret } from '../controllers/paymentController.js';

const router = express.Router();

router.post("/create-payment-intent", getClientSecret);

export default router;