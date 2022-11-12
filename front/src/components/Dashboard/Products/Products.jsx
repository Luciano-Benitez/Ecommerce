import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { Button } from '@mui/material';
import st from './Product.module.css'

const Products = () => {
    const allProducts = useSelector(state => state.UserProducts);

  return (
    <div className={st.boton} >
      <Button component={Link} to='/DashboardAdmin/NewProduct' color='success'
        variant='outlined' sx={{display:'flex', textAlign: 'center', marginBottom:'1rem'}}>
          <strong> Create new product</strong>
      </Button>
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



