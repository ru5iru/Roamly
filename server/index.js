import express from 'express';
import cors from 'cors';

import exploreRoutes from './routers/explore.js';
import adsRoutes from './routers/ads.js';

const app = express();

import pool from './connect.js';

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); //Access client

// Your API routes and other middleware should be defined after this

// Routers

// create post

// app.post("/share", async (req, res) => {
//     console.log(req.body);
//     try {
//         const { post_id, user_id, postText } = req.body;
//         const newShare = await pool.query(
//             "INSERT INTO post (post_id, user_id, content) VALUES($1, $2, $3) RETURNING *", [post_id, user_id, postText]
//         );
//         res.json(newShare.rows[0]);

//     }
//     catch (err) {
//         console.error(err.message);
//         // togglePostFailVisibility();
//     }
// });

app.post("/share", async (req, res) => {
    console.log(req.body);
    try {
        const { post_id, user_id, postText } = req.body;
        const newShare = await pool.query(
            "INSERT INTO post (user_id, content) VALUES( $1, $2) RETURNING *",
            [user_id, postText]
        );
        res.json(newShare.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "An error occurred on the server." });
    }
});


// Get all posts

app.get("/posts", async (req, res) => {
    try {
        const allPostsQuery = `
    SELECT post.*, "user".name FROM post
    INNER JOIN "user" ON post.user_id = "user".user_id 
    ORDER BY post.posted_on DESC;
`;
        // console.log(allPostsQuery);
        //get like status
        // const likeStatus = await pool.query("SELECT COUNT(*) FROM \"like\" WHERE user_id = 1");
        // console.log(likeStatus.rows);
        //  add likestatus to user_id to end of allPostsQuery



        // const allPosts = await pool.query("SELECT * FROM post INNER JOIN user ON post.user_id = user.user_id ORDER BY posted_on DESC");
        const allPosts = await pool.query(allPostsQuery);
        // console.log(allPosts.rows);
        // get post_id from allPosts.rows
        // for loop to get like status for each post
        for (let i = 0; i < allPosts.rows.length; i++) {
            const post_id = allPosts.rows[i].post_id;
            const likeStatus = await pool.query("SELECT COUNT(*) FROM \"like\" WHERE user_id = 1 AND post_id = $1", [post_id]);
            if (likeStatus.rows[0].count == 0) {
                allPosts.rows[i].likeStatus = false;
            }
            else {
                allPosts.rows[i].likeStatus = true;
            }

            // console.log(likeStatus.rows);
            // allPosts.rows[i].likeStatus = likeStatus.rows[0].count;
        }

        console.log(allPosts.rows);

        res.json(allPosts.rows);
    }
    catch (err) {
        console.error(err.message)
    }
});

// Get a post
app.get("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const post = await pool.query("SELECT * FROM post WHERE post_id = $1", [id]);
        res.json(post.rows[0]);
    }
    catch (err) {
        console.error(err.message)
    }
});

// Update a post
app.put("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const updatePost = await pool.query("UPDATE post SET content = $1 WHERE post_id = $2", [content, id]);
        res.json("Post was updated");
    }
    catch (err) {
        console.error(err.message)
    }
});

// Delete a post
app.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletePost = await pool.query("DELETE FROM post WHERE post_id = $1", [id]);
        res.json("Post was deleted");
    }
    catch (err) {
        console.error(err.message);
    }
});

// Like a post
app.post("/like", async (req, res) => {
    try {
        const { post_id, user_id } = req.body; // Destructure post_id and user_id from req.body
        const likePost = await pool.query(
            "INSERT INTO \"like\"(post_id, user_id) VALUES ($1, $2) RETURNING *",

            [post_id, user_id]
        );
        res.json(likePost.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "An error occurred while liking the post." }); // Return an error response
    }
});

// Unlike a post
app.delete("/unlike", async (req, res) => {
    try {
        const { post_id, user_id } = req.body; // Destructure post_id and user_id from req.body
        const unlikePost = await pool.query(
            "DELETE FROM \"like\" WHERE post_id = $1 AND user_id = $2",
            [post_id, user_id]
        );
        res.json("Post was unliked");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "An error occurred while unliking the post." }); // Return an error response
    }
});

// Get all comments of post
app.get("/comments/:id", async (req, res) => {
    try {
        const { id } = req.params;
        res.json(allComments.rows);
    }
    catch (err) {
        console.error(err.message)
    }
});

// Add a comment
app.post("/comment", async (req, res) => {
    try {
        const { post_id, user_id, commentText } = req.body;
        const newComment = await pool.query(
            "INSERT INTO comment (post_id, user_id, content) VALUES( $1, $2, $3) RETURNING *",
            [post_id, user_id, commentText]
        );
        res.json(newComment.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "An error occurred on the server." });
    }
});

// Search Text

app.use("/server/explore", exploreRoutes);
app.use("/server/ads", adsRoutes);



// app.use("/server/posts", postRoutes);



// app.use("/server/users", userRoutes);
// app.use("/server/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
