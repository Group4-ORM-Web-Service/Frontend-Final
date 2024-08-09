import { Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAME } from '../../../constant/keyComponent';

const ProductList = ({ listItems }) => {
  const navigate = useNavigate();
  const handleItemClick = React.useCallback(
    (item) => {
      navigate(ROUTES_NAME.PRODUCT_DETAIL, { state: { item } });
    },
    [navigate],
  );

  return (
    <List className='align-items-list' sx={{ width: '100%' }}>
      {(listItems || [])?.map((item, index) => (
        <React.Fragment key={item?.id}>
          <ListItem alignItems='flex-start' style={{ cursor: 'pointer' }}>
            <ListItemAvatar onClick={() => handleItemClick(item)}>
              <img alt={item?.product_name} src={item?.imageUrl} width={280} />
            </ListItemAvatar>
            <ListItemText
              style={{
                padding: '12px',
              }}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='h5'
                    color='blue.900'
                  >
                    {item?.product_name}
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    sx={{ display: 'inline', fontWeight: 600 }}
                    component='span'
                    variant='body2'
                  >
                    Price:{' '}
                    <Typography
                      sx={{ display: 'inline', fontWeight: 500 }}
                      component='span'
                      color='blue.900'
                    >
                      {`$${item?.productVariants?.[0]?.product_price || 'xxx'}`}
                    </Typography>
                  </Typography>
                  <br />
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    <b>Size:</b> {item?.productVariants?.[0]?.size || 'xxx'}
                    <br />
                    <b>Color:</b> {item?.productVariants?.[0]?.color || 'xxx'}
                    <br />
                    <b>SKU:</b> {item?.productVariants?.[0]?.sku || 'xxx'}
                    <br />
                    <b>Barcode:</b> {item?.productVariants?.[0]?.barcode || 'xxx'}
                    <br />
                    <b>Description:</b> {item?.description || item?.description}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index < listItems.length - 1 && <Divider variant='fullWidth' component='li' />}
        </React.Fragment>
      ))}
    </List>
  );
};
export default ProductList;
