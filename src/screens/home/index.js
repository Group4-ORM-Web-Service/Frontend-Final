/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, ButtonBase, Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../../styles/home.css';
import picture from '../../images/camreaa.webp';
import Sidebar from '../../layouts/sidebar';
import Headers from './components/header';
import apiClient from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAME } from '../../constant/keyComponent';
import { orderBy } from 'lodash';

const data = [
  {
    picture: picture,
    title: 'Card 1',
    description:
      ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.',
  },
  {
    picture: picture,
    title: 'Card 2',
    description:
      ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.',
  },
  {
    picture: picture,
    title: 'Card 3',
    description:
      ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.',
  },
  {
    picture: picture,
    title: 'Card 4',
    description:
      ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.',
  },
  {
    picture: picture,
    title: 'Card 5',
    description:
      ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.',
  },
  {
    picture: picture,
    title: 'Card 6',
    description: 'This is the description for Card 6.',
  },
];
const HomePage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const handlePressCategory = React.useCallback(
    (category) => {
      navigate(ROUTES_NAME.PRODUCTS, { state: { category } });
    },
    [navigate],
  );

  useEffect(() => {
    apiClient
      .get('/categories?page=1&limit=500')
      .then((response) => {
        if (response?.data) {
          const categories = orderBy(
            response.data?.categories,
            [(item) => item?.createdAt],
            ['desc'],
          );
          setCategories(categories);
        }
      })
      .catch((error) => {
        console.log('Error:', error?.response?.data?.message || error.message);
      });
  }, []);

  return (
    <Box bgcolor='grey.50'>
      <Sidebar pageName='Home' />
      <Headers />
      <Typography color='blue.900' fontSize='32px' ml='100px' mt='32px' fontWeight='600'>
        Categories
      </Typography>
      <div className='main-container'>
        <div className='card-container'>
          <div className='card-grid'>
            {(categories || [])?.map((item) => (
              <Card
                key={item?.category_id}
                className='card-item'
                onClick={() => handlePressCategory(item)}
              >
                <CardMedia
                  component='img'
                  height='300'
                  image={item?.imageUrl}
                  alt={item?.category_name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' color="blue.900" component='div'>
                    {item?.category_name}
                  </Typography>
                  <Typography fontSize="16px" color='grey.800'>
                    {item?.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
