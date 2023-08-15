import './adViewPage.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import AdView from '../../components/adView/adView';

function AdViewPage() {
    return(
        <div className="adview_main">
            <div className="adview_navbar">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="adview_body">
                <AdView />
            </div>
        </div>
    );
}

export default AdViewPage;