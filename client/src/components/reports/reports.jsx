import './reports.scss';

function Reports() {
    return(
        <div className="report_main">
            <div className="reports">
                <h2>User Activity Reports</h2>
                <div className="userreport_container">
                    <div className="traveler">
                        <h3>Traveler</h3>
                        <table>
                            <tr>
                                <th>User Name</th>
                                <th>Activity Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>John Dom</td>
                                <td>Good</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Billy Dean</td>
                                <td>Weak</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="services">
                    <h3>Other Services</h3>
                        <table>
                            <tr>
                                <th>User Type</th>
                                <th>Report Count</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>Shop</td>
                                <td>20</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Taxi</td>
                                <td>5</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="reports">
                <h2>Security Reports</h2>
                <div className="userreport_container">
                <div className="traveler">
                        <h3>Traveler</h3>
                        <table>
                            <tr>
                                <th>User Name</th>
                                <th>Security Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>John Dom</td>
                                <td>Good</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Billy Dean</td>
                                <td>Weak</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="services">
                    <h3>Other Services</h3>
                        <table>
                            <tr>
                                <th>User Type</th>
                                <th>Report Count</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>Shop</td>
                                <td>20</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Taxi</td>
                                <td>5</td>
                                <td>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="reports">
                <h2>Other Reports</h2>
                <div className="userreport_container">
                    <div className="report_box">
                        <span class="material-icons">
                            summarize
                        </span>
                        <h3>Performance Reports</h3>
                    </div>
                    <div className="report_box">
                        <span class="material-icons">
                            summarize
                        </span>
                        <h3>Usage Analytics</h3>
                    </div>
                    <div className="report_box">
                        <span class="material-icons">
                            summarize
                        </span>
                        <h3>Financial and Transaction Reports</h3>
                    </div>
                    <div className="report_box">
                        <span class="material-icons">
                            summarize
                        </span>
                        <h3>User Engagement Reports</h3>
                    </div>
                    <div className="report_box">
                        <span class="material-icons">
                            summarize
                        </span>
                        <h3>Custom Reports</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;