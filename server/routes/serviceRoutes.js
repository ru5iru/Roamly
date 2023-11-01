import express from "express";
const router = express.Router();
import {
    getHotelDetails,
    getShopDetails,
    getTaxiDetails,
    getGuideDetails,
} from "./../controllers/serviceController.js";


router.get("/hotels/", getHotelDetails);
router.get("/shops/", getShopDetails);
router.get("/taxis/", getTaxiDetails);
router.get("/guides/", getGuideDetails);

export default router;