/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import Headers from '../navbar/header';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Card, CardContent, CardMedia, Typography } from "@mui/material";
import './MainPage.css'
import picture from '../../images/camreaa.webp';

const data = [
    {
      picture: picture,
      title: 'Card 1',
      description: ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.'
    },
    {
      picture: picture,
      title: 'Card 2',
      description: ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.'
    },
    {
      picture: picture,
      title: 'Card 3',
      description: ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.'
    },
    {
      picture: picture,
      title: 'Card 4',
      description: ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.'
    },
    {
      picture: picture,
      title: 'Card 5',
      description: ' This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.This is a description of the car.'
    },
    {
      picture: picture,
      title: 'Card 6',
      description: 'This is the description for Card 6.'
    }
  ];
const MainPage = () => {
    return (
        <div>
            <div className="header-container">
                <Headers />
            </div>
            <div className="title-container">
                <h2>Products </h2>
            </div>
            <div className="main-container">
                
        <div className="card-container">
  <div className="card-grid">
    {data.map((item, index) => (
      <Card key={index} className="card-item">
        <CardMedia
          component="img"
          height="140"
          image={item.picture}
          alt={item.title}
          className="container-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
                </div>
        </div>
    );
}

export default MainPage;