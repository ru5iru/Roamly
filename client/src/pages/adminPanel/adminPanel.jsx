import './adminPanel.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import Tabs from '../../components/tabs/tabs';
import Dashboard from '../dashboard/dashboard';

function AdminPanel() {
  return(
    <div className='main'>
        <AdminNavbar />
        <Tabs />
        <Dashboard />
    </div>
  );
}

export default AdminPanel;
