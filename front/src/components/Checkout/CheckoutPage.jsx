import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard from '../Checkout/CheckoutCard';
import {products} from '../../utils/ProductData'
import st from './CheckoutPage.module.css';
import Total from '../Total/Total';

function FormRow() {
    return (
        <React.Fragment>
            {
            products.map(element => (
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <CheckoutCard key={element.id} product={element}  />
            </Grid>
            ))
            }
        </React.Fragment> 

    );
};

const CheckoutPage = () => {
    return (
    <div className={st.Principal} >
        <Grid container spacing={3}>
            <Grid item xs={12}  >
                <Typography align='center' gutterButtom variant='h4' >
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} container spacing={3}>
                <Typography align='center' gutterButtom variant='h4' >
                    <Total/>
                </Typography>
            </Grid>
        </Grid>
    </div>
    )
};

export default CheckoutPage;