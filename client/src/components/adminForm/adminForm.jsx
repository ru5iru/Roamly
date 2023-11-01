import React, { useState } from "react";
import axios from "axios";

import './adminForm.scss';

function AdminForm() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState('');
    const [contact_no, setContactNo] = useState('');
    const [gender, setGender] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send admin data to the back-end for adding/updating
        const newAdmin = { firstname, lastname, email, contact_no, gender, username, password, confirmpassword };
        axios
          .post("http://localhost:8000/server/admin/admins", newAdmin)
          .then((response) => {
            console.log("Admin added successfully:", response.data);
            // Clear the form fields after successful submission
            setFirstname("");
            setLastname("");
            setEmail("");
            setContactNo("");
            setGender("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
          })
          .catch((error) => {
            console.error("Error adding admin:", error);
          });
      };

    return(
        <div className="admin_form_main">
            <form className="admin_form" onSubmit={handleSubmit}>
                <div className="form_title">
                    <h2>Add an Admin</h2>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="name">First Name</label>
                        <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                    </div>
                    <div className="row_detail">
                        <label htmlFor="name">Last Name</label>
                        <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="row_detail">
                        <label htmlFor="contact_no">Contact Number</label>
                        <input type="text" id="contact_no" value={contact_no} onChange={(e) => setContactNo(e.target.value)}/>
                    </div>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
                    </div>
                    <div className="row_detail">
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="row_detail">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="form_buttons">
                    <button className="createaccount" type="submit">
                        Create Account
                    </button>
                    <button className="cancel" type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminForm;