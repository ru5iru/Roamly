import "./Explore.scss";
import Plus from "../../assets/Plus.png";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const navigate = useNavigate();

    const handleNameClick = () => {
        // console.log("Clicked");
        navigate("/profile/" + user.user_id);

    };

    return (
        <div className="user-profile">
            <div className="user-profile-img">
                <img src={user.profile_pic} alt={user.username} />
            </div>
            <div className="user-profile-details">
                <div className="user-profile-name">
                    <span onClick={handleNameClick}>{user.firstname} {user.lastname}</span>
                </div>
                <div className="user-joined-date">Joined {formatDate(user.created_at)}</div>
            </div>
            <div className="user-profile-follow">
                <button className="follow-button">
                    <img src={Plus} alt="" />Follow</button>
            </div>
        </div>
    )

};

export default UserProfile;