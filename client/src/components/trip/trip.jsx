import "./trip.scss";
import Picture1 from "../../assets/images/camping.jpg";
import Picture2 from "../../assets/images/surfing.jpg";
import Picture3 from "../../assets/images/hiking.jpg";
import Picture4 from "../../assets/images/beach.jpg";
import Picture5 from "../../assets/images/cycling.jpg";
import Picture6 from "../../assets/images/religious.jpg";
import Picture7 from "../../assets/images/waterfalls.jpg";
import Picture8 from "../../assets/images/historical.jpg";
import Picture9 from "../../assets/images/whale.jpg";
import Picture10 from "../../assets/images/gardens.jpg";
import Picture11 from "../../assets/images/zoo.jpg";
import Picture12 from "../../assets/images/parks.jpg";
import Picture13 from "../../assets/images/boat.jpg";
import Picture14 from "../../assets/images/elephant.jpg";

const Trip = () => {
    return (
        <div className="trip_main">
            <div className="row">
              <div className="boxes">
                  <img className="tripImage" src={Picture1} alt="loading error" />
                  <h3>Camping</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture2} alt="loading error" />
                  <h3>Surfing</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture3} alt="loading error" />
                  <h3>Hiking</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture4} alt="loading error" />
                  <h3>Beach</h3>
              </div>
            </div>
            <div className="row">
              <div className="boxes">
                  <img className="tripImage" src={Picture5} alt="loading error" />
                  <h3>Cycling</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture6} alt="loading error" />
                  <h3>Religious Places</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture7} alt="loading error" />
                  <h3>Waterfalls</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture8} alt="loading error" />
                  <h3>Historical Places</h3>
              </div>
            </div>
            <div className="row">
              <div className="boxes">
                  <img className="tripImage" src={Picture9} alt="loading error" />
                  <h3>Whale Watching</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture10} alt="loading error" />
                  <h3>Gardens</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture11} alt="loading error" />
                  <h3>Zoo</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture12} alt="loading error" />
                  <h3>Parks</h3>
              </div>
            </div>
            <div className="row">
              <div className="boxes">
                  <img className="tripImage" src={Picture13} alt="loading error" />
                  <h3>Boat Riding</h3>
              </div>
              <div className="boxes">
                  <img className="tripImage" src={Picture14} alt="loading error" />
                  <h3>Elephent Orphanage</h3>
              </div>
            </div>
        </div>
    );
};

export default Trip;
