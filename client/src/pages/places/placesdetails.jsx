import "./placesdetails.scss";
import Banner from "../../components/banner/banner";
import Information from "../../components/information/information";
import Accommodation from "../../components/accommodation/accommodation";
import LimitedAdvertisements from "../../components/advertisement/limitedadv";

const PlacesDetails = () => {
  return (
    
      <div className="mid-page">
        <Banner />
        <Information />
        <Accommodation />
      </div>
      
  );
};

export default PlacesDetails;
