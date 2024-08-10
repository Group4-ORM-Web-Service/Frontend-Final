
import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import '../../../styles/admin.css';

const CateogryTable = () => {
    return(
      <>
        <div className='category-table'>
            <h2>Product Category</h2>
          <div className='tables'>
            <table className='table  table-striped table-bordered table-hover table-checkable order-column dataTable'>
              <thead>
                <tr>
                  <th>Product Category</th>
                  <th className='btn-action'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123434</td>
                  <td className='btn-action'>
                    <button type='button' className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>123434</td>
                  <td className='btn-action'>
                    <button type='button' className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>123434</td>
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
              Contained
            </Button>
          </Box>
        </div>
      </>
    )
}

export default CateogryTable;