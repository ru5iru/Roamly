import "./post.scss";
import Seemore from "../../assets/seemore.png";
import Profile from "../../assets/profile_pic.png";
import Like from "../../assets/like.png";
import Liked from "../../assets/filled_heart.png";
import Comment from "../../assets/comment.png";
import Share from "../../assets/share.png";
import Img from "../../assets/ad1.png";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState, useEffect, Fragment } from "react";


const Post = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const res = await fetch("http://localhost:5000/posts");
            const jsonData = await res.json();
            setPosts(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    // const [liked, setLiked] = useState(false);
    // // post like to database here
    // const likePost = async (post_id) => {
    //     const body = { post_id, user_id: 1 };
    //     // post like to database here
    //     if (!liked) {
    //         setLiked(!liked);

    //         try {

    //             const res = await fetch("http://localhost:5000/like", {
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify(body)
    //             });
    //             console.log("Liked");
    //         } catch (err) {
    //             console.error(err.message);
    //         }
    //     } else {
    //         setLiked(!liked);
    //         try {
    //             const res = await fetch("http://localhost:5000/unlike", {
    //                 method: "DELETE",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify(body)
    //             });
    //             console.log("Unliked");
    //         } catch (err) {
    //             console.error(err.message);
    //         }
    //     };
    // }
    const likePost = async (post_id, likedStatus) => {
        const body = { post_id, user_id: 1 };
        console.log(likedStatus);

        if (!likedStatus) {
            try {
                const res = await fetch("http://localhost:5000/like", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                console.log("Liked");
                { getPosts() };
            } catch (err) {
                console.error(err.message);
            }
        } else {
            try {
                const res = await fetch("http://localhost:5000/unlike", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                console.log("Unliked");
                { getPosts() };
            } catch (err) {
                console.error(err.message);
            }
        }
    };

    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const toggleCommentVisibility = async (post_id) => {
        const body = post_id;
        try {
            const res = await fetch("http://localhost:5000/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log("Comments");
        }
        catch (err) {
            console.error(err.message);
        }
        // fetch comments from database here

        setIsCommentVisible(!isCommentVisible);
    }

    return (
        <Fragment>
            {
                posts.map(post => (

                    <div className="post">
                        <div className="user">
                            <div className="user_profile">
                                <img src={Profile} alt="" className="profile_pic" />
                            </div>
                            <div className="user_info">
                                <p>
                                    {/* {post.user_id} */}
                                    {post.name}
                                </p>
                                <p className="date_time">
                                    {(new Date(post.posted_on)).toISOString().split('T')[0]} at {(new Date(post.posted_on)).toLocaleTimeString('en-US', timeOptions)}
                                </p>
                            </div>
                            <div className="user_options">
                                <img src={Seemore} alt="" className="seemore" />
                            </div>
                        </div>

                        <div className="content">
                            <div className="content_text">
                                <p>{post.content}</p>
                            </div>
                            {/* <img src={post.image} alt="" /> */}
                            <div className="content_image">
                                <img src={Img} alt="" />
                            </div>
                        </div>
                        <div className="social">
                            <div className="social_wrapper">
                                {/* if post.likeSatus = '1' display  src={Like} otherwise display src={Liked} */}
                                <div className="likes">
                                    <img
                                        src={post.likeStatus ? Liked : Like}
                                        alt=""
                                        onClick={() => likePost(post.post_id, post.likeStatus)}
                                    />
                                    <p>Like</p>
                                </div>
                                <div className="comments_icon">
                                    <img src={Comment} alt="" onClick={() => toggleCommentVisibility(post.post_id)} />
                                    <p>Comment</p>
                                </div>
                                <div className="shares">
                                    <img src={Share} alt="" />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>

                        <div className="comments_content">
                            {isCommentVisible && <Comments />}
                        </div>
                    </div>
                ))
            }
        </Fragment>);

    // );
};

// const Post = ({ post }) => {
//     // const [commentOpen, setCommentOpen] = useState(false);
//     const [liked, setLiked] = useState(false);
//     const [likes, setLikes] = useState(post.likes.length);
//     const [comments, setComments] = useState(post.comments.length);
//     const [commentOpen, setCommentOpen] = useState(false);

//     const likePost = () => {
//         setLiked(!liked);
//         setLikes(liked ? likes - 1 : likes + 1);
//     };

//     const commentPost = () => {
//         setCommentOpen(!commentOpen);
//     };

//     useEffect(() => {
//         setLikes(post.likes.length);
//         setComments(post.comments.length);
//     }, [post]);

//     return (
//         <div className="post">
//             <div className="user">
//                 <img src={Profile} alt="" className="profile_pic" />
//                 <p>{post.user.username}</p>
//             </div>
//             <div className="content">
//                 <p>{post.description}</p>
//                 <img src={post.image} alt="" />
//             </div>
//             <div className="social">
//                 <div className="left">
//                     <div className="like">

//                         <FavoriteOutlinedIcon
//                             className="icon"
//                             onClick={likePost}
//                             style={{ color: liked ? "red" : "black" }}
//                         />
//                         <p>{likes}</p>
//                     </div>
//                     <div className="comment">
//                         <TextsmsOutlinedIcon className="icon" onClick={commentPost} />
//                         <p>{comments}</p>
//                     </div>
//                     <div className="share">
//                         <ShareOutlinedIcon className="icon" />
//                         <p>Share</p>
//                     </div>
//                 </div>
//                 <div className="right">
//                     <MoreHorizIcon className="icon" />
//                 </div>
//             </div>
//             {commentOpen && <Comments post={post} />}
//         </div>
//     );

//     // const [liked, setLiked] = useState(false);
//     // const [likes, setLikes] = useState(post.likes.length);
//     // const [comments, setComments] = useState(post.comments.length);
//     // const [commentOpen, setCommentOpen] = useState(false);




//     //TEMPORARY
//     // const liked = false;

//     // return (
//     //     <div className="post">
//     //         <div className="user">
//     //             <img src={Profile} alt="" className="profile_pic" />
//     //             <p></p>
//     //         </div>
//     //         <div className="content"></div>
//     //         <div className="social"></div>
//     //     </div>

//     // );
// };

export default Post;
