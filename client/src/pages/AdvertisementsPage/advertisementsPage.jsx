import './advertisementsPage.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import Ads from '../../components/ads/ads';

function AdvertisementsPage() {
    return(
        <div className="advertisements_main">
            <div className="advertisements_navbar">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="advertisements_body">
                <Ads />
            </div>
        </div>
    );
}

export default AdvertisementsPage;