import React from "react";
import "./adminNavbar.scss";
import Picture9 from "../../assets/images/profile.jpg";

const AdminNavbar = () => {
  return (
    <div className="admin_navbar">
        <div className="left">
            <h1>Roamly</h1>
            <p className="search">
                <i class="fa fa-search"></i>
            </p>     
        </div>
        <div className="right">
          <div className="middle"></div>
          <div className="icons">
            <p><i class="fa fa-commenting"></i></p>
            <p><i class="fa fa-bell"></i></p>
            <div className="profile">
              <img src= {Picture9} alt="loading error" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default AdminNavbar;
