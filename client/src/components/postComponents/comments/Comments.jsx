import { useContext, useState } from "react";
import "./comments.scss"
import {AuthContext} from "../../../context/authContext"

const Comments = ({time}) => {

  const {currentUser} = useContext(AuthContext)

  let comments = [
    {
      id: 1,
      desc: "Awesome 🤩",
      name: "Dinesh Chandimal",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      time: "5 hours ago"
    },
    {
      id: 2,
      desc: "Wooow..",
      name: "Nimesha Jayarathne",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      time: "6 hours ago"
    },
  ];

  if(time==='1 minute ago' || time==='2 minutes ago' || time==='few seconds ago'){
    comments = [];
  }

  const [newComment, setNewComment] = useState("");
  const [ postComments, setPostComments] = useState(comments)

  const handleAddComment = () => {
    if (newComment) {
      const newCommentObj = {
        id: postComments.length + 1,
        desc: newComment,
        name: currentUser.firstname + " "+ currentUser.lastname,
        userId: currentUser.id,
        profilePicture: currentUser.profile_pic,
        time: "Just Now"
      };
      setPostComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profile_pic} alt="" />
        <input type="text" placeholder="write a comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button onClick={handleAddComment}>Send</button>
      </div>
      {
        postComments.map(comment=>(
          <div className="comment" key={comment.id}>
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">{comment.time}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Comments