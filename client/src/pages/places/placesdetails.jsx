import "./placesdetails.scss";
import Banner from "../../components/banner/banner";
import Information from "../../components/information/information";
import Accommodation from "../../components/accommodation/accommodation";
import Advertisements from "../../components/advertisement/advertisement";

const PlacesDetails = () => {
  return (
    <div className="outer-space">
      <div className="outer-left-page">sidebar</div>
      <div className="mid-page">
        <Banner />
        <Information />
        <Accommodation />
      </div>
      <div className="outer-right-page">
        <Advertisements />
      </div>
    </div>
  );
};

export default PlacesDetails;
