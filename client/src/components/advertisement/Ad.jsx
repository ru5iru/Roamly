import "./Ad.scss"
import Adv from "../../assets/ad1.png"
import Phone from "../../assets/Phone.png";
// import Ad from "../advertisement/Ad";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";




const Ad = () => {
    const [ads, setAds] = useState([]);

    // const getAds = async () => {
    //     console.log("getAds");
    //     try {
    //         const res = await fetch("http://localhost:5000/server/ads/getAds");
    //         const jsonData = await res.json();
    //         setAds(jsonData);
    //         console.log(jsonData);

    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // };

    const getAds = async () => {
        // console.log("getAds");
        try {
            const response = await axios.get("http://localhost:8000/server/ads/feed");
            const jsonData = response.data;
            setAds(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        getAds();
    }, []);

    return (
        <Fragment>
            {
                ads.map(ad => (
                    <div className="ad">

                        <img src={require('../../assets/' + Adv.ad_img)} alt="" />

                        <div className="adDetails">
                            <div className="Upper">
                                <p>{ad.service_name}
                                    <br />
                                    <span>{ad.location}</span>
                                </p>
                            </div>
                            <div className="Lower">
                                <img src={Phone} alt="" />
                                <p>0{ad.contact_no}</p>

                            </div>
                        </div>
                    </div>))}
        </Fragment>

    );

}

export default Ad;