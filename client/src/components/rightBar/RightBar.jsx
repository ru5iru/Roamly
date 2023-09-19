import "./rightBar.scss";
import Ad from "../advertisement/Ad";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="title">
                <p>Trusted Partners</p>
            </div>
            <div className="ads">
                <Ad />
            </div>
        </div>
    );
};

export default RightBar;
