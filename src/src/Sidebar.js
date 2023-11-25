import React from 'react';
import './Sidebar.css';
import profileImage from './images/profileimage.png'; // Adjust the path to your image

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <div className="profile-content">
          <img className='profileimage' src={profileImage} alt="profileimage" />
          <p className='profile-name'>Amenya Miracle</p>
        </div>
      </div>
      <ul>
        <li><i className="ri-profile-fill"></i>Overview</li>
        <li><i className="ri-bank-card-fill"></i>Transactions</li>
        <li><i className="ri-mail-fill"></i>Message</li>
        {/* Other list items */}
      </ul>

      <ul className='second-line-sidebar'>
        <li><i className="ri-file-list-3-fill"></i>Products</li>
        <li><i className="ri-mouse-fill"></i>Orders</li>
        <li><i className="ri-list-indefinite"></i>Contacts</li>
        {/* Other list items */}
      </ul>

      <ul className='third-line-sidebar'>
        <li><i className="ri-user-3-fill"></i>Account</li>
        <li><i className="ri-customer-service-fill"></i>Support</li>
        <li><i className="ri-settings-4-fill"></i>Settings</li>
        {/* Other list items */}
      </ul>
    </div>
  );
};

export default Sidebar;
