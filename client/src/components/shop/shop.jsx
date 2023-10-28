// rsf - React stateless function

import "./shop.scss";
import dimuthuStore from "../../assets/images/Dimuthu.png";

import { FaCartShopping } from "react-icons/fa6";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [shopDetails, setShopDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/server/services/shops?location=Sri")
      .then((response) => {
        setShopDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(shopDetails);

  return (
    <div>
      {shopDetails.map((shop, index) => (
        <div className="hotel">
          {/* <h1>Hotels near Belihuloya</h1> */}
          <div className="cardd">
            <div className="left">
              <img src={dimuthuStore} alt="Tree" />
            </div>
            <div className="right">
              <ul>
                <li>
                  <h3>{shop.service_name}</h3>
                </li>
                {/* <li>
                  <p>
                   {shop.location}
                  </p>
                </li> */}
                <li>
                  <LocationOnIcon />
                  <span>{shop.location}</span>
                </li>
                <li>
                  <PhoneInTalkIcon />
                  <span>{shop.contact_no}</span>
                </li>
                <li>
                  <FaCartShopping />
                  <span>{shop.type}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
