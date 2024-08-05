/* eslint-disable no-undef */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import React, { useState } from 'react';
import './productDetail.css';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';

const ProductDetailPage = () => {
  const [listItems] = useState([
    {
      avatar: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      primary: 'iPhone 19 pro max ultral',
      secondary: {
        name: 'iPhone 19 pro max ultral',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesignedThe largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesignedThe largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
  ]);

  return (
    <>
      <Box>
        <div className='align-items-list'>
          {listItems.map((item) => (
            <div key={item.secondary.name} className='item-container'>
              <div className='item-avatar'>
                <img alt={item.secondary.name} src={item.avatar} width={'100%'} />
              </div>
              <div className='item-content'>
                <h3 className='item-primary'>{item.primary}</h3>
                <div className='item-secondary'>
                  <p className='item-price'>{item.secondary.price}</p>
                  <p className='item-description'>{item.secondary.description}</p>
                  <p className='item-name'>
                    Model:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{item.secondary.name}</strong>
                  </p>
                  <p className='item-original-color'>
                    Color:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{item.secondary.originalPrice}</strong>
                  </p>
                  <p className='item-original-delivery'>
                    Delivery:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{item.secondary.originalPrice}</strong>
                  </p>
                  <p className='item-original-size'>
                    Size:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{item.secondary.originalPrice}</strong>
                  </p>
                  <p className='item-original-rating'>
                    Rating:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Rating name='hover-feedback' value={item.secondary.rating} />
                  </p>
                  <Box display='flex' alignItems='center' marginTop={2}>
                    <FormControl className='items-original-select-size'>
                      <InputLabel id='demo-simple-select-label'>Select Sizes</InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label='Select Sizes'
                      >
                        <MenuItem value={'S'}>S</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'LM'}>LM</MenuItem>
                        <MenuItem value={'LL'}>LL</MenuItem>
                      </Select>
                    </FormControl>

                    <RadioGroup
                      row
                      aria-labelledby='demo-row-radio-buttons-group-label'
                      name='row-radio-buttons-group'
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <FormControlLabel value='Red' control={<Radio />} label='Red' />
                      <FormControlLabel value='Blue' control={<Radio />} label='Blue' />
                      <FormControlLabel value='Black' control={<Radio />} label='Black' />
                      <FormControlLabel value='White' control={<Radio />} label='White' />
                    </RadioGroup>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Button
                      className='button-buying'
                      variant='contained'
                      color='warning'
                      sx={{
                        width: {
                          marginTop: '20px',
                          xs: '10%',
                        },
                        height: '7ch',
                      }}
                    >
                      Buy Now
                    </Button>
                    <Button
                      className='button-buying'
                      variant='contained'
                      sx={{
                        width: {
                          marginTop: '20px',
                          marginLeft: '20px',
                          xs: '10%',
                        },
                        height: '7ch',
                      }}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default ProductDetailPage;
