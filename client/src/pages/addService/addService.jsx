import '../addAdmin/addAdmin.scss';
import AdminNavbar from "../../components/adminNavbar/adminNavbar";
import Tabs from "../../components/tabs/tabs";
import OtherServiceForm from "../../components/otherServiceForm/otherServiceForm";

function AddService() {
    return(
        <div className="add_admin_main">
            <div className="addadnav">
                <AdminNavbar />
                <Tabs />
            </div>
            <div className="addadmin">
                <OtherServiceForm />
            </div>
        </div>
    );
  }
  
  export default AddService;