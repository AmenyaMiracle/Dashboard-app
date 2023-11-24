import React, { useState, useEffect, useCallback } from 'react';
import './NotificationsList.css';

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);

  const getRandomUser = useCallback(() => {
    const users = ['London speed', 'Go logistics', 'Shirt view', 'David'];
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  }, []);

  const generateNotification = useCallback(() => {
    const content = `New message from ${getRandomUser()}`;
    const timestamp = new Date();
    const icon = 'ri-mail-fill'; // Add the icon class here
    return { content, timestamp, icon };
  }, [getRandomUser]);

  const addNotification = useCallback(() => {
    setNotifications((prevNotifications) => [generateNotification(), ...prevNotifications]);
  }, [generateNotification]);

  useEffect(() => {
    const intervalId = setInterval(addNotification, 100000); // Add a new notification every 5 seconds
    return () => clearInterval(intervalId);
  }, [addNotification]);

  return (
    <div className="notifications-list">
      {notifications.map((notification, index) => (
        <div key={index} className="notification-item">
          <i className={`notification-icon ${notification.icon}`}></i>
          <div className="notification-content">
            <p>{notification.content}</p>
            <p className="notification-timestamp">{formatTimestamp(notification.timestamp)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Function to format the timestamp
const formatTimestamp = (timestamp) => {
  const now = new Date();
  const diff = Math.floor((now - timestamp) / 1000); // Calculate the time difference in seconds

  if (diff < 60) {
    return 'Just now';
  } else if (diff < 3600) {
    const mins = Math.floor(diff / 60);
    return `${mins} min${mins !== 1 ? 's' : ''} ago`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diff / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
};

export default NotificationsList;
