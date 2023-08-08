import { Link } from "react-router-dom";
import "./trip.scss";
import Picture1 from "../../assets/images/camping.jpg";

const Trip = () => {
  return (
    <Link to={"/places"}>
    <div className="row">
        <div className="boxes">
            <img className="tripImage" src={Picture1} alt="loading error" />
            <h3>Camping</h3>
        </div>
    </div>
    </Link>
  );
};

export default Trip;