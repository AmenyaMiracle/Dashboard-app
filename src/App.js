// App.js

import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import DashboardContent from './DashboardContent.js';
import RightSidebar from './RightSidebar.js'; // Import the RightSidebar component
import './Header.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <DashboardContent />
      <RightSidebar /> {/* Add the RightSidebar component here */}
    </div>
  );
}

export default App;
