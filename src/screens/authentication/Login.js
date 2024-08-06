/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../../styles/Login.css';
import apiClient from '../../api/axios';
import { ROUTES_NAME, STORAGE_KEY } from '../../constant/keyComponent';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Regular expression for basic email validation
   * @param {*} email
   * @returns message
   */
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  /**
   * Handle login submit form
   */
  const handleLogin = React.useCallback(async () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email format!');
    } else {
      apiClient
        .post('/login', { email, password })
        .then((response) => {
          if (response.data.message) {
            login(response.data?.token);
            localStorage.setItem(STORAGE_KEY.USER_DATA, JSON.stringify(response.data?.user));
            console.log('Login successful:');
            navigate(ROUTES_NAME.HOME, { replace: true });
            setEmailError('');
          } else {
            console.log('Unexpected response format:', response);
            setEmailError('Unexpected response format');
          }
        })
        .catch((error) => {
          console.log('Error:', error?.response?.data?.message || error.message);
          setEmailError(error?.response?.data?.message || 'An error occurred');
        });
    }
  }, [email, login, navigate, password]);

  /**
   * Show/Hide password
   * @returns html
   */
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  /**
   * Prevent mouse down password
   * @param {*} event
   */
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /**
   * Remeber user login
   * @param {*} event
   */
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES_NAME.HOME, { replace: true });
    }
  }, [isAuthenticated, navigate]);

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
          <Paper className='paper' style={{ width: '400px' }}>
            <h1 className='text-login'>Sign in</h1>

            {/* email */}
            <InputLabel htmlFor='email-input' sx={{ color: '#666666', fontWeight: 550 }}>
              E-mail*
            </InputLabel>
            <TextField
              id='email-input'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size='small'
              fullWidth
              required
            />
            {emailError && <span style={{ color: 'red' }}>{emailError}</span>}

            {/* password */}
            <Grid sx={{ mt: '1rem' }} container justifyContent='space-between'>
              <Grid item>
                {/* left side */}
                <InputLabel sx={{ color: '#666666', fontWeight: 600 }} htmlFor='password-input'>
                  Password
                </InputLabel>
              </Grid>
              <Grid item>
                {/* the right */}
                <Link
                  to='#'
                  underline='hover'
                  style={{ fontSize: '14px', fontWeight: 500, color: 'blue' }}
                >
                  Forgot Password
                </Link>
              </Grid>
            </Grid>
            <OutlinedInput
              fullWidth
              size='small'
              id='password-input'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            {/* remember me */}
            <FormControlLabel
              control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
              label='Remember Me'
              sx={{ color: '#666666', fontWeight: 600 }}
            />

            {/* btn submit */}
            <Button
              sx={{ mt: '1rem', fontSize: '17px', textTransform: 'none', fontWeight: 600 }}
              variant='contained'
              color='primary'
              fullWidth
              onClick={handleLogin}
            >
              Sing in
            </Button>

            {/* text message remember */}
            <div
              style={{
                marginTop: '15px',
                color: '#666666',
                textAlign: 'center',
                fontSize: '17px',
                fontWeight: 500,
              }}
            >
              Do not have an account?
              <Link to='/register' underline='hover' style={{ marginLeft: '5px', color: 'blue' }}>
                Sing Up
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
