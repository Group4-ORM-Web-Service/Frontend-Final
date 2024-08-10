/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, InputLabel, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Register.css';
import apiClient, { apiCountryClient } from '../../api/axios';
import SelectOptions from './components/SelectBox';
import { ROUTES_NAME, STORAGE_KEY } from '../../constant/keyComponent';
import { useAuth } from '../../context/AuthContext';
import { isEmpty } from 'lodash';

const RegisterForm = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    country: '',
    city: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES_NAME.HOME, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  /**
   * Handle change data input
   * @param {*} e
   */
  const handleChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      // Special case for phone number to format it
      if (name === 'phone') {
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
    },
    [formData],
  );

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
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      // if invalid email format
      if (!validateEmail(formData.email)) {
        setEmailError('Invalid email format!');
        return;
      }
      // if password not match
      if (isEmpty(formData.password) || formData.password !== formData.confirmPassword) {
        setPasswordError('Passwords do not match!');
        return;
      }
      apiClient
        .post('/register', { ...formData, address: `${formData?.country} - ${formData?.city}` })
        .then((response) => {
          if (response.data.message) {
            login(response.data?.token);
            localStorage.setItem(STORAGE_KEY.USER_DATA, JSON.stringify(response.data?.user));
            console.log('Register successful:');
            navigate(ROUTES_NAME.HOME, { replace: true });
            setEmailError('');
            setPasswordError('');
          } else {
            console.log('Unexpected response format:', response);
            setEmailError('Unexpected response format');
          }
        })
        .catch((error) => {
          console.log('Error:', error?.response?.data?.message || error.message);
          setEmailError(error?.response?.data?.message || 'An error occurred');
        });

      // You can add additional validation logic here
      console.log(formData);
    },
    [formData, login, navigate],
  );

  const handleCountryChange = React.useCallback(
    (event, value) => {
      setSelectedCountry(value);
      setFormData({
        ...formData,
        country: value?.country,
      });
    },
    [formData],
  );

  const handleCityChange = React.useCallback(
    (event, value) => {
      setFormData({
        ...formData,
        city: value,
      });
    },
    [formData],
  );

  const fetchCountriesWithCities = React.useCallback(async () => {
    try {
      const response = await apiCountryClient.get();
      if (response?.data) {
        setCountries(response?.data?.data);
      }
    } catch (error) {
      console.error('Error fetching countries and cities:', error);
    }
  }, []);

  React.useEffect(() => {
    fetchCountriesWithCities();
  }, [fetchCountriesWithCities]);

  if (isAuthenticated) {
    return <></>;
  }

  return (
    <div>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid>
          <Box component='form' onSubmit={handleSubmit} noValidate autoComplete='off'>
            <Paper className='paper' style={{ width: '470px', paddingTop: '16px' }}>
              <Typography variant='h4' color='blue.800' py='12px'>
                Create account
              </Typography>
              <InputLabel htmlFor='email' sx={{ mt: 1.5, color: '#666666', fontWeight: 550 }}>
                Username
              </InputLabel>
              <TextField
                id='username'
                name='username'
                type='text'
                label='username'
                value={formData.username}
                onChange={handleChange}
                size='small'
                fullWidth
                required
              />
              <Grid container justifyContent='space-between' my='12px'>
                <Grid item xs={6}>
                  <InputLabel id='country-select-label' sx={{ color: '#666666', fontWeight: 550 }}>
                    Country
                  </InputLabel>
                  <SelectOptions data={countries} onChange={handleCountryChange} xs={12} />
                </Grid>
                <Grid item xs={5.5}>
                  <InputLabel htmlFor='city' sx={{ color: '#666666', fontWeight: 550 }}>
                    City
                  </InputLabel>
                  <SelectOptions
                    data={selectedCountry?.cities || []}
                    onChange={handleCityChange}
                    xs={12}
                    label='city'
                  />
                </Grid>
              </Grid>

              <InputLabel htmlFor='phone' sx={{ mt: 1.5, color: '#666666', fontWeight: 550 }}>
                Phone number
              </InputLabel>
              <TextField
                id='phone'
                name='phone'
                value={formData.phone}
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

              <Grid container sx={{ my: '16px' }}>
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
