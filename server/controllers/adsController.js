// import pool from "../connect.js";
import { getAllAds, saveAd, deleteAd, getAllAdsFeed, getAd, updateAd } from "../models/adsModel.js"
import asyncHandler from "express-async-handler";
import multer from 'multer';
import path from 'path';

const getAds = asyncHandler(async (req, res) => {
    const ads = await getAllAds();

    if (ads.length > 0) {
        res.status(200).json(ads);
    } else {
        res.status(404);
        throw new Error("Ads not found");
    }
});

const getAdById = asyncHandler(async (req, res) => {
    const adId = req.params.id;
  
    const ad = await getAd(adId);
  
    if (ad.rows.length > 0) {
      res.status(200).json(ad.rows[0]);
    } else {
      res.status(404).json({ message: "Advertisement not found" });
    }
  });
  
// Multer storage configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const addAd = asyncHandler(async (req, res) => {
  const { title, description, details } = req.body;

  // Handle the file upload using multer middleware
  upload.single('file')(req, res, async (err) => {
      if (err) {
          return res.status(400).json({ message: 'Error uploading the file' });
      }

      // Check if an image was uploaded
      if (!req.file) {
          res.status(400).json({ message: 'No image uploaded' });
          return;
      }

      // Save the image file information and advertisement data to the database
      const ad = await saveAd(title, description, details, req.file);

      if (ad.rows.length > 0) {
          res.status(201).json(ad.rows[0]);
      } else {
          res.status(400).json({ message: 'Invalid user data' });
      }
  });
});


// const addAd = asyncHandler(async (req, res) => {
//     const { title, description, details, ad_image } = req.body;

//     const ad = await saveAd(title, description, details, ad_image);

//     if (ad.rows.length > 0) {
//         res.status(201).json(rows[0]);
//     } else {
//         res.status(400);
//         throw new Error("Invalid user data");
//     }
// });

// const addAd = asyncHandler(async (req, res) => {
//   const { title, description, details } = req.body;
//   const ad_image = req.file; // The uploaded image file

//   const ad = await saveAd(title, description, details, ad_image);

//   if (ad.rows.length > 0) {
//     res.status(201).json(ad.rows[0]);
//   } else {
//     res.status(400);
//     throw new Error("Invalid advertisement data");
//   }
// });


const removeAds = asyncHandler(async (req, res) => {
    const { ad_id } = req.query;

    const like = await deleteAd(ad_id);

    if (like) {
        res.status(201).json({
            status: "succes",
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const updateAdvertisement = async (req, res) => {
    const { adId } = req.params;
    const { title, description, details } = req.body;
  
    try {
      const updatedAd = await updateAd(adId, title, description, details);
      res.status(200).json(updatedAd);
    } catch (error) {
      console.error('Error updating advertisement:', error);
      res.status(500).json({ message: 'Internal server error' });
    }};

const getAdsFeed = asyncHandler(async (req, res) => {
    const ads = await getAllAdsFeed();

    if (ads.length > 0) {
        res.status(200).json(ads);
    } else {
        res.status(404);
        throw new Error("Ads not found");
    }
});

export { getAds, addAd, removeAds, getAdsFeed, getAdById, updateAdvertisement };