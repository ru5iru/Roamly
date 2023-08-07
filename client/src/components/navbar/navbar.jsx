// import "./navbar.scss";
// import "./font.scss";

// import logo from "../../assets/images/Roamly.png";
// import Search from "../../assets/images/search.png";
// import Chat from "../../assets/images/Chat.png";
// import Notification from "../../assets/images/Notification.png";
// import Profile_pic from "../../assets/images/profile_pic.png";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       {/* <div className="left">
//         <h1 className="klavika-h1">Roamly</h1>
//       </div>
//         <div className="right">
//           <div className="toggle">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div> */}
//       <div className="left">
//         <img src={logo} alt="Roamly" />
//         <img src={Search} alt="Search" />
//       </div>
//       <div className="right">
//         <img src={Chat} alt="Chat" />
//         <img src={Notification} alt="Notification" />
//         <img src={Profile_pic} alt="Profile Pic" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import "./navbar.scss";
import Chat from "../../assets/images/Chat.png";
import Notification from "../../assets/images/Notification.png";
import Search from "../../assets/images/search.png";
import Profile_pic from "../../assets/images/profile_pic.png";
import logo from "../../assets/images/Roamly.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <img src={logo} alt="" className="logo" />
                <img src={Search} alt="" />
            </div>
            <div className="right">
                <img src={Chat} alt="" />
                <img src={Notification} alt="" />
                <img src={Profile_pic} alt="" />
            </div>
        </div>
    );
};

export default Navbar;