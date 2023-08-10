import "./Ad.scss"
import { useState, useEffect, Fragment } from "react";


const Ad = () => {
    const [ads, setAds] = useState([]);

    const getAds = async () => {
        console.log("getAds");
        try {
            const res = await fetch("http://localhost:5000/ads");
            const jsonData = await res.json();
            setAds(jsonData);
            console.log(jsonData);

        } catch (err) {
            console.error(err.message);
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
                    </div>))}
        </Fragment>

    );

}

export default Ad;