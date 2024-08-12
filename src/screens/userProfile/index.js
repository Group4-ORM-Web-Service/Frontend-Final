import React, {useState, useEffect} from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import Sidebar from '../../layouts/sidebar';
const STORAGE_KEY = 'USER_DATA';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // const storedData = localStorage.getItem(STORAGE_KEY);
    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      console.log('Data not found in local storage.');
      // Handle the case when data is not found in local storage
    }
  }, []);

  console.log(userData);

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  // const { name, email } = userData;
  return (
    <Box bgcolor='grey.50'>
      <Sidebar pageName='UserProfile' />
      <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
        <Typography variant="h5" gutterBottom>User Profile</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1"><strong>Name:</strong></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1"><strong>Email:</strong></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {/* <strong>Roles:</strong> {roles.map((role, index) => (
                <span key={index}>{role}{index !== roles.length - 1 ? ', ' : ''}</span>
              )}; */}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default UserProfile;