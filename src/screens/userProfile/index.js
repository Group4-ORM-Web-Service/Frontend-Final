import React, { useEffect, useState } from 'react';
import { Grid, Paper, TextField, Typography, Button, Box, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Sidebar from '../../layouts/sidebar';
import { STORAGE_KEY } from '../../constant/keyComponent';
import { useAuth } from '../../context/AuthContext';

const UserProfile = () => {
  const { logout } = useAuth();
  const [user, setUser] = useState(null);

  const handleLogout = React.useCallback(() => {
    logout();
  }, [logout]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY.USER_DATA));
    if (storedData) {
      setUser(storedData);
    } else {
      console.log('Data not found in local storage.');
    }
  }, []);

  return (
    <>
      <Sidebar pageName='Profile' />
      <Container
        maxWidth='lg'
        style={{
          height: window.innerHeight,
          paddingTop: '64px',
        }}
      >
        <Grid container spacing={3} sx={{ bgcolor: 'grey.50' }}>
          <Grid item xs={12} md={4} sx={{ bgcolor: 'grey.50' }}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'white' }}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <AccountCircle style={{ fontSize: 80, color: '#311b92' }} />
                <Typography variant='h6' gutterBottom color='blue.900' fontWeight='500'>
                  {user?.username || 'N/A'}
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant='body2'>User ID: {`CU-${user?.user_id}` || 'N/A'}</Typography>
                <Typography variant='subtitle1' gutterBottom my='16px'>
                  Role: {user?.role === 'User' ? 'Customer' : 'Employee'}
                </Typography>
                <Typography variant='body2' my='16px'>
                  Register On: {new Date(user?.createdAt).toLocaleString()}
                </Typography>
              </Box>
              <Button
                variant='contained'
                color='error'
                sx={{ marginTop: 2 }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} sx={{ bgcolor: 'grey.50' }}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'white' }}>
              <Typography variant='h5' gutterBottom mb='32px' color='blue.900' fontWeight='600'>
                Account
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label='Username' fullWidth value={user?.username || 'N/A'} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label='Email' fullWidth value={user?.email || 'N/A'} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Password'
                    type='password'
                    fullWidth
                    value={user?.password || 'N/A'}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label='Role' fullWidth value={user?.role || 'N/A'} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' gutterBottom>
                    Customer Details
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label='Name' fullWidth value={user?.customer?.name || 'N/A'} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label='Address' fullWidth value={user?.customer?.address || 'N/A'} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label='City' fullWidth value={user?.customer?.city || 'N/A'} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label='Country' fullWidth value={user?.customer?.country || 'N/A'} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label='Phone' fullWidth value={user?.customer?.phone || 'N/A'} />
                </Grid>
              </Grid>
              <Button variant='contained' color='primary' sx={{ marginTop: 2 }}>
                Edit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfile;
