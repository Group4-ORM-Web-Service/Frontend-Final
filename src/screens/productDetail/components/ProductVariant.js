import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const ProductVariant = ({ option, onChange, selectedItem, ...props }) => {

  const handleColorSelect = React.useCallback(
    (item) => {
      onChange(item);
    },
    [onChange],
  );

  const isActive = React.useMemo(
    () => option?.variant_id === selectedItem?.variant_id,
    [option?.variant_id, selectedItem?.variant_id],
  );

  return (
    <Grid
      border={isActive ? 2 : 0.5}
      borderColor={isActive ? 'deepPurple.900' : 'deepPurple.400'}
      borderRadius={2}
      alignItems='center'
      mr='12px'
      mb='12px'
      {...props}
    >
      <Button
        variant='text'
        onClick={() => handleColorSelect(option)}
        sx={{ textTransform: 'none', p: '2px' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={option?.imageUrl}
            alt={option?.color}
            style={{ width: 'auto', height: props?.size || 100 }}
          />
          {props?.enablePrice && (
            <Typography variant='body2'>${option?.product_price ?? '--'}</Typography>
          )}
        </Box>
      </Button>
    </Grid>
  );
};

export default ProductVariant;
