import './placesPage.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import Places from '../../components/places/places';

function PlacesPage() {
    return(
        <div className="places_main">
            <div className="places_navbar">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="places_body">
                <Places />
            </div>
        </div>
    );
}

export default PlacesPage;