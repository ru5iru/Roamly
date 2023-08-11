import './tabs.scss';
import { Link } from 'react-router-dom';

function Tabs() {
    return(
        <div className='tabs-main'>
            <Link to='/'>
                <div className="tab tab-dashboard">
                    <span class="material-icons">
                        dashboard
                    </span>
                    <p>Dashboard</p>
                </div>
            </Link>
            <Link to="/users">
                <div className="tab tab-users">
                    <span class="material-icons">
                        people_alt
                    </span>
                    <p>Users</p>
                </div>
            </Link>
            <Link to="">
                <div className="tab tab-advertisements">
                    <span class="material-icons">
                        campaign
                    </span>
                    <p>Advertisements</p>
                </div>
            </Link>
            <Link to="/">
                <div className="tab tab-reports">
                    <span class="material-icons">
                        library_books
                    </span>
                    <p>Reports</p>
                </div>
            </Link>
            <Link to="/placesdetails">
                <div className="tab tab-places">
                    <span class="material-icons">
                        share_location
                    </span>
                    <p>Places</p>
                </div>
            </Link>
            <Link to="">
                <div className="tab tab-badges">
                    <span class="material-icons">
                        stars
                    </span>
                    <p>Badges</p>
                </div>
            </Link>
            <Link to="/triptype">
                <div className="tab q   tab-profile">
                    <span class="material-icons">
                        person
                    </span>
                    <p>Profile</p>
                </div>
            </Link>
        </div>
    );
}

export default Tabs;