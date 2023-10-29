import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import multer from "multer";

import { connectDB } from "./config/db.js";
const port = process.env.PORT || 5000;

// routes
import userRoutes from "./routes/userRoutes.js";
import badgeRoutes from "./routes/badgeRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import interstRoutes from "./routes/interestRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import adsRoutes from "./routes/adsRoutes.js";
import feedRoutes from "./routes/feedRoutes.js";
import relationshipRoutes from "./routes/relationshipRoutes.js";
import ratingsRoutes from "./routes/ratingRoutes.js";


// start DB connection
connectDB();

// create express app
const app = express();

// middlewares to parse raw JSON from request body (req.body) and
// urlencoded data (req.query) from URL query string (?key=value&key2=value2)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to parse cookies from request header
app.use(cookieParser());

// Use the cors middleware
const allowedOrigins = ["http://localhost:3000"];
app.use(
   cors({
      origin: allowedOrigins,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // Allow credentials in the request
   })
);

//image upload
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
   },
});

const upload = multer({ storage: storage });

app.post("/server/upload", upload.single("file"), (req, res) => {
   const file = req.file;
   res.status(200).json(file.filename);
});

// user routes
app.use("/server/users", userRoutes);

// badge routes
app.use("/server/badges", badgeRoutes);

// post routes
app.use("/server/posts", postRoutes);

// interest routes
app.use("/server/interests", interstRoutes);

// like routes
app.use("/server/likes", likeRoutes);

// relationship routes
app.use("/server/relationships", relationshipRoutes);

//Search routes
app.use("/server/explore", exploreRoutes);

//Ads routes
app.use("/server/ads", adsRoutes);

//feed routes
app.use("/server/feed", feedRoutes);

//rating routes
app.use("/server/ratings", ratingsRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

// error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});
