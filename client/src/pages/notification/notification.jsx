import React, { useState } from "react";
import "./notification.scss";
import Payment from "../payment/Payment";
import { useNavigate } from "react-router-dom";

const notificationsData = [
  {
    id: 1,
    sender: "Admin",
    date: "2023-09-18",
    subject: "Account Approval",
    message: "Your account has been approved by the admin.",
    read: true,
    approvalRequired: false, // No approval button needed
  },
  {
    id: 2,
    sender: "Admin",
    date: "2023-09-18",
    subject: "Account Approval",
    message: "Your account has been approved by the admin.",
    read: true,
    approvalRequired: false, // No approval button needed
  },
  {
    id: 3,
    sender: "Admin",
    date: "2023-09-17",
    subject: "Advertisement Approval",
    message:
      "Your advertisement has been approved. Now you can pay here to publish your advertisement.",
    read: false,
    approvalRequired: true, // Approval button needed
  },
  // Add more notifications here...
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
      <div className="filter-search">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
        <input
          type="text"
          placeholder="Search notifications"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="notification-items">
        {searchedNotifications.map((notification) => (
          <li
            key={notification.id}
            className={`notification-item ${
              notification.read ? "read" : "unread"
            }`}
          >
            <div className="notification-header">
              <span className="notification-sender">{notification.sender}</span>
              <span className="notification-date">{notification.date}</span>
            </div>
            <div className="notification-content">
              <p className="notification-subject">{notification.subject}</p>
              <p className="notification-message">{notification.message}</p>
            </div>
            {notification.approvalRequired && (
              <div className="notification-actions">
                <button
                  className="approval-button"
                  onClick={() => handleApprovalButtonClick(notification.id)}
                >
                  Pay Now
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
