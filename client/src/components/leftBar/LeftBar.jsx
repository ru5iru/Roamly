import "./leftBar.scss";
import Home from "../../assets/Home.png";
import Plan from "../../assets/plan.png";
import Messages from "../../assets/messages.png";
import Search from "../../assets/Search_black.png";
import Profile from "../../assets/profile_pic.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

    // const { currentUser } = useContext(AuthContext);

    return (
        <div className="leftBar">

            <div className="leftbar">
                <div className="menu">
                    <div className="menu_item">
                        <img src={Home} alt="" />
                        <p>Home</p>
                    </div>
                    <div className="menu_item">
                        <img src={Profile} alt="" />
                        <p>Selena Kyle</p>
                    </div>
                    <div className="menu_item">
                        <img src={Search} alt="" />
                        <p>Explore</p>
                    </div>
                    <div className="menu_item">
                        <img src={Plan} alt="" />
                        <p>Plan Your Trip</p>
                    </div>
                    <div className="menu_item">
                        <img src={Messages} alt="" />
                        <p>Messages</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftBar;
