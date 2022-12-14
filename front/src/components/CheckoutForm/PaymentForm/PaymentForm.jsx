import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Review from '../Review/Review';
import {Divider, Typography, Button, Collapse} from '@mui/material';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import st from './PaymentForm.module.css';
import accounting from 'accounting';
import {paymentMessage, startEmtyCart} from '../../../actions/index';
import CircularProgress from '@mui/material/CircularProgress';

function PaymentForm({backStep, nextStep}) {
  const stripePromise = loadStripe('pk_test_51KYwSkGKrvjozYj3Bzb1uUvezvvvgpJLZ30SclJ749J1Rakv0im3nHBt5wdCKEehDSEdGFPupexafsO2BD6kSqhX00XLNReNgO');
  const prices = useSelector(state => state.ShoppingCart?.map((e => e.price)));
  const Total = prices?.reduce((e, i) => e + i, 0);
  const message = useSelector(state => state.PaymentMessage);

  const dispatch = useDispatch();

  const CheckoutForm = ({backStep, nextStep}) => {
    const stripe = useStripe();
    const elements = useElements();
    const[loading, setLoading] = React.useState(false);
    const openLoading = () => {
      setLoading(!loading)
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      });
      try {
        const {id} = paymentMethod;
        if(!error) {
        openLoading();
        const data = await axios.post('http://localhost:3001/Payment', {id, amount: Total * 1000});
        dispatch(paymentMessage(data.data.message));
        } 
        await elements.getElement(CardElement).clear();
        nextStep();
        if(message === 'Successful Payment'){
          dispatch(startEmtyCart());
        } 
      } catch (error) {
        console.log('error:', error);
        nextStep();
        }
    };

    return (
      <form onSubmit={handleSubmit} >
        <CardElement/>
        <div className={st.bottons} >
          <Button variant='outlined' onClick={backStep} >BACK</Button>
          <Collapse in={loading}>
            <CircularProgress sx={{display:'flex', justifyContent:'center'}}/>
          </Collapse>
          <Button type='submit'  disabled={!stripe}  variant='outlined' >PAGAR {accounting.formatMoney(Total)}</Button>
        </div>
      </form>
    )
  };

  return (
    <>
      <Review/>
      <Divider/>
      <Typography variant='h6' gutterBottom >Payment method</Typography>
      <Elements stripe={stripePromise} >
        <CheckoutForm backStep={backStep} nextStep={nextStep} />
      </Elements> 
    </>
  ) 
};

export default PaymentForm;