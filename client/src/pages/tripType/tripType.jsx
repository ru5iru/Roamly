import "./tripType.scss";
import Navbar from "../../components/navbar/navbar";
import Trip from "../../components/trip/trip";

const TripType = () => {
  return (
    <div className="main">
        <Navbar />
        <div className="topic">
            <h1>
                Select Your Preferred Trip Type...
            </h1>
        </div>
        <div className="container">
            <div className="row">
                <Trip />
                <Trip />
            </div>
            <div className="row">
                <Trip />
                <Trip />
            </div>
        </div>
    </div>
  );
};

export default TripType;