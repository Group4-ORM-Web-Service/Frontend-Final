import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextareaAutosize,
  Autocomplete,
} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const ProductForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState({
    category_id: '',
    product_name: '',
    description: '',
    imageUrl: '',
    variants: [
      {
        supplier_id: '',
        product_price: '',
        size: '',
        color: '',
        sku: '',
        barcode: '',
        imageUrl: '',
      },
    ],
  });

  const handleOpen = React.useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const handleChangeProduct = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    },
    [product],
  );

  const handleChangeVariant = React.useCallback(
    (index, e) => {
      const { name, value } = e.target;
      const newVariants = [...product.variants];
      newVariants[index] = { ...newVariants[index], [name]: value };
      setProduct({ ...product, variants: newVariants });
    },
    [product],
  );

  const handleAddVariant = React.useCallback(() => {
    setProduct({
      ...product,
      variants: [
        ...product.variants,
        {
          supplier_id: '',
          product_price: '',
          size: '',
          color: '',
          sku: '',
          barcode: '',
          imageUrl: '',
        },
      ],
    });
  }, [product]);

  const handleRemoveVariant = React.useCallback(
    (index) => {
      const newVariants = product.variants.filter((_, i) => i !== index);
      setProduct({ ...product, variants: newVariants });
    },
    [product],
  );

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log('Product Data:', product);
      handleOpen();
    },
    [handleOpen, product],
  );

  return (
    <div>
      <Box
        position='sticky'
        zIndex={444}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        width='100%'
        px='16px'
      >
        <Typography variant='h5' color='blue.900' fontWeight='600'>
          Products
        </Typography>
        <Button variant='contained' color='primary' mr='auto' onClick={handleOpen}>
          Add Product
        </Button>
      </Box>
      <Dialog open={openModal} onClose={handleOpen} maxWidth='md' fullWidth>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <Paper style={{ padding: 16 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  label='Category ID'
                  name='category_id'
                  value={product.category_id}
                  onChange={handleChangeProduct}
                  fullWidth
                  size='small'
                /> */}
                <Autocomplete
                  id='supplier'
                  options={[]}
                  disableCloseOnSelect={false}
                  getOptionLabel={(option) => `${option?.country || option}`}
                  renderInput={(params) => <TextField {...params} label='supplier' />}
                  size='small'
                  onChange={handleChangeProduct}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label='Product Name'
                  name='product_name'
                  value={product.product_name}
                  onChange={handleChangeProduct}
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  aria-label='minimum height'
                  minRows={3}
                  placeholder='Description'
                  name='description'
                  value={product.description}
                  onChange={handleChangeProduct}
                  style={{
                    width: '100%',
                    borderColor: 'lightGray',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Product Image URL'
                  name='imageUrl'
                  value={product.imageUrl}
                  onChange={handleChangeProduct}
                  fullWidth
                  size='small'
                />
              </Grid>

              {product.variants.map((variant, index) => (
                <Paper style={{ padding: 16, marginTop: 16 }} key={index}>
                  <Typography variant='h6' gutterBottom>
                    Variant {index + 1}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      {/* <TextField
                        label='Supplier ID'
                        name='supplier_id'
                        value={variant.supplier_id}
                        onChange={(e) => handleChangeVariant(index, e)}
                        fullWidth
                        size='small'
                      /> */}
                      <Autocomplete
                        id='supplier'
                        options={[]}
                        disableCloseOnSelect={false}
                        getOptionLabel={(option) => `${option?.country || option}`}
                        renderInput={(params) => <TextField {...params} label='supplier' />}
                        size='small'
                        onChange={(e) => handleChangeVariant(index, e)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='Product Price'
                        name='product_price'
                        type='number'
                        value={variant.product_price}
                        onChange={(e) => handleChangeVariant(index, e)}
                        fullWidth
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='Size'
                        name='size'
                        value={variant.size}
                        onChange={(e) => handleChangeVariant(index, e)}
                        fullWidth
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='Color'
                        name='color'
                        value={variant.color}
                        onChange={(e) => handleChangeVariant(index, e)}
                        fullWidth
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='SKU'
                        name='sku'
                        value={variant.sku}
                        onChange={(e) => handleChangeVariant(index, e)}
                        fullWidth
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='Barcode'
                        name='barcode'
                        value={variant.barcode}
                        onChange={(e) => handleChangeVariant(index, e)}
                        fullWidth
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label='Variant Image URL'
                        name='imageUrl'
                        value={variant.imageUrl}
                        onChange={(e) => handleChangeVariant(index, e)}
                        fullWidth
                        size='small'
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <IconButton onClick={() => handleRemoveVariant(index)}>
                      <RemoveCircleOutline />
                    </IconButton>
                  </Grid>
                </Paper>
              ))}

              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleAddVariant}
                  startIcon={<AddCircleOutline />}
                >
                  Add Variant
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant='contained' color='secondary'>
            Submit Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductForm;
