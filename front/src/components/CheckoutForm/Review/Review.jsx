import React from 'react';
import { useSelector } from 'react-redux';
import {Typography, List, ListItem, ListItemText} from '@mui/material';
import accounting from 'accounting';


function Review() {
  const ShoppingCart = useSelector(state => state.ShoppingCart);
  const prices = useSelector(state => state.ShoppingCart?.map((e => e.price)));
  const Total = prices?.reduce((e, i) => e + i, 0);
  return (
    <>
    <Typography variant='h6' gutterBottom >
      DetailsForm
    </Typography>
    <List disablePadding >
      {
        ShoppingCart?.map(product => (
          <ListItem key={product.id} >
            <ListItemText primary={product.name} secondary={`Cantidad: ${1}`} />
            <Typography variant='body1' >
              {accounting.formatMoney(product.price)}
            </Typography>
          </ListItem>
        ))
      }
      <ListItem>
        <ListItemText primary='Total' />
        <Typography variant='body1' >
          {accounting.formatMoney(Total)}
        </Typography>
      </ListItem>
    </List>
    </>
  );
};

export default Review