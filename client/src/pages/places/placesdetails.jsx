import "./placesdetails.scss";
import Banner from "../../components/banner/banner";
import Information from "../../components/information/information";
import Accommodation from "../../components/accommodation/accommodation";
import LeftBar from "../../components/leftbar/leftbar";
import LimitedAdvertisements from "../../components/advertisement/limitedadv";

const PlacesDetails = () => {
  return (
    <div className="outer-space">
      <div className="outer-left-page">
        <LeftBar />
      </div>
      <div className="mid-page">
        <Banner />
        <Information />
        <Accommodation />
      </div>
      <div className="outer-right-page">
        <LimitedAdvertisements />
      </div>
    </div>
  );
};

export default PlacesDetails;
