/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import FilterByItems from './components/FilterByItems';
import ProductList from './components/ProductList';
import Sidebar from '../../layouts/sidebar';
import { Box, Typography } from '@mui/material';
import apiClient from '../../api/axios';
import { useLocation } from 'react-router-dom';
import { orderBy } from 'lodash';

const ProductPage = () => {
  const location = useLocation();
  const { category } = location?.state || {};

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

  const [listItems, setListItems] = React.useState([]);

  const handleFilterCategory = React.useState((category) => {
    apiClient
      .get(`/products/category_id/${category}`)
      .then((response) => {
        if (response?.data) {
          const products = response?.data?.result?.products;
          setListItems([...products]);
          console.log('Get products successful:', products?.length);
        } else {
          console.log('Unexpected response format:');
        }
      })
      .catch((error) => {
        console.log('Error:', error?.response?.data?.message || error.message);
      });
  }, []);

  useEffect(() => {
    const catId = category?.category_id;
    const endpoint = catId ? `/products/category_id/${catId}` : '/products?page=1&limit=500';
    apiClient
      .get(endpoint)
      .then((response) => {
        if (response?.data) {
          const products = catId ? response?.data?.result?.products : response?.data?.products;
          const sortedProducts = orderBy(products, [(item) => item?.createdAt], ['desc']);
          setListItems([...sortedProducts]);
          console.log('Get products successful:', products?.length);
        } else {
          console.log('Unexpected response format:');
        }
      })
      .catch((error) => {
        console.log('Error:', error?.response?.data?.message || error.message);
      });
  }, [category]);

  return (
    <Box bgcolor='transparent'>
      <Sidebar pageName='Products' />
      <div className='product-component' style={{ marginTop: 50 }}>
        <div className='container-left-cell'>
          {listItems?.length > 0 ? (
            <ProductList listItems={listItems} />
          ) : (
            <Typography w='100%' fontSize='24px' my='100px' mx='50%'>
              No products available
            </Typography>
          )}
        </div>
        <div className='container-right-cell'>
          <FilterByItems listItems={listCheckBoxItems} />
        </div>
      </div>
    </Box>
  );
};

export default ProductPage;
