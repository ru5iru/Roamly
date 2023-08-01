import "./accommodation.scss";
import Picture5 from "../../assets/images/hotel.jpg";
import Picture6 from "../../assets/images/taxi.jpg";
import Picture7 from "../../assets/images/travalguide.jpg";
import Picture8 from "../../assets/images/shop.jpg";

const Accommodation = () => {
  return (
    <div className="page">
        <div className="title">
            <h1>
                Find in Belihuloya...
            </h1>
        </div>
        <div className="accommodations">
            <div className="type">
                <img className="AccommodationImage" src={Picture5} alt="loading error" />
                <h3>Hotels</h3>
            </div>
            <div className="type">
                <img className="AccommodationImage" src={Picture6} alt="loading error" />
                <h3>Taxi</h3>
            </div>
            <div className="type">
                <img className="AccommodationImage" src={Picture7} alt="loading error" />
                <h3>Travel Guides</h3>
            </div>
            <div className="type">
                <img className="AccommodationImage" src={Picture8} alt="loading error" />
                <h3>Shops</h3>
            </div>
        </div>
    </div>
  );
};

export default Accommodation;