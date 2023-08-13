import asyncHandler from "express-async-handler";
import {
   getUserPosts,
   getAllPosts,
   getPost,
   savePost,
   deletePost,
   searchPosts
} from "../models/postModel.js";

// desc
// route
// access

const postByID = asyncHandler(async (req, res) => {
   const post = await getPost(req.params.id);

   if (post) {
      res.status(201).json({
         post_id: post.post_id,
         user_id: post.user_id,
         image: post.image,
         content: post.content,
         created_at: post.created_at,
      });
   } else {
      res.status(404);
      throw new Error("Post not found");
   }
});

// desc
// route
// access

const allPosts = asyncHandler(async (req, res) => {
   const posts = await getAllPosts();

   if (posts.length > 0) {
      res.status(200).json(posts);
   } else {
      res.status(404);
      throw new Error("Posts not found");
   }
});

// desc
// route
// access

const userPosts = asyncHandler(async (req, res) => {
   const posts = await getUserPosts(req.query.userId);

   if (posts.length > 0) {
      res.status(200).json(posts);
   } else {
      res.status(404);
      throw new Error("Posts not found");
   }
});

// desc
// route
// access

const searchAllPosts = asyncHandler(async (req, res) => {
   const posts = await searchPosts(req.query.phrase);

   if (posts.length > 0) {
      res.status(200).json(posts);
   } else {
      res.status(404);
      throw new Error("Posts not found");
   }
});

// desc    Add new post
// route   POST /api/posts/
// access  private
const addPost = asyncHandler(async (req, res) => {
   const { user_id, content } = req.body;

   const post = await savePost(user_id, content);

   if (post.rowCount > 0) {
      // do we have to generate token here?
      res.status(201).json({
         post_id: post.rows[0].post_id,
         user_id: post.rows[0].user_id,
      });
   } else {
      res.status(400);
      throw new Error("Error");
   }
});

// desc
// route
// access

const removePost = asyncHandler(async (req, res) => {
   const { post_id } = req.query;

   const like = await deletePost(post_id);

   if (like) {
      res.status(201).json({
         status: "succes",
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   }
});

export { postByID, allPosts, userPosts, addPost, removePost, searchAllPosts };
