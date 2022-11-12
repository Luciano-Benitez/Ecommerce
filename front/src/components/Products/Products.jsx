import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import st from './products.module.css';
import Grid from '@mui/material/Grid';
import Product from '../Products/Product';
import {getProducts} from '../../actions/index';
import Paginado from './Paginado';

const Products = () => {
  const dispatch = useDispatch();
  const AllProducts = useSelector(state => state.allProducts);

  const [Page, setPage] = React.useState(1);
  const [productsPerPage] = React.useState(8);
  const indexOfLastProduct = Page * productsPerPage;
  const indexOfFirstCountry = indexOfLastProduct - productsPerPage;
  const currentProducts = AllProducts?.slice(indexOfFirstCountry, indexOfLastProduct);

  const paginado = (pageNumbers) => {
    setPage(pageNumbers)
  };

  React.useEffect(() => {
    dispatch(getProducts())
  },[dispatch]);

  return (
    <div className={st.root} >
          <Paginado
            productsPerPage={productsPerPage}
            allProducts={AllProducts.length}
            paginado={paginado}
            />
          <Grid container spacing={2}>
           {
             currentProducts?.map(element => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} >
                  <Product key={element.id} product={element}  />
                </Grid>
              )
            })  
           }
        </Grid>
    </div>
  );
};

export default Products;



