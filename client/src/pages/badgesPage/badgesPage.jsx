import './badgesPage.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import Badges from '../../components/badges/badges';

function BadgesPage() {
    return(
        <div className="badges_main">
            <div className="badges_navbar">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="badges_body">
                <Badges />
            </div>
        </div>
    );
}

export default BadgesPage;