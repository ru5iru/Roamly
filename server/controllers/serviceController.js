import asyncHandler from "express-async-handler";
import {
    findHotelByLocation,
    findShopByLocation,
    findTaxiByLocation,
    findGuideByLocation,
} from "./../models/serviceModel.js";

const getHotelDetails = asyncHandler(async (req, res) => {
    const hotel = await findHotelByLocation(req.query.location);
    
    res.status(201).json(hotel);
});

const getShopDetails = asyncHandler(async (req, res) => {
    const shop = await findShopByLocation(req.query.location);
    
    res.status(201).json(shop);
});

const getTaxiDetails = asyncHandler(async (req, res) => {
    const taxi = await findTaxiByLocation(req.query.location);
    
    res.status(201).json(taxi);
});

const getGuideDetails = asyncHandler(async (req, res) => {
    const guide = await findGuideByLocation(req.query.location);
    
    res.status(201).json(guide);
});

export { 
    getHotelDetails,
    getShopDetails,
    getTaxiDetails,
    getGuideDetails
 };