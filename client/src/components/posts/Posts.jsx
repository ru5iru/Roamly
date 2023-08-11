import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userID }) => {
   const userId = userID;

   const {
      isLoading: postIsloading,
      error: postError,
      data: postData,
   } = useQuery(["posts"], () =>
      makeRequest.get(`/posts?userId=${userId}`).then((res) => {
         return res.data;
      })
   );

   return (
      <div className="posts">
         {postError
            ? "Something went wrong!"
            : postIsloading
            ? "loading"
            : postData.map((post) => <Post userID={userId} post={post} key={post.post_id} />)}
      </div>
   );
};

export default Posts;
