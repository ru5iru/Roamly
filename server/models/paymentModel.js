import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

const createPaymentIntent = async () => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });
    console.log(paymentIntent);

    return paymentIntent.client_secret;
  } catch (e) {
    throw new Error(e.message);
  }
};

export { createPaymentIntent };