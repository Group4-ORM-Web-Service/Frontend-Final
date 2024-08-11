/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Drawer, Grid, Box, IconButton, Typography, Button, Alert } from '@mui/material';
import { Add, Remove, Delete, Close } from '@mui/icons-material';
import ImageTest from '../../images/iphone.png';
import { useAppContext } from '../../context/AppContext';
import { clearItems, removeItem, setOpenShopCard, updateItem } from '../../store/actions/AppAction';
import OrderForm from './FormInput';
import apiClient from '../../api/axios';
import { STORAGE_KEY } from '../../constant/keyComponent';
import { calculatePrice } from '../../constant/publicFunctions';

const ShopCardComponent = () => {
  const { appState, dispatchApp } = useAppContext();
  const [quantities, setQuantities] = useState(new Array(10).fill(1));
  const [isNext, setIsNext] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const listItems = React.useMemo(() => appState?.items, [appState?.items]);
  const totalPrice = React.useMemo(() => {
    const items = appState?.items || [];
    const total = items.reduce((acc, item) => acc + item?.total_price, 0);
    return total.toFixed(2);
  }, [appState?.items]);

  const user = React.useMemo(() => {
    const userData = JSON.parse(localStorage.getItem(STORAGE_KEY.USER_DATA));
    return userData;
  }, []);

  const handleIncrease = React.useCallback(
    (item, index) => {
      const newQuantities = [...quantities];
      newQuantities[index] += 1;
      setQuantities(newQuantities);
      dispatchApp(
        updateItem({
          ...item,
          quantities: newQuantities[index],
          total_price: calculatePrice(newQuantities[index], item?.product_price),
        }),
      );
    },
    [dispatchApp, quantities],
  );

  const handleDecrease = (item, index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      dispatchApp(
        updateItem({
          ...item,
          quantities: newQuantities[index],
          total_price: calculatePrice(newQuantities[index], item?.product_price),
        }),
      );
    }
  };

  const handleRemove = React.useCallback(
    (item) => {
      dispatchApp(removeItem(item));
    },
    [dispatchApp],
  );

  const handleEmptyCard = React.useCallback(() => {
    alert('Empty Cart');
    dispatchApp(clearItems());
  }, [dispatchApp]);

  const handleCloseShopCard = React.useCallback(() => {
    dispatchApp(setOpenShopCard(!appState?.isOpenCard));
  }, [appState?.isOpenCard, dispatchApp]);

  const handleNext = React.useCallback((status = true) => {
    setIsNext(status);
  }, []);

  const onSuccess = React.useCallback(() => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
  }, []);

  const handleSubmit = React.useCallback(() => {
    const orderData = {
      order: {
        customer_id: user?.customer?.customer_id,
      },
      orderDetails: listItems?.map((item) => ({
        product_id: item?.product_id,
        variant_id: item?.variant_id,
        quantity: item?.quantities,
        product_price: item?.total_price,
      })),
      totalPrice,
    };
    if (user?.customer) {
      apiClient
        .post('/orders/add-order', orderData)
        .then((response) => {
          if (response?.data) {
            console.log('Order successful:');
            onSuccess();
            dispatchApp(clearItems());
            setIsNext(false);
          } else {
            console.log('Unexpected response format:');
          }
        })
        .catch((error) => {
          console.log('Error:', error?.response?.data?.message || error.message);
        });
    }
  }, [dispatchApp, listItems, onSuccess, totalPrice, user?.customer]);

  return (
    <Drawer anchor='right' bg='grey.50' open={appState?.isOpenCard} onClose={handleCloseShopCard}>
      {isSuccess && (
        <Alert
          severity='success'
          style={{
            position: 'absolute',
            zIndex: 9999,
            top: '16px',
            width: '100%',
          }}
        >
          Successfully submitted
        </Alert>
      )}

      {!isNext ? (
        <Box width={450} display='flex' flexDirection='column' height='100%'>
          <Box flexGrow={1} overflow='auto'>
            <Grid
              container
              justifyContent='space-between'
              paddingTop={1}
              paddingBottom={1}
              position='sticky'
              top={0}
              zIndex={9990}
              bgcolor='grey.50'
              px='12px'
              boxShadow={2}
              alignItems='center'
            >
              <Grid item xs={6} display='flex' direction='row' alignItems='center'>
                <IconButton onClick={handleCloseShopCard}>
                  <Close />
                </IconButton>
                <Typography variant='h6' fontSize={15} mx='12px'>
                  Your Cart -{' '}
                  <Box component='span' color='text.secondary'>
                    {(listItems || []).length} Items
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign='right'>
                <Box
                  onClick={handleEmptyCard}
                  component='div'
                  fontSize={13}
                  color='primary.main'
                  sx={{ cursor: 'pointer' }}
                >
                  Empty cart
                </Box>
              </Grid>
            </Grid>

            {(listItems || []).map((item, index) => (
              <Grid
                key={index?.variant_id}
                container
                alignItems='center'
                paddingTop={1}
                paddingBottom={1.5}
                borderTop={1}
                borderBottom={1}
                borderColor='#f1f1f1'
              >
                <Grid item xs={4}>
                  <Box
                    component='img'
                    src={item?.imageUrl || ImageTest}
                    alt='Product'
                    sx={{ width: '100%', borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography fontSize={13} variant='body1' gutterBottom>
                      {item?.product_name}
                    </Typography>
                    <Box display='flex' alignItems='center'>
                      <IconButton
                        onClick={() => handleDecrease(item, index)}
                        disabled={quantities[index] <= 1}
                      >
                        <Remove sx={{ fontSize: 16 }} />
                      </IconButton>
                      <Typography fontSize={13} variant='h6' paddingLeft={1} paddingRight={1}>
                        {quantities[index]}
                      </Typography>
                      <IconButton onClick={() => handleIncrease(item, index)}>
                        <Add sx={{ fontSize: 16 }} />
                      </IconButton>
                      <IconButton onClick={() => handleRemove(item)}>
                        <Delete sx={{ fontSize: 16, color: 'red.900' }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Typography fontSize={15} variant='h6' align='center' color='blue.900'>
                    ${item?.total_price}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          <Box
            p={1}
            borderTop={1}
            borderColor='#f1f1f1'
            height={160}
            boxShadow={6}
            bgcolor='grey.50'
          >
            <Grid container justifyContent='space-between' alignItems='center' mt='16px'>
              <Grid item display='flex'>
                <Typography variant='h6'>Total:</Typography>
                <Typography variant='h6' mx='12px' fontWeight={600} color='blue.900'>
                  ${totalPrice}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: '90%',
                  mx: '16px',
                  alignItems: 'center',
                  alignSelf: 'center',
                  mt: '16px',
                }}
              >
                <Button
                  fullWidth
                  size='large'
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                  disabled={listItems?.length === 0}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <OrderForm
          totalPrice={totalPrice}
          onPrevious={handleNext}
          onClose={handleCloseShopCard}
          onSubmit={handleSubmit}
        />
      )}
    </Drawer>
  );
};

export default ShopCardComponent;
