import './userProfile.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import AdminProfile from '../../components/adminProfile/adminProfile';

function UserProfile() {
  return(
      <div className="admin_profile_main">
          <div className="adpronav">
              <AdminNavbar />
              <Tabs />
          </div>
          <div className="admin_profile">
              <AdminProfile />
          </div>
      </div>
  );
}

export default UserProfile;