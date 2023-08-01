import "./trip.scss";
import Picture1 from "../../assets/images/camping.jpg";

const Trip = () => {
  return (
    <div className="row">
        <div className="box">
            <img className="tripImage" src={Picture1} alt="loading error" />
            <h3>Camping</h3>
        </div>
    </div>
  );
};

export default Trip;
