import "./information.scss";
import Photos from "../photos/photos";

const Information = () => {
  return (
    <div className="mid">
        <div className="about">
            <p>
                Belihuloya is a village in the Ratnapura District, Sabaragamuwa Province of Sri Lanka. It is approximately 150 kilometres south-east of Colombo and is situated at an elevation of 616 metres above sea level. Discover the nature paradise of Belihuloya that offers enormous nature experiences with wonderful photogenic opportunities along with green mobile camping across it. Enjoy nature walks and water based activities during this tour. Also you may see wildlife such as mongoose, monkeys, chameleons, cows, bird’s butterflies and sometimes even hawks hanging around the trees nearby. The natural surrounding will gain a new life into you and best for nature lovers!
            </p>
        </div>
        <div className="more">
            <div className="details">
                <div className="location">
                    <i class="fa fa-map-marker"></i>
                    <span>Show on map</span>
                </div>
                <div className="rate">
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>
            </div>
            <div className="photos">
                <div className="line">
                    <p>Photos</p>
                    <span>view all</span>
                </div>
                <Photos />
            </div>
        </div>
    </div>
  );
};

export default Information;