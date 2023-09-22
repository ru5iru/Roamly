import '../adminForm/adminForm.scss';

function OtherServiceForm() {
    return(
        <div className="admin_form_main">
            <div className="admin_form">
                <div className="form_title">
                    <h2>Add a service</h2>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="First Name" />
                    </div>
                    <div className="row_detail">
                        <label htmlFor="name"></label>
                        <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" />
                    </div>
                    <div className="row_detail">
                        <label htmlFor="contact">Contact Number</label>
                        <input type="text" id="contact" name="contact" placeholder="Contact Number" />
                    </div>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" name="username" placeholder="User Name" />
                    </div>
                </div>
                <div className="form_row">
                    <div className="row_detail">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="row_detail">
                        <label htmlFor="confirmpassword"></label>
                        <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="form_buttons">
                    <button className="createaccount">Create Account</button>
                    <button className="cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default OtherServiceForm;