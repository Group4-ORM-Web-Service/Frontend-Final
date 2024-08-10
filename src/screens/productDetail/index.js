/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Chip,
  Stack,
  ButtonBase,
  Box,
} from '@mui/material';
import { ShoppingCart, LocalOffer } from '@mui/icons-material';
import Sidebar from '../../layouts/sidebar';
import ProductVariant from './components/ProductVariant';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { addItemToCard } from '../../store/actions/AppAction';

const ProductDetailPage = () => {
  const location = useLocation();
  const { item } = location?.state || {};
  const { appState, dispatchApp } = useAppContext();

  const [product, setProduct] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleChangeImage = React.useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const addToCard = React.useCallback(() => {
    dispatchApp(addItemToCard({ ...selectedItem, product_name: product?.product_name }));
  }, [dispatchApp, product?.product_name, selectedItem]);

  useEffect(() => {
    if (item) {
      setProduct(item);
      setSelectedItem(item?.productVariants?.[0]);
    }
  }, [item]);

  return (
    <>
      <Sidebar pageName='ProductDetail' />
      <Grid container spacing={4} py='32px' px='32px' bgcolor='grey.50' height={window.innerHeight}>
        <Grid item xs={12} sm={6} bgcolor='grey.50'>
          <Box bgcolor='grey.50'>
            <LocalOffer color='info' />
            <CardMedia
              component='img'
              height='500'
              image={selectedItem?.imageUrl}
              sizes={500}
              alt={product?.product_name}
              style={{
                backgroundColor: '#fafafa',
                boxSizing: 'border-box',
              }}
            />
            <Grid container spacing={2} sx={{ mt: 4, ml: '8px' }}>
              {(product?.productVariants || [])?.map((variant, index) => (
                <ProductVariant
                  key={index}
                  option={variant}
                  onChange={handleChangeImage}
                  selectedItem={selectedItem}
                />
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography variant='h4' gutterBottom>
              {product?.product_name}
            </Typography>
            <Rating value={selectedItem?.ratings || 4.4} readOnly />
            <Typography variant='h5' color='primary' gutterBottom>
              ${selectedItem?.product_price?.toFixed(2)}
            </Typography>
            <Typography variant='body2' color='grey.900' gutterBottom>
              <b>Size:</b> {selectedItem?.size}
            </Typography>
            <Typography variant='body2' color='grey.900' gutterBottom>
              <b>Color:</b> {selectedItem?.color}
            </Typography>
            <Typography variant='body2' color='grey.900' gutterBottom>
              <b>SKU:</b> {selectedItem?.sku}
            </Typography>
            <Typography variant='body2' color='grey.900' gutterBottom>
              <b>Barcode:</b> {selectedItem?.barcode}
            </Typography>
            <Typography variant='body2' color='grey.900' gutterBottom my='16px'>
              <b>Description:</b> {product?.description}
            </Typography>
            <Box marginY='24px' sx={{ mt: 2 }}>
              <Typography variant='subtitle1'>Variants: </Typography>
              <Grid container sx={{ mt: 1 }}>
                {(product?.productVariants || [])?.map((variant, index) => (
                  <ProductVariant
                    key={index}
                    option={variant}
                    size={50}
                    enablePrice={true}
                    selectedItem={selectedItem}
                    onChange={handleChangeImage}
                  />
                ))}
              </Grid>
            </Box>
            <Button
              variant='contained'
              color='primary'
              startIcon={<ShoppingCart />}
              onClick={addToCard}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetailPage;
