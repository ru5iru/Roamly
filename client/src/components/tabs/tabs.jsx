import './tabs.scss';
import { NavLink } from 'react-router-dom';

function Tabs() {
    return(
        <div className='tabs-main'>
            <NavLink to='/' id='1'>
                <div className="tab tab-dashboard">
                    <span class="material-icons">
                        dashboard
                    </span>
                    <p>Dashboard</p>
                </div>
            </NavLink>
            <NavLink to="/users" id='2'>
                <div className="tab tab-users">
                    <span class="material-icons">
                        people_alt
                    </span>
                    <p>Users</p>
                </div>
            </NavLink>
            <NavLink to="/advertisementspage" id='3'>
                <div className="tab tab-advertisements">
                    <span class="material-icons">
                        campaign
                    </span>
                    <p>Advertisements</p>
                </div>
            </NavLink>
            <NavLink to="/reportspage" id='4'>
                <div className="tab tab-reports">
                    <span class="material-icons">
                        library_books
                    </span>
                    <p>Reports</p>
                </div>
            </NavLink>
            <NavLink to="/placespage" id='5'>
                <div className="tab tab-places">
                    <span class="material-icons">
                        share_location
                    </span>
                    <p>Places</p>
                </div>
            </NavLink>
            <NavLink to="/badgespage" id='6'>
                <div className="tab tab-badges">
                    <span class="material-icons">
                        stars
                    </span>
                    <p>Badges</p>
                </div>
            </NavLink>
            <NavLink to="/profilepage" id='7'>
                <div className="tab q   tab-profile">
                    <span class="material-icons">
                        person
                    </span>
                    <p>Profile</p>
                </div>
            </NavLink>
        </div>
    );
}

export default Tabs;