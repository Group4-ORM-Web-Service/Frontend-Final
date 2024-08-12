import React, { useCallback, useEffect, useState } from 'react';
import apiClient from '../../../api/axios';
import { Box } from '@mui/material';
import '../../../styles/admin.css';
import ProductForm from './AddProductForm';
import { orderBy } from 'lodash';

const ProductTable = () => {
  const [productData, setProductData] = useState([]);
  const fetchProducts = useCallback(() => {
    apiClient
      .get('/products?page=1&limit=500')
      .then((response) => {
        if (response?.data) {
          const products = orderBy(response?.data?.products, [(item) => item?.createdAt], ['desc']);
          setProductData([...products]);
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
    fetchProducts();
  }, [fetchProducts]);

  const removeFunction = (id) => {
    const confirmed = window.confirm('Do you want to remove?');
    if (confirmed) {
      apiClient
        .delete(`/products/remove-product-by/${id}`)
        .then((response) => {
          if (response?.data) {
            fetchProducts();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box width='100%' mt='32px' px='16px'>
      <ProductForm fetchProducts={fetchProducts} />
      <div className='product-table'>
        <div className='tables'>
          <table className='table  table-striped table-bordered table-hover table-checkable order-column dataTable'>
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Description</th>
                <th className='btn-action'>Action</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{product.product_name}</td>
                  <td>
                    <span className='name'>{product.description}</span>
                  </td>
                  <td className='btn-action'>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick={() => removeFunction(product?.product_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
};

export default ProductTable;
