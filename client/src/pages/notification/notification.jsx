import React, { useState } from "react";
import "./notification.scss";
import Payment from "../payment/payment";
import { useNavigate } from "react-router-dom";

const notificationsData = [
];

const Notification = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const handleApprovalButtonClick = (notificationId) => {
    // Handle the approval button click here, e.g., mark the notification as read.
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === notificationId) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
    navigate("/advertisements/payments");
  };

  // Filter notifications based on read/unread status
  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "all") {
      return true;
    } else if (filter === "read") {
      return notification.read;
    } else {
      return !notification.read;
    }
  });

  // Filter notifications based on search keyword
  const searchedNotifications = filteredNotifications.filter((notification) =>
    notification.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="notification">
      
                <button
                  // className="approval-button"
                  onClick={() => handleApprovalButtonClick()}
                >
                  Pay Now
                </button>
             
    </div>
  );
};

export default Notification;

