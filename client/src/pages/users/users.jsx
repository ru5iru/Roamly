import './users.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import UserDetails from '../userDetails/userDetails';

function Users() {
  return(
    <div className='admin_main'>
        <div className='admin_main'>
            <div className="adnav">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="dmain">
                <UserDetails />
            </div>
        </div>
    </div>
  );
}

export default Users;