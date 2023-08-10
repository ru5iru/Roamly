import "./rightBar.scss";
import Ad1 from "../../assets/ad1.png";
import Ad2 from "../../assets/ad2.png";
import Ad3 from "../../assets/ad3.png";
import Phone from "../../assets/Phone.png";
import Ad from "../advertisement/Ad";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="title">
                <p>Trusted Partners</p>
            </div>
            <div className="ads">
                <Ad />
                {/* <div className="ad">
                    <img src={Ad1} alt="" />
                    <div className="adDetails">
                        <div className="Upper">
                            <p>TeaHouse Chalets
                                <br />
                                <span>Belihuloya</span>
                            </p>
                        </div>
                        <div className="Lower">
                            <img src={Phone} alt="" />
                            <p>043 229 8222</p>

                        </div>
                    </div>
                </div> */}

                <div className="ad">
                    <img src={Ad2} alt="" />
                    <div className="adDetails">
                        <div className="Upper">
                            <p>TeaHouse Chalets
                                <br />
                                <span>Belihuloya</span>
                            </p>
                        </div>
                        <div className="Lower">
                            <img src={Phone} alt="" />
                            <p>043 229 8222</p>
                        </div>
                    </div>
                </div>

                <div className="ad">
                    <img src={Ad3} alt="" />
                    <div className="adDetails">
                        <div className="Upper">
                            <p>TeaHouse Chalets
                                <br />
                                <span>Belihuloya</span>
                            </p>
                        </div>
                        <div className="Lower">
                            <img src={Phone} alt="" />
                            <p>043 229 8222</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RightBar;
