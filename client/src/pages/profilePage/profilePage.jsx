import './profilePage.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import Profile from '../../components/profile/profile';

function ProfilePage() {
    return(
        <div className="profiles_main">
            <div className="profiles_navbar">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="profiles_body">
                <Profile />
            </div>
        </div>
    );
}

export default ProfilePage;