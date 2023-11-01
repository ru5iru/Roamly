import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from 'cors';
import multer from "multer";
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
import historyRoutes from "./routes/historyRoutes.js"


// start DB connection
connectDB();

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
// const storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//       cb(null, "../client/public/upload");
//    },
//    filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname);
//    },
// });

// const upload = multer({ storage: storage });

// app.post("/server/upload", upload.single("file"), (req, res) => {
//    const file = req.file;
//    res.status(200).json(file.filename);
// });



//upload ads;

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'roamly',
  host: 'localhost',
  database: 'roamly5',
  password: 'roamly',
  port: 5432, // Default PostgreSQL port
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'upload/'); // Set the destination folder for file uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original filename
//   },
// });

// const upload = multer({ storage });

// app.post('/upload', upload.single('image'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   const client = await pool.connect();

//   try {
//     // Read the uploaded image as binary data
//     const imageBuffer = req.file.buffer;

//     // Insert the image into the database
//     await client.query('INSERT INTO image (image) VALUES ($1)', [imageBuffer]);
//    //  console.log('Buffer length:', req.file.buffer.length);

//     res.status(200).send('File uploaded and inserted into the database!');
//   } catch (error) {
//     console.error('Error inserting image:', error);
//     res.status(500).send('Error inserting image into the database.');
//   } finally {
//     client.release();
//   }
// });
// import path from 'path';
// const storage = multer.diskStorage({
//    destination: (req, file, callback) => {
//        callback(null, '../client/public/upload');
//    },
//    filename: (req, file, callback) => {
//        callback(null, Date.now() + path.extname(file.originalname));
//    }
// });

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


const updateDatabaseStatus = async (notificationId) => {
   try {
     const query = 'UPDATE advertisement SET status = $1 WHERE id = $2';
     const values = ['paid', notificationId];
 
     const result = await pool.query(query, values);
     console.log('Database status updated successfully');
   } catch (error) {
     console.error('Error updating database status:', error);
   }
 };
 
 // Define an endpoint to handle the button click event
 app.post('/updateDatabaseStatus', (req, res) => {
   const notificationId = req.body.notificationId; // You'll need to extract this from the request
   updateDatabaseStatus(notificationId);
   res.send('Database status updated');
 });


// app.post('/upload', upload.single('ad_media'), async (req, res) => {
//    try {
//        const { title } = req.body;
//        const { description } = req.body;
//        const { details } = req.body;
//        const imagePath = req.file;
//        const ad_id = Math.floor(Math.random() * 1000000000);

//        const insertQuery = 'INSERT INTO advertisement (ad_id, title, description, details, ad_media) VALUES ($1, $2, $3, $4, $5) RETURNING *';
//        const values = [ad_id, title, description, details, imagePath];

//        const { rows } = await pool.query(insertQuery, values);

//        res.json({ message: 'File uploaded successfully', ad_id: rows[0].ad_id });
//    } catch (error) {
//        console.error('Error uploading file:', error);
//        res.status(500).json({ error: 'Error uploading file' });
//    }
// });


//image view
// app.get('/api/getImage', (req, res) => {
//    // const imageId = req.query.imageId; // Assuming you have a unique identifier for the image
//    pool.query('SELECT image FROM image', (err, result) => {
//      if (err) {
//        console.error(err);
//        res.status(500).send('Error retrieving image path');
//      } else {
//        const imagePath = result.rows[0].image;
//        res.json({ imagePath });
//      }
//    });
//  });
 
//  app.use(express.static('/upload')); // Assuming images are stored in a directory named 'images'
 
app.get('/api/images', async (req, res) => {
   try {
     const client = await pool.connect();
     const result = await client.query('SELECT image FROM image');
     client.release();
     res.json(result.rows);
   } catch (err) {
     console.error(err);
     res.status(500).send('Error fetching data from the database');
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

// History routes
app.use("/server/history", historyRoutes);

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
