import './adminProfile.scss';
import ProfilePic from '../../assets/images/pfpmale.jpg';
import { Link } from 'react-router-dom';

function AdminProfile() {
    return(
        <div className="adminprofile_main">
            <div className="admin_profile">
                <div className="admin_profile_summary">
                    <div className="profile_picture">
                        <img src= {ProfilePic} alt="Avatar" />
                    </div>
                    <div className='name'>
                        <h1>John Doe</h1>
                    </div>
                    <div className='actor'>
                        <h3>Admin</h3>
                    </div>
                </div>
                <div className="admin_profile_details">
                    <div className="profile_details">
                        <table>
                            <tr>
                                <th>Email</th>
                                <td>johnd@gmail.com</td>
                            </tr>
                            <tr>
                                <th>User Name</th>
                                <td>johnyboi</td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td>0772244456</td>
                            </tr>
                            <tr>
                                <th>Joined Date</th>
                                <td>2023-12-12</td>
                            </tr>
                        </table>
                    </div>
                    <div className="profile_reports">
                        <h1>Reports</h1>
                        <div className="table">
                            <table>
                                <tr>
                                    <th>Status</th>
                                    <th>Count</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>Ongoing</td>
                                    <td>30</td>
                                    <td>
                                        <Link to='/' className='link'>
                                            <span class="material-icons">
                                                visibility
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Handled</td>
                                    <td>40</td>
                                    <td>
                                        <Link to='/' className='link'>
                                            <span class="material-icons">
                                                visibility
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProfile;