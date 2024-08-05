import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'; // Import your CSS file here
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid p-2">
          <div className="form-inline">
              <div className="btn btn-primary" onClick={toggleSidebar}>
                <DehazeIcon style={{ fontSize: 15 }} />
              </div>
            </div>
            <a className="navbar-brand text-primary mr-0">User Profile</a>
           
          </div>
        </nav>
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
          <div className="sd-header">
            <h4 className="mb-0">Shop Cart</h4>
            <div className="btn btn-primary" onClick={toggleSidebar}>
                <CloseIcon style={{ fontSize: 15 }} />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li onClick={toggleSidebar}><Link to="/product" className="sd-link">Product</Link></li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
          onClick={toggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;