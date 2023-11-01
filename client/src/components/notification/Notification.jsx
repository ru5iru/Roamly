// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);

//   const handleNotificationClick = async () => {
//     try {
//       const response = await axios.get('/server/notifications');
//       setNotifications(response.data);
//     } catch (error) {
//       console.error('Error fetching notifications: ', error);
//     }
//   };

//   return (
//     <div className='notifyContainer'> 
//       {/* <button onClick={handleNotificationClick}>View Notifications</button> */}
//       {/* {notifications.map((notification) => (
//         <div className='singleNotification' key={notification.id}>{notification.message}</div>
//       ))} */}
//     </div>
//   );
// };

// export default Notification;
