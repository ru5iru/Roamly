import './adminPanel.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import Dashboard from '../dashboard/dashboard';

function AdminPanel() {
  return(
    <div className='admin_main'>
      <div className="adnav">
        <AdminNavbar />
        <Tabs />
      </div>
      <div className="dmain">
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminPanel;
