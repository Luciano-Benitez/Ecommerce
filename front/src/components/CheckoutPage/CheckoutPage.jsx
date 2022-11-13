import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard from './CheckoutCard';
import st from './CheckoutPage.module.css';
import Total from './Total/Total';
import { Alert } from '@mui/material'

function FormRow() {
    const Products = useSelector(state => state.ShoppingCart);
    return (
        <React.Fragment>
            {
            Products?.map(element => (
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <CheckoutCard key={element.id} product={element}  />
            </Grid>
            ))
            }
        </React.Fragment> 

    );
};

const CheckoutPage = () => {
    const User = useSelector(state => state.User);
    return (
    <div className={st.Principal} >
        <Grid container spacing={3}>
            <Grid item xs={12}  >
                <Typography style={{color:'#0AA1DD'}} align='center' gutterButtom variant='h4' >
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} container spacing={3}>
                {
                    User.length === 0 ?
                    (<div>
                        <Alert severity='warning' size='' >
                        <strong>Inicie sesión para ingresar a la pasarela de compra.</strong>
                        </Alert>
                    </div>) :
                    (<Typography align='center' gutterButtom variant='h4' ><Total/></Typography>)
                }
                
            </Grid>
        </Grid>
    </div>
    )
};

export default CheckoutPage;