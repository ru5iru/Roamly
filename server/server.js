import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from 'cors';
import { connectDB } from "./config/db.js";
const port = process.env.PORT || 5000;

// create express app
const app = express();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

// routes
import userRoutes from "./routes/userRoutes.js";
import badgeRoutes from "./routes/badgeRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import interstRoutes from "./routes/interestRoutes.js"
import likeRoutes from "./routes/likeRoutes.js"
import exploreRoutes from "./routes/exploreRoutes.js"
import adsRoutes from "./routes/adsRoutes.js"
import feedRoutes from "./routes/feedRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"


// start DB connection
connectDB();


// middlewares to parse raw JSON from request body (req.body) and
// urlencoded data (req.query) from URL query string (?key=value&key2=value2)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to parse cookies from request header
app.use(cookieParser());

// Use the cors middleware
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: allowedOrigins,
    credentials: true // Allow credentials in the request
}));




const express = require("express");
const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  console.log("Received POST request to /create-payment-intent");
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.error("Error in /create-payment-intent:", e);
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});





// user routes
app.use('/server/users', userRoutes);

// badge routes
app.use("/server/badges", badgeRoutes);

// post routes
app.use("/server/posts", postRoutes);

// interest routes
app.use("/server/interests", interstRoutes);

// like routes
app.use("/server/likes", likeRoutes);

//Search routes
app.use("/server/explore", exploreRoutes);

//Ads routes
app.use("/server/ads", adsRoutes);

//Payment routes
// app.use("/server/payment", paymentRoutes);

//feed routes
app.use("/server/feed", feedRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

// error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
