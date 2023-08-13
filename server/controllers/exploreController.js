import asyncHandler from 'express-async-handler';
import { searchPosts } from '../models/exploreModel.js';
// export const searchText = async (req, res) => {
//     try {
//         const { query } = req.params;
//         const allPosts = await pool.query("SELECT * FROM post WHERE content LIKE $1", ['%' + query + '%']);
//         res.json(allPosts.rows);
//     }
//     catch (err) {
//         console.error(err.message)
//     }
// };

// const getSerch = asyncHandler(async (req, res) => {
//     const searchResult = await getSearchResults(req.params.query);
//     console.log("req.params.query");
//     console.log("searchResult");
//     if (searchResult) {
//         res.status(201).json(searchResult);
//         // console.log("searchResult");
//     }
//     else {
//         res.status(404);
//         throw new Error("No results found");
//     }

// });

const searchAllPosts = asyncHandler(async (req, res) => {
    const posts = await searchPosts(req.query.phrase);

    if (posts.length > 0) {
        res.status(200).json(posts);
    } else {
        res.status(404);
        throw new Error("Posts not found");
    }
});

export { searchAllPosts };