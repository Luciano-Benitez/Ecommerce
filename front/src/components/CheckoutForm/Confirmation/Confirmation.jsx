import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Divider, Alert } from '@mui/material';

const Confirmation = ({message}) => {
  return (
    <>

    <Alert severity='success' sx={{justifyContent:'center', marginTop:'1rem'}} >
      <strong>{message}</strong>
    </Alert>
    <Divider/>
    <Button sx={{marginTop:'1rem'}} component={Link} to='/' variant='outlined' type='button' >
      Back to home page
    </Button>
    </>
  );
};

export default Confirmation;