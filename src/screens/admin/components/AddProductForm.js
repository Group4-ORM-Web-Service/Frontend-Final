/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
import apiClient from '../../../api/axios';
import { orderBy } from 'lodash';

const defaultProduct = {
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
};
const ProductForm = ({ fetchProducts }) => {
  const [openModal, setOpenModal] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState(defaultProduct);

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

  const handleSelectCategory = React.useCallback(
    (event, value) => {
      const categoryId = value?.category_id;
      setProduct({ ...product, ['category_id']: categoryId });
    },
    [product],
  );

  const handleSelectSupplier = React.useCallback(
    (index, value) => {
      console.log;
      const supplierId = value?.supplier_id;
      const newVariants = [...product.variants];
      newVariants[index] = { ...newVariants[index], ['supplier_id']: supplierId };
      setProduct({ ...product, variants: newVariants });
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
      // console.log('product==>', JSON.stringify(product));
      const { category_id, product_name, description, imageUrl } = product;
      const { variants } = product;

      const productForm = {
        product: {
          category_id,
          product_name,
          description,
          imageUrl,
        },
        variants,
      };
      apiClient
        .post('/products/add-product', productForm)
        .then((response) => {
          if (response?.data) {
            fetchProducts();
            handleOpen();
            setProduct(defaultProduct);
          }
        })
        .catch((error) => {
          console.log('Error:', error?.response?.data?.message || error.message);
        });
      console.log('Product Data:', product);
    },
    [fetchProducts, handleOpen, product],
  );

  const fetchCategories = React.useCallback(() => {
    apiClient
      .get('/categories?page=1&limit=500')
      .then((response) => {
        if (response?.data) {
          const sortedCategories = orderBy(
            response.data?.categories,
            [(item) => item?.createdAt],
            ['desc'],
          );
          setCategories(sortedCategories);
        }
      })
      .catch((error) => {
        console.log('Error:', error?.response?.data?.message || error.message);
      });
  }, []);

  const fetchSuppliers = React.useCallback(() => {
    apiClient
      .get('/suppliers?page=1&limit=500')
      .then((response) => {
        if (response?.data) {
          const sortedSuppliers = orderBy(
            response.data?.suppliers,
            [(item) => item?.createdAt],
            ['desc'],
          );
          setSuppliers(sortedSuppliers);
        }
      })
      .catch((error) => {
        console.log('Error:', error?.response?.data?.message || error.message);
      });
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchSuppliers();
  }, [fetchCategories, fetchSuppliers]);

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
                <Autocomplete
                  id='category'
                  options={categories || []}
                  disableCloseOnSelect={false}
                  getOptionLabel={(option) => option?.category_name}
                  renderInput={(params) => <TextField {...params} label='category' />}
                  size='small'
                  onChange={handleSelectCategory}
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
                      <Autocomplete
                        id='supplier'
                        options={suppliers || []}
                        disableCloseOnSelect={false}
                        // value={product.variants[index].supplier_id}
                        getOptionLabel={(option) =>
                          `${option?.supplier_name}-${option?.city}-${option?.country}`
                        }
                        renderInput={(params) => <TextField {...params} label='supplier' />}
                        size='small'
                        onChange={(e, value) => handleSelectSupplier(index, value)}
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
