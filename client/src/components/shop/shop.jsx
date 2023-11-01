// rsf - React stateless function

import "./shop.scss";
import dimuthuStore from "../../assets/images/Dimuthu.png";

import { FaCartShopping } from "react-icons/fa6";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const [shopDetails, setShopDetails] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationValue = queryParams.get("location")

  useEffect(() => {
    axios
      .get(`http://localhost:8000/server/services/shops?location=${locationValue}`)
      .then((response) => {
        setShopDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [locationValue]);

  const setImageUrl = (currUrl = '') => {
    if (currUrl !== null && currUrl.length > 50) {
       return currUrl;
    } else if (currUrl !== null) {
       try {
          return require("../../../public/upload/" + currUrl);
       } catch {
          
       }
    }
 }

  return (
    <div>
      {shopDetails.map((shop, index) => (
        <div className="hotel">
          <div className="cardd">
            <div className="left">
              <img src={setImageUrl(shop.profile_pic)} alt="Tree" />
            </div>
            <div className="right">
              <ul>
                <li>
                  <h3>{shop.service_name}</h3>
                </li>
                <li>
                  <LocationOnIcon />
                  <span className="location">{shop.location}</span>
                </li>
                <li>
                  <PhoneInTalkIcon />
                  <span className="phone">0{shop.contact_no}</span>
                </li>
                <li>
                  <FaCartShopping />
                  <span className="shop">{shop.type}</span>
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
