import './reportsPage.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import Reports from '../../components/reports/reports';

function AdvertisementsPage() {
    return(
        <div className="reportss_main">
            <div className="reports_navbar">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="reports_body">
                <Reports />
            </div>
        </div>
    );
}

export default AdvertisementsPage;