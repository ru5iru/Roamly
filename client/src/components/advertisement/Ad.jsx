import "./Ad.scss"
import Phone from "../../assets/Phone.png";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";




const Ad = () => {
    const [ads, setAds] = useState([]);

    const getAds = async () => {
        try {
            const response = await axios.get("http://localhost:8000/server/ads/feed");
            const jsonData = response.data;
            setAds(jsonData);
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
                    <div className="ad" key={ad.service_name}>

                        <img src={require('../../assets/' + ad.ad_img)} alt="" />

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