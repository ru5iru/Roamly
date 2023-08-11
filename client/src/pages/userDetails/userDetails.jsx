import './userDetails.scss';
import AdminTable from '../../components/adminTable/adminTable';
import TravelerTable from '../../components/travelerTable/travelerTable';

function UserDetails() {
  return(
    <div className="user_main">
        <div className="rows">
            <div className="user_one">
                <div className="user_titlebar">
                    <div className="user_title">
                        <h2>Admins</h2>
                    </div>
                    <div className="user_buttons">
                        <div className="botton_box">
                            <span class="material-icons">
                                search
                            </span>
                        </div>
                        <div className="botton_box">
                            <span class="material-icons">
                                add_circle
                            </span>
                        </div>
                        <div className="button_boxtext">
                            <h3>View all</h3>
                            <span class="material-icons">
                                unfold_more
                            </span>
                        </div>
                    </div>
                </div>
                <div className="user_admin_table">
                    <AdminTable />
                </div>
            </div>
            <div className="user_two">
                <div className="user_titlebar">
                    <div className="user_title">
                        <h2>Travelers</h2>
                    </div>
                    <div className="user_buttons">
                        <div className="botton_box">
                            <span class="material-icons">
                                search
                            </span>
                        </div>
                    </div>
                </div>
                <div className="user_traveler_table">
                    <TravelerTable />
                </div>
            </div>
        </div>
        <div className="rows">
            <div className="user_one">
                <div className="user_titlebar">
                    <div className="user_title">
                        <h2>Travelers</h2>
                    </div>
                    <div className="user_buttons">
                        <div className="botton_box">
                            <span class="material-icons">
                                search
                            </span>
                        </div>
                    </div>
                </div>
                <div className="user_traveler_table">
                    <TravelerTable />
                </div>
            </div>
            <div className="user_two">
                <div className="user_titlebar">
                    <div className="user_title">
                        <h2>Travelers</h2>
                    </div>
                    <div className="user_buttons">
                        <div className="botton_box">
                            <span class="material-icons">
                                search
                            </span>
                        </div>
                    </div>
                </div>
                <div className="user_traveler_table">
                    <TravelerTable />
                </div>
            </div>
        </div>
        <div className="rows"></div>
    </div>
  );
}

export default UserDetails;