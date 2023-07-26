// rsf - React stateless function

import "./hotel.scss";
import treeHouse from "../../assets/images/treehouse.jpeg";
import booking from "../../assets/images/booking.png";
import agoda from "../../assets/images/agoda.png";
import kayak from "../../assets/images/kayak.png";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Hotel = () => {
  return (
    <div className="hotel">
      {/* <h1>Hotels near Belihuloya</h1> */}
      <div className="card">
        <div className="left">
          <img src={treeHouse} alt="Tree" />
        </div>
        <div className="right">
          <ul>
            <li>
              <h3>TreeHouse Chalets</h3>
            </li>
            <li>
              <p>Pragathi Pre School Road, Halpe, Belihuloya</p>
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

            <span className="bookingSites">
              <li>
                <BookmarkIcon />
                <span>
                  <a href="https://www.agoda.com/">
                    <img src={agoda} alt="agoda" />
                  </a>
                  <a href="https://www.booking.com/">
                    <img src={booking} alt="booking.com" />
                  </a>
                  <a href="https://www.kayak.com/">
                    <img src={kayak} alt="kayak" />
                  </a>
                </span>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
