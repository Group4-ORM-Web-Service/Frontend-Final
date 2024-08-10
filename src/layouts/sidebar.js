/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/sidebar.css'; // Import your CSS file here
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import {
  Avatar,
  Box,
  ButtonBase,
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
    screen: ROUTES_NAME.HOME,
  },
  {
    id: 2,
    name: 'Products',
    screen: ROUTES_NAME.PRODUCTS,
  },
  {
    id: 3,
    name: 'Admin',
    screen: ROUTES_NAME.ADMIN,
  },
  {
    id: 4,
    name: 'Account',
    screen: ROUTES_NAME.ACCOUNT,
  },
];

const settings = [
  {
    id: 1,
    name: 'Account',
    screen: ROUTES_NAME.ACCOUNT,
  },
  {
    id: 2,
    name: 'Logout',
    screen: ROUTES_NAME.LOGIN,
  },
];

import logo from '../images/logo.png';
import { ROUTES_NAME, STORAGE_KEY } from '../constant/keyComponent';
import { useAuth } from '../context/AuthContext';
import { useAppContext } from '../context/AppContext';
import { ShoppingCart } from '@mui/icons-material';
import { setOpenShopCard } from '../store/actions/AppAction';
import ShopCardComponent from '../component/Card/ShoppingList';

const Sidebar = ({ pageName = 'Home' }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { appState, dispatchApp } = useAppContext();

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
      if (item.name === 'Logout') {
        logout();
      } else {
        navigate(item.screen, { state: { item } });
      }

      handleCloseUserMenu();
    },
    [handleCloseUserMenu, logout, navigate],
  );

  const handleClick = React.useCallback(() => {
    dispatchApp(setOpenShopCard(!appState?.isOpenCard));
  }, [appState?.isOpenCard, dispatchApp]);

  const numberOfItems = React.useMemo(() => appState?.items?.length, [appState?.items?.length]);

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
          <ButtonBase
            style={{
              marginLeft: 'auto',
              marginRight: '32px',
              width: 40,
              height: 40,
            }}
            onClick={handleClick}
          >
            <Typography
              textAlign='center'
              color='red.900'
              position='absolute'
              fontWeight='800'
              top='0'
              ml='20px'
              bgcolor='grey.50'
              boxShadow={4}
              borderRadius={50}
              minWidth={20}
              width='auto'
              height='auto'
              fontSize='12px'
              justifyContent='center'
            >
              {numberOfItems}
            </Typography>
            <ShoppingCart color='info' />
          </ButtonBase>
          <Tooltip title='Open settings' boxShadow={4}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, boxShadow: 2 }}>
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
      <ShopCardComponent />
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
