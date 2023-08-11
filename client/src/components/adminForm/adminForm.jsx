function AdminForm() {
    return(
        <div className="admin_form_main">
            <div className="admin_form">
                <div className="form_title">
                    <h2>Add an Admin</h2>
                </div>
                <div className="form_row">
                    <div className="form_row_top">
                        <h4>Name</h4>
                    </div>
                    <div className="form_row_bottom">
                        <div className="form_row_bottom_left">
                            <input type="text" />
                        </div>
                        <div className="form_row_bottom_right">
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminForm;