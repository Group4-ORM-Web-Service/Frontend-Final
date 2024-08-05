/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/sidebar.css'; // Import your CSS file here
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const menuList = [
  {
    id: 1,
    name: 'Home',
    screen: '/home',
  },
  {
    id: 2,
    name: 'Products',
    screen: '/products',
  },
  {
    id: 3,
    name: 'Admin',
    screen: '/admin',
  },
  {
    id: 4,
    name: 'Account',
    screen: '/account',
  },
];

const settings = [
  {
    id: 1,
    name: 'Account',
    screen: '/account',
  },
  {
    id: 2,
    name: 'Logout',
    screen: '/',
  },
];

import logo from '../images/logo.png';

const Sidebar = ({ pageName = 'Home' }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = React.useCallback((event) => {
    setAnchorElUser(event?.currentTarget);
  }, []);

  const handleCloseUserMenu = React.useCallback(() => {
    setAnchorElUser(null);
  }, []);

  const toggleSidebar = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleClockRightMenu = React.useCallback(
    (item) => {
      navigate(item.screen, { state: { item } });
      handleCloseUserMenu();
    },
    [handleCloseUserMenu, navigate],
  );

  return (
    <Box
      className='container-fluid'
      position='sticky'
      top={0}
      zIndex={500}
      boxShadow={4}
      bgcolor='grey.50'
    >
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid p-2'>
          <div className='form-inline'>
            <div className='btn btn-primary' onClick={toggleSidebar}>
              <DehazeIcon style={{ fontSize: 15 }} />
            </div>
          </div>
          <Tooltip title='Open settings' boxShadow={4}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='Remy Sharp' src={logo} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting.id} onClick={() => handleClockRightMenu(setting)}>
                <Typography textAlign='center'>{setting.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className='sd-header'>
          <h4 className='mb-0'>ShopCart</h4>
          <div className='btn btn-primary' onClick={toggleSidebar}>
            <CloseIcon style={{ fontSize: 15 }} />
          </div>
        </div>
        <div className='sd-body'>
          {menuList.map((page) => (
            <MenuItem
              key={page.id}
              selected={pageName === page.name}
              onClick={() => handleClockRightMenu(page)}
            >
              <Typography textAlign='center' py='8px'>
                {page.name}
              </Typography>
            </MenuItem>
          ))}
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </Box>
  );
};

export default Sidebar;
