/* eslint-disable no-unused-vars */
import React from 'react';
import { TextField, Button, Grid, Typography, Box, Container, IconButton } from '@mui/material';
import { ArrowBackIosNew, Close } from '@mui/icons-material';

export default function OrderForm({ onPrevious, onClose, onSubmit }) {
  const handleSubmit = React.useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  const handlePrevious = React.useCallback(() => {
    onPrevious(false);
  }, [onPrevious]);

  return (
    <Box width={450}>
      <Grid display='flex' justifyContent='space-between'>
        <IconButton sx={{ p: 1, mt: '2px' }} onClick={handlePrevious}>
          <ArrowBackIosNew />
        </IconButton>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Grid>
      <Box component='form' px='16px'>
        <Typography variant='h5' gutterBottom mt='32px'>
          Contact Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label='Name'
              variant='outlined'
              sx={{ display: 'none' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Email' variant='outlined' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Phone' variant='outlined' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Address' variant='outlined' />
          </Grid>
        </Grid>

        <Typography variant='h5' gutterBottom sx={{ mt: 4 }}>
          Payment form
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label='Card Name' variant='outlined' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Card Number xxxx-xxxx-xxxx-xxxx' variant='outlined' />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              select
              label='Select Month'
              variant='outlined'
              SelectProps={{
                native: true,
              }}
            >
              <option value=''></option>
              <option value='01'>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              select
              label='Select Year'
              variant='outlined'
              SelectProps={{
                native: true,
              }}
            >
              <option value=''></option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
              <option value='2028'>2028</option>
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label='CVV' variant='outlined' />
          </Grid>
        </Grid>

        <Box
          sx={{
            position: 'absolute',
            bottom: '64px',
            width: '90%',
            mx: '10px',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <Button
            fullWidth
            size="large"
            variant='contained'
            color='success'
            sx={{ backgroundColor: 'blue.900', color: '#fff' }}
            onClick={handleSubmit}
          >
            250$ Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
