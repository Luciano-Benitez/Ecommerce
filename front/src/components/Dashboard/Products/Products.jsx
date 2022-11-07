import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Product from './Product';
// import st from '../Products/products.module.css';


const Products = () => {
    const allProducts = useSelector(state => state.UserProducts);
  const dispatch = useDispatch();
  return (
    <div className={null} >
        <Grid container spacing={2}>
           {
            allProducts.map(element => (
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product key={element.id} product={element}  />
            </Grid>
            ))
           }
        </Grid>
    </div>
  );
};

export default Products;



