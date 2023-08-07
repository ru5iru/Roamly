import './contentCreators.scss';
//import { Link } from 'react-router-dom';
import Pfp from '../../assets/images/pfp.jpg';

function ContentCreators() {
    return(
        <div className='creators-main'>
            <div className="creator-box">
                <div className="creator-pfp">
                    <img src= { Pfp } alt="loading error" />
                    <span class="material-icons">
                        stars
                    </span>
                </div>
                <div className="profile-options">
                    <div className="profile-name">
                        <p>Adela Parkson</p>
                    </div>
                    <div className="profile-badges">
                        <div className="profile-badge b_green">
                            <span class="material-icons">
                                hiking
                            </span>
                        </div>
                        <div className="profile-badge b_light-blue">
                            <span class="material-icons">
                                surfing
                            </span>
                        </div>
                        <div className="profile-badge b_purple">
                            <span class="material-icons">
                                person
                            </span>
                        </div>
                        <div className="profile-badge b_blue">
                            <span class="material-icons">
                                photo_camera
                            </span>
                        </div>
                        <div className="profile-badge b_dark-green">
                            <span class="material-icons">
                                travel_explore
                            </span>
                        </div>
                    </div>
                </div>
                <div className="more-button">
                    <span class="material-icons">
                        more_vert
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContentCreators;