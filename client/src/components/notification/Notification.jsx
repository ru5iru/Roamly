
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./notification.scss"

const Notification = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`/api/notifications?userId=${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications', error);
      }
    };
    fetchNotifications();
  }, [userId]);

  return (
    <div className='notifyContainer'>
      <h2>Notifications</h2>
      <ul>
        notification1
        notification2
        {/* {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.notification_message}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Notification;

