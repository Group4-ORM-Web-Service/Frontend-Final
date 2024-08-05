import React, { useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Button,
  InputLabel,
  Box,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles/Register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userType: '',
    country: '',
    city: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  /**
   * Handle change data input
   * @param {*} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special case for phone number to format it
    if (name === 'phoneNumber') {
      let input = value.replace(/\D/g, ''); // Remove non-numeric characters
      if (input.length > 10) {
        input = input.substring(0, 10); // Limit input to 10 characters
      }
      const formattedPhoneNumber = input.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      setFormData({
        ...formData,
        [name]: formattedPhoneNumber,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  /**
   * Validate email format
   * @param {*} email
   * @returns
   */
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  /**
   * Handle submit form
   * @param {*} e
   * @returns
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // if invalid email format
    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email format!');
      return;
    } else {
      setEmailError('');
    }

    // if password not match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match!');
      return;
    } else {
      setPasswordError('');
    }

    // You can add additional validation logic here
    console.log(formData);
  };

  return (
    <div>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '100vh', backgroundColor: 'transparent' }}
      >
        <Grid>
          <Box component='form' onSubmit={handleSubmit} noValidate autoComplete='off'>
            <Paper className='paper' style={{ width: '470px' }}>
              <h1>Create account</h1>

              <Grid sx={{ mt: '1rem' }} container justifyContent='space-between'>
                <Grid item xs={6}>
                  <InputLabel htmlFor='firstName' sx={{ color: '#666666', fontWeight: 550 }}>
                    First Name
                  </InputLabel>
                  <TextField
                    id='firstName'
                    name='firstName'
                    size='small'
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor='lastName' sx={{ color: '#666666', fontWeight: 550 }}>
                    Last Name
                  </InputLabel>
                  <TextField
                    id='lastName'
                    name='lastName'
                    size='small'
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <RadioGroup
                row
                aria-labelledby='userType-label'
                name='userType'
                sx={{ mt: 0.5 }}
                value={formData.userType}
                onChange={handleChange}
              >
                <FormControlLabel value='buyer' control={<Radio />} label='Buyer' />
                <FormControlLabel value='seller' control={<Radio />} label='Seller' />
                <FormControlLabel value='both' control={<Radio />} label='Both' />
              </RadioGroup>

              <Grid container justifyContent='space-between'>
                <Grid item xs={6}>
                  <InputLabel id='country-select-label' sx={{ color: '#666666', fontWeight: 550 }}>
                    Country
                  </InputLabel>
                  <FormControl sx={{ minWidth: 220 }}>
                    <Select
                      labelId='country-select-label'
                      id='country'
                      name='country'
                      size='small'
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <MenuItem value='option1'>Option 1</MenuItem>
                      <MenuItem value='option2'>Option 2</MenuItem>
                      <MenuItem value='option3'>Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor='city' sx={{ color: '#666666', fontWeight: 550 }}>
                    City
                  </InputLabel>
                  <TextField
                    id='city'
                    name='city'
                    size='small'
                    fullWidth
                    required
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <InputLabel htmlFor='phoneNumber' sx={{ mt: 1.5, color: '#666666', fontWeight: 550 }}>
                Phone number
              </InputLabel>
              <TextField
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                size='small'
                fullWidth
                placeholder='(123) 456-7890'
              />

              <InputLabel htmlFor='email' sx={{ mt: 1.5, color: '#666666', fontWeight: 550 }}>
                E-mail
              </InputLabel>
              <TextField
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                size='small'
                fullWidth
                required
              />
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}

              <Grid container justifyContent='space-between' sx={{ mt: 1.5 }}>
                <Grid item xs={6}>
                  <InputLabel htmlFor='password' sx={{ color: '#666666', fontWeight: 550 }}>
                    Password
                  </InputLabel>
                  <TextField
                    type='password'
                    name='password'
                    size='small'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor='confirmPassword' sx={{ color: '#666666', fontWeight: 550 }}>
                    Confirm Password
                  </InputLabel>
                  <TextField
                    type='password'
                    name='confirmPassword'
                    size='small'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </Grid>
                {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
              </Grid>

              <Grid container sx={{ mt: '1rem' }}>
                <Grid item>
                  <Button
                    type='submit'
                    sx={{ fontSize: '14px', textTransform: 'none', fontWeight: 600 }}
                    variant='contained'
                    color='primary'
                  >
                    Register Now
                  </Button>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox />}
                    label='I agree with Term and Conditions'
                    sx={{ color: '#666666', fontWeight: 600, ml: 1 }}
                  />
                </Grid>
              </Grid>

              <hr />
              <div
                style={{
                  marginTop: '15px',
                  color: '#666666',
                  textAlign: 'center',
                  fontSize: '17px',
                  fontWeight: 500,
                }}
              >
                Already have an account?
                <Link to='/' underline='hover' style={{ marginLeft: '5px', color: 'blue' }}>
                  Sign in
                </Link>
              </div>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterForm;
