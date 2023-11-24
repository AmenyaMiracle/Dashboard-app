// RightSidebar.js
import React from 'react';
import NotificationsList from './NotificationsList';
import './RightSidebar.css';

const RightSidebar = () => {
  const contacts = [
    { name: 'John Doe', status: 'Online' },
    { name: 'Jane Smith', status: 'Offline' },
    { name: 'Bob Johnson', status: 'Online' },
    { name: 'Alice Brown', status: 'Away' },
    { name: 'Charlie Wilson', status: 'Online' },
  ];

  return (
    <div className="right-sidebar">
      <h6 className='notifications'>Notifications</h6>

      {/* Dynamic Notifications */}
      <NotificationsList />

      <h6 className='contact-list'>Contact List</h6>
      <div className='contact-list-container'>
        {contacts.map((contact, index) => (
          <div key={index} className='contact-item'>
            <p className='contact-name'>{contact.name}</p>
            <p className={`contact-status ${contact.status.toLowerCase()}`}>{contact.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
