import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import '../../../styles/admin.css';


const ProductTable = () => {
  return (
    <>
        <div className='product-table'>
          <h2>Product</h2>
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
                <tr>
                  <td>1</td>
                  <td>Desktop</td>
                  <td>
                    <span className='name'>Titanuim streak wedding band</span>
                  </td>
                  <td className='btn-action'>
                    <button type='button' className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Desktop</td>
                  <td>
                    <span className='name'>Titanuim streak wedding band</span>
                  </td>
                  <td className='btn-action'>
                    <button type='button' className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Desktop</td>
                  <td>
                    <span className='name'>Titanuim streak wedding band</span>
                  </td>
                  <td className='btn-action'>
                    <button type='button' className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant='contained'
              sx={{
                m: 2,
                width: {
                  xs: '100%',
                },
                height: '7ch',
              }}
            >
              ADD NEW PRODUCT
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant='contained'
              sx={{
                m: 2,
                width: {
                  xs: '100%',
                },
                height: '7ch',
              }}
            >
              DELETE SELECTED PRODUCT
            </Button>
          </Box>
        </div>
    </>
  );
};

export default ProductTable;
