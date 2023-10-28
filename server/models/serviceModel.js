import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';

const findHotelByLocation = asyncHandler(async (location) => {
    const searchString = "%" + location + "%";
    const service = "Accommodation";
    const sql = 'SELECT * FROM users INNER JOIN service_provider ON users.user_id = service_provider.user_id WHERE service_provider.location LIKE $1 AND service_provider.service = $2';
    const result = await query(sql, [searchString,service]);

    return result.rows;
});

const findShopByLocation = asyncHandler(async (location) => {
    const searchString = "%" + location + "%";
    const service = "Shop";
    const sql = 'SELECT * FROM users INNER JOIN service_provider ON users.user_id = service_provider.user_id WHERE service_provider.location LIKE $1 AND service_provider.service = $2';
    const result = await query(sql, [searchString,service]);

    return result.rows;
});

const findTaxiByLocation = asyncHandler(async (location) => {
    const searchString = "%" + location + "%";
    const service = "Taxi service";
    const sql = 'SELECT * FROM users INNER JOIN service_provider ON users.user_id = service_provider.user_id WHERE service_provider.location LIKE $1 AND service_provider.service = $2';
    const result = await query(sql, [searchString,service]);

    return result.rows;
});

const findGuideByLocation = asyncHandler(async (location) => {
    const searchString = "%" + location + "%";
    const service = "Travel guide";
    const sql = 'SELECT * FROM users INNER JOIN service_provider ON users.user_id = service_provider.user_id WHERE service_provider.location LIKE $1 AND service_provider.service = $2';
    const result = await query(sql, [searchString,service]);

    return result.rows;
});

export {
    findHotelByLocation,
    findShopByLocation,
    findTaxiByLocation,
    findGuideByLocation,
};