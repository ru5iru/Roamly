// rsf - React stateless function

import "./shop.scss";
import dimuthuStore from "../../assets/images/Dimuthu.png";

import { FaCrown } from "react-icons/fa";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";

const Shop = () => {
  return (
    <div className="hotel">
      {/* <h1>Hotels near Belihuloya</h1> */}
      <div className="cardd">
        <div className="left">
          <img src={dimuthuStore} alt="Tree" />
        </div>
        <div className="right">
          <ul>
            <li className="title">
                <h3>Dimuthu Grocery</h3>
                <FaCrown className="faCrown" />
            </li>
            <li>
              <p>
                PQ9C+RQW, Colombo - Ratnapura - Wellawaya - Batticaloa Rd,
                Belihuloya
              </p>
            </li>
            <li>
              <LocationOnIcon />
              <span>Location</span>
            </li>
            <li>
              <PhoneInTalkIcon />
              <span>0717073529</span>
            </li>
            <li>
              <HotelIcon />
              <span>Hotel</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
