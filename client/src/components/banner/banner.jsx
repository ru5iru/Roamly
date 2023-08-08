import "./banner.scss";
import Picture1 from "../../assets/images/camping-banner.jpg";

const Banner = () => {
    return (
        <div className="main">
            <div className="banner">
                <h3>Belihuloya Camping</h3>
                <img src={Picture1} alt="banner" />
                <p>
                    <i class="fa fa-heart-o"></i>
                </p>
            </div>
        </div>
    );
};

export default Banner;