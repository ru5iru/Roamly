import "./placesDetails.scss";
import Navbar from "../../components/navbar/navbar";
import Banner from "../../components/banner/banner";
import Information from "../../components/information/information";
import Accommodation from "../../components/accommodation/accommodation";

const PlacesDetails = () => {
  return (
    <div className="main">
        <Navbar />
        <Banner />
        <Information />
        <Accommodation />
    </div>
  );
};

export default PlacesDetails;