/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../../layouts/sidebar';
import '../../styles/admin.css';
import CateogryTable from './components/categoryTable';
import ProductTable from './components/productTable';
import ProductForm from './components/AddProductForm';
import { Box } from '@mui/material';

const AdminPage = () => {
  return (
    <Box bgcolor='grey.50' minHeight={window.innerHeight - 32}>
      <Sidebar pageName='Admin' />
      <Box className='product-list' style={{ paddingLeft: 16, paddingRight: 16, marginTop: 50 }}>
        <ProductForm />
        <ProductTable />
        {/* <CateogryTable /> */}
      </Box>
    </Box>
  );
};

export default AdminPage;
