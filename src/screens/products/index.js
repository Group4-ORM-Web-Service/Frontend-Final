/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import FilterByItems from './components/FilterByItems';
import ProductList from './components/ProductList';
import Sidebar from '../../layouts/sidebar';
import { Box } from '@mui/material';
import apiClient from '../../api/axios';

const ProductPage = () => {
  const [listCheckBoxItems, setListCheckBoxItems] = React.useState([
    {
      primary: 'Brunch this weekend?',
    },
    {
      primary: 'Summer BBQ',
    },
    {
      primary: 'Oui Oui',
    },
  ]);

  const [relatedString] = React.useState([
    {
      name: 'Electronis',
    },
    {
      name: 'Smartwatches',
    },
    {
      name: 'Oui Oui',
    },
  ]);

  const [listItems, setListItems] = React.useState([
    {
      imageUrl: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      primary: 'Phone',

      product_name: 'iPhone 19 pro max ultral',
      product_price: '$590.50',
      originalPrice: '$1,128.00',
      rating: 4.9,
      orders: 154,
      description:
        'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      primary: 'iPad',
      product_name: 'iPad pro m4',
      product_price: '$590.50',
      originalPrice: '$1,128.00',
      rating: 4.9,
      orders: 154,
      description:
        'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      primary: 'Phone',
      product_name: 'iPgone 19 pro max ultral',
      product_price: '$590.50',
      originalPrice: '$1,128.00',
      rating: 4.9,
      orders: 154,
      description:
        'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      primary: 'Canon Camera',
      product_name: 'Canon Camera EOS 2000',
      product_price: '$590.50',
      originalPrice: '$1,128.00',
      rating: 4.9,
      orders: 154,
      description:
        'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      primary: 'Phone',
      product_name: 'iPgone 19 pro max ultral',
      product_price: '$590.50',
      originalPrice: '$1,128.00',
      rating: 4.9,
      orders: 154,
      description:
        'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
    },
  ]);

  useEffect(() => {
    apiClient
      .get('/products?page=1&limit=500')
      .then((response) => {
        if (response?.data) {
          const products = response?.data?.products;
          setListItems([...products, ...listItems]);
          console.log('Get products successful:');
        } else {
          console.log('Unexpected response format:');
        }
      })
      .catch((error) => {
        console.log('Error:', error?.response?.data?.message || error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box bgcolor='transparent'>
      <Sidebar pageName='Products' />
      <div className='product-component' style={{ marginTop: 50 }}>
        <div className='container-left-cell'>
          <ProductList listItems={listItems} />
        </div>
        <div className='container-right-cell'>
          <FilterByItems listItems={listCheckBoxItems} />
        </div>
      </div>
    </Box>
  );
};

export default ProductPage;
