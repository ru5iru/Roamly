import { createPaymentIntent } from '../models/paymentModel.js';

const getClientSecret = async (req, res) => {
  try {
    const clientSecret = await createPaymentIntent();
    res.json({ clientSecret });
  } catch (e) {
    res.status(400).json({
      error: {
        message: e.message,
      },
    });
  }
};

export { getClientSecret };