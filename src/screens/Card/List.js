import React, { useState } from 'react';
import {
  Drawer, Grid, Box, IconButton, Typography, Button,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import ImageTest from "../../images/iphone.png";

function CardList() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantities, setQuantities] = useState(new Array(10).fill(1));
  const pricePerItem = 10;
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  const handleRemove = (index) => {
    alert(`Remove ${items[index]}`);
  };

  const handleEmptyCard = () => {
    alert("Empty Cart");
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Sidebar</Button>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box width={300} display="flex" flexDirection="column" height="100%">
          <Box flexGrow={1} overflow="auto" p={0.5}>
            <Grid container justifyContent="space-between" paddingTop={1} paddingBottom={1}>
              <Grid item xs={6}>
                <Typography variant="h6" fontSize={15}>
                  Your Cart - <Box component="span" color="text.secondary">{items.length} Items</Box>
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Box onClick={handleEmptyCard} component="div" fontSize={13} color="primary.main" sx={{ cursor: 'pointer' }}>
                  Empty cart
                </Box>
              </Grid>
            </Grid>

            {items.map((item, index) => (
              <Grid key={index} container alignItems="center" paddingTop={1} paddingBottom={1.5} borderTop={1} borderBottom={1} borderColor="#f1f1f1">
                <Grid item xs={4}>
                  <Box
                    component="img"
                    src={ImageTest}
                    alt="Product"
                    sx={{ width: '100%', borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography fontSize={13} variant="body1" gutterBottom>
                      {item}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <IconButton onClick={() => handleDecrease(index)} disabled={quantities[index] <= 1}>
                        <Remove sx={{ fontSize: 16 }} />
                      </IconButton>
                      <Typography fontSize={13} variant="h6" paddingLeft={1} paddingRight={1}>
                        {quantities[index]}
                      </Typography>
                      <IconButton onClick={() => handleIncrease(index)}>
                        <Add sx={{ fontSize: 16 }} />
                      </IconButton>
                      <IconButton onClick={() => handleRemove(index)}>
                        <Delete sx={{ fontSize: 16, color: '#FF0000' }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Typography fontSize={15} variant="h6" align="center">
                    ${quantities[index] * pricePerItem}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          <Box p={1} borderTop={1} borderColor="#f1f1f1">
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">
                  Total: ${quantities.reduce((total, qty) => total + qty * pricePerItem, 0)}
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default CardList;