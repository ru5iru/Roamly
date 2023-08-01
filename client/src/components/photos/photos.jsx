import "./photos.scss";
import Picture1 from "../../assets/images/camping.jpg";

const Photos = () => {
  return (
    <div className="full">
        <div className="row">
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
        </div>
        <div className="row">
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
        </div>
        <div className="row">
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
            <div className="box">
                <img className="tripImage" src={Picture1} alt="loading error" />
            </div>
        </div>
    </div> 
  );
};

export default Photos;
