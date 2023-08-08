import { useContext } from "react";
import Profilepic from "../../assets/profile_pic.png";
import Send from "../../assets/sent.png";
import Line from "../../assets/Line1.png";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    //Temporary
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "John Doe",
            userId: 1,
            profilePicture:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profilePicture:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];
    return (
        <div className="comments">
            <div className="write">
                <img src={Profilepic} alt="" />
                <input type="text" placeholder="write a comment" />
                <img src={Send} className="send" alt="" />

                {/* <button>Send</button> */}

            </div>
            <img src={Line} className="line" alt="" />
            {comments.map((comment) => (
                <div className="comment">
                    <div className="profile">
                        <img src={comment.profilePicture} className="dp" alt="" />
                    </div>
                    <div className="info">
                        <div className="comm">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <div className="date">
                            <p>1 hour ago</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
