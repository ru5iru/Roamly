import './adminPanel.scss';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';

function AdminPanel() {
  return(
    <div className='main'>
        <AdminNavbar />
        <div className="content">
          <div className="tabs">
          </div>
          <div className="space">
          </div>
        </div>
    </div>
  );
}

export default AdminPanel;
