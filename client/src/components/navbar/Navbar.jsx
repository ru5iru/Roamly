import "./navbar.scss";
import Chat from "../../assets/Chat.png";
import Notification from "../../assets/Notification.png";
import Search from "../../assets/search.png";
import Profile_pic from "../../assets/profile_pic.png";
import logo from "../../assets/Roamly.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <img src={logo} alt="" className="logo" />
                <img src={Search} alt="" />
            </div>
            <div className="right">
                <img src={Chat} alt="" />
                <img src={Notification} alt="" />
                <img src={Profile_pic} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
