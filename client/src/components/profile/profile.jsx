import './profile.scss';
import ProfilePic from '../../assets/images/profile.jpg';

function Profile() {
    return(
        <div className="profile_main">
            <div className="profile">
                <div className="profile_picture">
                    <img src= {ProfilePic} alt="Avatar" />
                </div>
                <div className='name'>
                    <h1>Milly Jusmin</h1>
                </div>
                <div className='actor'>
                    <h3>milly95Just@gmail.com - Admin</h3>
                </div>
            </div>
            <div className="settings">
                <table>
                    <tr>
                        <th>Admin ID</th>
                        <td>1</td>
                        <td>
                            <span class="material-icons">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>User Name</th>
                        <td>Milly Jusmin</td>
                        <td>
                            <span class="material-icons">
                                edit
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>Date of Birth</th>
                        <td>1995.12.08</td>
                        <td>
                            <span class="material-icons">
                                edit
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>milly95Just@gmail.com</td>
                        <td>
                            <span class="material-icons">
                                edit
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>0775986325</td>
                        <td>
                            <span class="material-icons">
                                edit
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>
                            <select name="gender" id="gender">
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                        </td>
                        <td>
                            <span class="material-icons">
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Profile;