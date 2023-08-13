import './profile.scss';
import ProfilePic from '../../assets/images/profile.jpg';

function Profile() {
    return(
        <div className="profile_main">
            <div className="profile">
                <h1>Welcome!</h1>
                <div className="profile_picture">
                    <img src= {ProfilePic} alt="Avatar" />
                </div>
                <div className='name'>
                    <h1>Milly Jusmin</h1>
                </div>
                <div className='actor'>
                    <h3>Admin</h3>
                </div>
            </div>
        </div>
    );
}

export default Profile;