import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import '../../../styles/product.css';
import ListItemButton from '@mui/material/ListItemButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FilterByItems = ({ listItems }) => {
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label='main mailbox folders'>
          <h3>Related iterms</h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Eletronics' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Smartwatches' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Accessories' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Computers' />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Divider />
      <nav aria-label='secondary mailbox folders'>
        <h3>Filter by</h3>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index}>
              <FormControlLabel
                control={<Checkbox name={`item-${index}`} color='primary' />}
                label={item.primary}
              />
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      <nav aria-label='secondary mailbox folders'>
        <h3>Gender</h3>
        <FormControl>
          <RadioGroup>
            <FormControlLabel
              style={{ marginLeft: '10px' }}
              value='condition'
              control={<Radio />}
              label='Condition'
            />
            <FormControlLabel
              style={{ marginLeft: '10px' }}
              value='quality'
              control={<Radio />}
              label='Quality'
            />
            <FormControlLabel
              style={{ marginLeft: '10px' }}
              value='recommend'
              control={<Radio />}
              label='Recommend'
            />
            <FormControlLabel
              style={{ marginLeft: '10px' }}
              value='random'
              control={<Radio />}
              label='Random'
            />
          </RadioGroup>
        </FormControl>
      </nav>

      <Divider />
      <nav aria-label='secondary mailbox folders'>
        <h3>Price</h3>
        <Box sx={{ width: { xs: '90%' }, ml: { xs: '10px' } }}>
          <Slider getAriaLabel={() => 'Minimum distance'} min={10} max={100} step={1} disableSwap />
        </Box>
      </nav>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label='MinPrice'
          id='outlined-start-adornment'
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='MaxPrice'
          id='outlined-start-adornment'
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
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
          Contained
        </Button>
      </Box>
    </>
  );
};

export default FilterByItems;
