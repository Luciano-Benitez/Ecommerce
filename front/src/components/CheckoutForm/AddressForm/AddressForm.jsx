import React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';
import { Typography, Grid, Button } from '@mui/material';
import {useForm, FormProvider} from 'react-hook-form';
import Addressinput from './AddressInput';
import st from './AddressForm.module.css';
import {shippingData} from '../../../actions/index';


 const AddressForm = ({nextStep}) => {
  const dispatch = useDispatch();
  const methods = useForm();
  
  return (
    <>
      <Typography padding='1rem' variant='h6' gutterBottom >
        AddressForm
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => {
          dispatch(shippingData(data))
          nextStep()
        })}>
          <Grid padding='1rem' container spacing={3} >
            <Addressinput  required name='firstName' label='First Name' />
            <Addressinput  required name='lastName' label='Last Name' />
            <Addressinput  required name='address' label='Address' />
            <Addressinput  required name='email' label='Email' />
            <Addressinput  required name='city' label='City' />
            <Addressinput  required name='postCode' label='Post Code' />
          </Grid>
          <div className={st.bottons}>
            <Button component={Link} to='/CheckoutPage' variant='outlined' color='primary'>BACK TO THE CHECKOUT PAGE</Button>
            <Button type='submit' variant='outlined' color='success' >NEXT</Button>
          </div>
        </form>  
      </FormProvider>

    </>
  )
};

export default AddressForm;
