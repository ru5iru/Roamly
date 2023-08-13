import './addAdmin.scss';
import AdminNavbar from "../../components/adminNavbar/adminNavbar";
import Tabs from "../../components/tabs/tabs";
import AdminForm from "../../components/adminForm/adminForm";

function AddAdmin() {
    return(
        <div className="add_admin_main">
            <div className="addadnav">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="addadmin">
                <AdminForm />
            </div>
        </div>
    );
  }
  
  export default AddAdmin;