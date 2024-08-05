import { Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ listItems }) => {
  const navigate = useNavigate();
  const handleItemClick = React.useCallback(
    (item) => {
      // navigate(`/products-detail/${item.primary}`); // with name details itmes links
      navigate(`/products-detail`, { state: { item } });
    },
    [navigate],
  );

  return (
    <List className='align-items-list' sx={{ width: '100%' }}>
      {listItems.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem
            alignItems='flex-start'
            onClick={() => handleItemClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <ListItemAvatar>
              <img alt={item.secondary.name} src={item.avatar} width={280} />
            </ListItemAvatar>
            <ListItemText
              primary={item.primary}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    {item.secondary.name}
                    <br />
                    {item.secondary.price}
                    <br />
                    {item.secondary.originalPrice}
                    <br />
                    {item.secondary.rating}
                    <br />
                    {item.secondary.description}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index < listItems.length - 1 && <Divider variant='inset' component='li' />}
        </React.Fragment>
      ))}
    </List>
  );
};
export default ProductList;
