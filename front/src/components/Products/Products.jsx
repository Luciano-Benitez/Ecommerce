import React from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Products/Product';
import st from '../Products/products.module.css';


const Products = () => {
    

  return (
    <div className={st.root} >
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Product/>
            </Grid>
        </Grid>
    </div>
  );
};

export default Products;



