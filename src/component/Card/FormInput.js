/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Container,
  IconButton,
  Autocomplete,
} from '@mui/material';
import { ArrowBackIosNew, Close, Email } from '@mui/icons-material';

const yearlyData = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];
const monthlyData = ['01', '02', '03', '04', '06', '07', '08', '09', '10', '11', '12'];

export default function OrderForm({ totalPrice, onPrevious, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    cardName: '',
    cardNumber: null,
    monthly: '',
    yearly: '',
    cvv: '',
  });

  const handleChangeForm = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    },
    [formData],
  );

  const handleSelect = React.useCallback(
    (key, value) => {
      setFormData({
        ...formData,
        [key]: value,
      });
    },
    [formData],
  );

  const isValid = React.useMemo(() => {
    const valid = Object.values(formData)?.every((v) => v !== '' && v !== null);
    return valid;
  }, [formData]);

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
        <Typography variant='h5' gutterBottom mt='32px' mb='32px'>
          Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Email'
              name='email'
              variant='outlined'
              onChange={handleChangeForm}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Phone'
              name='phone'
              variant='outlined'
              onChange={handleChangeForm}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Address'
              name='address'
              variant='outlined'
              onChange={handleChangeForm}
            />
          </Grid>
        </Grid>

        <Typography variant='h5' gutterBottom sx={{ mt: 4 }}>
          Payment form
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Card Name'
              name='cardName'
              variant='outlined'
              onChange={handleChangeForm}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Card Number xxxx-xxxx-xxxx-xxxx'
              name='cardNumber'
              variant='outlined'
              onChange={handleChangeForm}
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              id='yearly'
              options={monthlyData}
              disableCloseOnSelect={false}
              getOptionLabel={(option) => option}
              renderInput={(params) => <TextField {...params} label='monthly' />}
              size='medium'
              onChange={(event, value) => handleSelect('monthly', value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              id='monthly'
              options={yearlyData}
              disableCloseOnSelect={false}
              getOptionLabel={(option) => option}
              renderInput={(params) => <TextField {...params} label='yearly' />}
              size='medium'
              onChange={(event, value) => handleSelect('yearly', value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label='CVV'
              name='cvv'
              variant='outlined'
              onChange={handleChangeForm}
            />
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
          <Typography fontSize='18px' fontWeight='600' my='16px' color='blue.900'>
            Total Price: ${totalPrice}
          </Typography>
          <Button
            fullWidth
            size='large'
            variant='contained'
            color='success'
            sx={{ backgroundColor: 'blue.900', color: '#fff' }}
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
