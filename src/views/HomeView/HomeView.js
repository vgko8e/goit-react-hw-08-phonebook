import { Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import phonebook from '../../image/phonebook.png';

function HomeView() {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '50px',
        padding: '50px',
      }}
    >
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          textAlign="center"
          marginBottom="20px"
        >
          Welcome to PhoneBook!
        </Typography>
        <CardMedia
          component="img"
          width="400"
          image={phonebook}
          alt="greeting"
        />
        <Typography
          variant="h3"
          component="div"
          textAlign="center"
          marginTop="20px"
        >
          To use the PhoneBook, register or log in!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HomeView;
