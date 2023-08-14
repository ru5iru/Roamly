import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get all ads
// const getSearchResults = asyncHandler(async (query) => {
//     // const { query } = req.params;
//     const sql = 'SELECT * FROM post WHERE content LIKE $1';
//     const result = await query(sql, [query]);

//     return result.rows;
// });

const searchPosts = asyncHandler(async (phrase) => {
    const searchString = "%" + phrase + "%";
    const sql = 'SELECT post.*,users.firstname,users.lastname,users.profile_pic FROM post INNER JOIN users ON post.user_id = users.user_id WHERE content LIKE $1 ORDER BY post.created_at DESC';

    const result = await query(sql, [searchString]);

    return result.rows;
});

const searchUsers = asyncHandler(async (phrase) => {
    const searchString = "%" + phrase + "%";
    const sql = 'SELECT users.user_id,users.firstname,users.lastname,users.profile_pic, users.created_at FROM "users" WHERE firstname LIKE $1 OR lastname LIKE $1';

    const result = await query(sql, [searchString]);
    return result.rows;
});

const searchPhotos = asyncHandler(async (phrase) => {
    const searchString = "%" + phrase + "%";
    const sql = 'SELECT post.*,users.firstname,users.lastname,users.profile_pic FROM post INNER JOIN users ON post.user_id = users.user_id WHERE content LIKE $1 AND image IS NOT NULL ORDER BY post.created_at DESC';

    const result = await query(sql, [searchString]);
    return result.rows;
});



export { searchPosts, searchUsers, searchPhotos };  