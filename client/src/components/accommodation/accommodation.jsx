import "./accommodation.scss";
import HotelService from "../service/hotelservice";
import ShopService from "../service/shopservice";
import Taxiservice from "../service/taxiservice";
import Guideservice from "../service/guideservice";
const Accommodation = () => {
  return (
    <div className="page">
      <div className="title">
        <h1>Find in Belihuloya...</h1>
      </div>
      <div className="accommodations">
        <HotelService />
        <ShopService />
        <Taxiservice />
        <Guideservice />
      </div>
    </div>
  );
};

export default Accommodation;
