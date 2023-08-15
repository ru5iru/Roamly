import "./editTrip.scss";
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

const EditTrip = () => {
    return (
        <div className="edittrip_main">
            <div className="editrow">
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture1} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Camping</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture2} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Surfing</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture3} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>
                            Hiking
                        </h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture4} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Beach</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
            </div>
            <div className="editrow">
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture5} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Cycling</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture6} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Religious Places</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture7} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Waterfalls</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture8} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Historical Places</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
            </div>
            <div className="editrow">
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture9} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Whale Watching</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture10} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Gardens</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture11} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Zoos</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture13} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Boat Riding</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
            </div>
            <div className="editrow">
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture14} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Wild Life</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="editboxes">
                    <div className="image">
                        <img className="edittripImage" src={Picture12} alt="loading error" />
                        <span class="material-icons">
                            photo_camera
                        </span>
                    </div>
                    <div className="name">
                        <h3>Parks</h3>
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                </div>
                <div className="addbox">
                    <span class="material-icons">
                        add
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EditTrip;
