import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import st from '../Products/products.module.css';
import Grid from '@mui/material/Grid';
import Product from '../Products/Product';
import {getProducts} from '../../actions/index';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.allProducts);

  React.useEffect(() => {
    dispatch(getProducts())
  },[dispatch]);

  return (
    <div className={st.root} >
        <Grid container spacing={2}>
           {
            products.map(element => (
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



