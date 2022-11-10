import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Divider } from '@mui/material';

const Confirmation = ({message}) => {
  return (
    <>
    <Typography variant='h6' >{message}</Typography>
    <Divider/>
    <Button padding='1rem' component={Link} to='/' variant='outlined' type='button' >Back to home page</Button>
    </>
  );
};

export default Confirmation;