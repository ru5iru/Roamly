import "./rightBar.scss";
import Ad1 from "../../assets/ad1.png";
import Ad2 from "../../assets/ad2.png";
import Ad3 from "../../assets/ad3.png";
import Phone from "../../assets/Phone.png";
import Ad from "../advertisement/Ad";
import LimitedAdvertisements from "../advertisement/limitedadv";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="title">
                <p>Trusted Partners</p>
            </div>
            <div className="ads">
                <LimitedAdvertisements />
            </div>
        </div>
    );
};

export default RightBar;
