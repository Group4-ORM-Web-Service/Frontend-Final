/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Box,  Checkbox, FormControlLabel } from '@mui/material';
import './productComponent.css';
import ListItemButton from '@mui/material/ListItemButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const ProductComponent = () => {
  const [listCheckBoxItems, setListCheckBoxItems] = React.useState([
    {
      primary: 'Brunch this weekend?',
    },
    {
      primary: 'Summer BBQ',
    },
    {
      primary: 'Oui Oui',
    },
  ]);

  const [relatedString] = React.useState([
    {
      name: 'Electronis',
    },
    {
      name: 'Smartwatches',
    },
    {
      name: 'Oui Oui',
    },
  ]);

  const [listItems] = useState([
      {
        avatar: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        primary: 'Phone',
        secondary: {
          name: 'iPhone 19 pro max ultral',
          price: '$590.50',
          originalPrice: '$1,128.00',
          rating: 4.9,
          orders: 154,
          description:
            'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
        },
      },
    {
      avatar: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      primary: 'iPad',
      secondary: {
        name: 'iPad pro m4',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
    {
        avatar: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        primary: 'Phone',
        secondary: {
          name: 'iPgone 19 pro max ultral',
          price: '$590.50',
          originalPrice: '$1,128.00',
          rating: 4.9,
          orders: 154,
          description:
            'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
        },
      },
    {
      avatar: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      primary: 'Canon Camera',
      secondary: {
        name: 'Canon Camera EOS 2000',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
    {
      avatar: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      primary: 'Phone',
      secondary: {
        name: 'iPgone 19 pro max ultral',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
  ]);

  return (
    <div className="product-component">
      <div className="container-left-cell">
        <AlignItemsList listItems={listItems} />
      </div>
      <div className="container-right-cell">
        <FilterByItems listItems={listCheckBoxItems} />
      </div>
    </div>
  );
};

export default ProductComponent;

function AlignItemsList({ listItems }) {

  const navigate = useNavigate();
  const handleItemClick = (item) => {
    // navigate(`/products-detail/${item.primary}`); // with name details itmes links
    navigate(`/products-detail`, {state: {item}})

  };
  return (
    <List className="align-items-list" sx={{ width: '100%' }}>
      {listItems.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start" onClick={() => handleItemClick(item)} style={{ cursor: 'pointer'}}>
            <ListItemAvatar>
              <img alt={item.secondary.name} src={item.avatar} width={280} />
            </ListItemAvatar>
            <ListItemText
              primary={item.primary}
             
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
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
          {index < listItems.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}

function FilterByItems({ listItems }) {

    return (  
      <>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
           <nav aria-label="main mailbox folders">
           <h3>Related iterms</h3>
             <List>
              <ListItem disablePadding>
                 <ListItemButton>
                  <ListItemText primary="Eletronics" />
                 </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                 <ListItemButton>
                   <ListItemText primary="Smartwatches" />
                </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
                 <ListItemButton>
                  <ListItemText primary="Accessories" />
                 </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                 <ListItemButton>
                  <ListItemText primary="Computers" />
                 </ListItemButton>
               </ListItem>
             </List>
           </nav>
         </Box>
           <Divider />
      <nav aria-label="secondary mailbox folders">
         <h3>Filter by</h3>
         <List>
           {listItems.map((item, index) => (
            <ListItem key={index}>
              <FormControlLabel
                control={<Checkbox name={`item-${index}`} color="primary" />}
                label={item.primary}
              />
            </ListItem>
          ))}
        </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
        <h3>Gender</h3>
    <FormControl>
      <RadioGroup>
        <FormControlLabel  style={{ marginLeft: '10px' }} value="condition" control={<Radio />} label="Condition" />
        <FormControlLabel  style={{ marginLeft: '10px' }} value="quality" control={<Radio />} label="Quality" />
        <FormControlLabel  style={{ marginLeft: '10px' }} value="recommend" control={<Radio />} label="Recommend" />
        <FormControlLabel  style={{ marginLeft: '10px' }} value="random" control={<Radio />} label="Random" />
      </RadioGroup>
    </FormControl>
    </nav>
    
    <Divider />
      <nav aria-label="secondary mailbox folders">
        <h3>Price</h3>
        <Box sx={{ width: 
            { xs: '90%'},
            ml: { xs: '10px' }
             }}>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            min={10}
            max={100}
            step={1}
            disableSwap
          />
        </Box>
      </nav>
      <Box sx={{ display: 'flex', alignItems: "center" }}>
        <TextField
          label="MinPrice"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="MaxPrice"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
    </Box>
    <Box sx={{ display: 'flex', alignItems: "center" }}>
  <Button
    variant="contained"
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
  </>
    );

  }


