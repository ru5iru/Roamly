import "./ratingpost.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { formatCreatedAt } from "../../../utils/timeCalc";
import { makeRequest } from "../../../axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Rating from "../rating/Rating";
import axios from "axios";

const RatingPost = ({ serviceID, post, deleteMutation }) => {
    const { currentUser } = useContext(AuthContext);

    const [menuOpen, setMenuOpen] = useState(false);

    const [postProfileData, setPostProfileData] = useState([]);

    const setImageUrl = (currUrl = '') => {
        if (currUrl !== null && currUrl.length > 50) {
           return currUrl;
        } else if (currUrl !== null) {
           try {
              return require("../../../../public/upload/" + currUrl);
           } catch {
              
           }
        }
     }
    
    useEffect(() => {
        if (serviceID) {
            axios.get("/users/profile/" + post.user_id).then((response) => {
                setPostProfileData(response.data);
            });
        }
    }, [serviceID]);

    const queryClient = useQueryClient();

    const handleDelete = () => {
        deleteMutation.mutate(post.rating_id);
    };

    return (
        <div className="ratingpost">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={setImageUrl(postProfileData.profile_pic)} alt="" />
                        <div className="details">
                            <Link
                                to={`/profile/${post.user_id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <span className="name">
                                    {postProfileData.firstname}{" "}
                                    {postProfileData.lastname}
                                </span>
                            </Link>
                            <span className="date">
                                {formatCreatedAt(post.created_at)}
                            </span>
                        </div>
                    </div>
                    {/* <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
                    {menuOpen && (
                        <div className="postMenu">
                            {post.user_id === currentUser.user_id ? (
                                <div className="sameUser">
                                    <button className="delete" onClick={handleDelete}>
                                        <span>
                                            <img
                                                src="https://img.icons8.com/ios-glyphs/90/ffffff/trash--v1.png"
                                                alt="trash--v1"
                                            />
                                        </span>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="visitor">
                                    <button className="save">
                                        <span>
                                            <img
                                                src="https://img.icons8.com/ios-glyphs/90/ffffff/bookmark-ribbon.png"
                                                alt="bookmark-ribbon"
                                            />
                                        </span>
                                        <span>Save Post</span>
                                    </button>
                                    <button className="report">
                                        <span>
                                            <img
                                                src="https://img.icons8.com/ios-glyphs/90/ffffff/warning-shield.png"
                                                alt="warning-shield"
                                            />
                                        </span>
                                        <span>Report Post</span>
                                    </button>
                                </div>
                            )}

                            <img
                                className="closeImg"
                                onClick={() => setMenuOpen(!menuOpen)}
                                src="https://img.icons8.com/material-outlined/96/cancel--v1.png"
                                alt="cancel--v1"
                            />
                        </div>
                    )} */}
                </div>
                <div className="content">
                    <div className="rate">
                        <Rating rating={post.rating} display={false}/>
                    </div>
                    <p>{post.comment}</p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default RatingPost;
