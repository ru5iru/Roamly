import AdminNavbar from "../../components/adminNavbar/adminNavbar";
import Tabs from "../../components/tabs/tabs";
import AdminForm from "../../components/adminForm/adminForm";

function AddAdmin() {
    return(
        <div className="add_admin_main">
            <AdminNavbar />
            <Tabs />
            <AdminForm />
        </div>
    );
  }
  
  export default AddAdmin;