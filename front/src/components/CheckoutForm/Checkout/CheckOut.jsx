import React from 'react'
import { useSelector } from 'react-redux';
import {Paper, Typography, Stepper, Step, StepLabel} from '@mui/material';
import st from './CheckOut.module.css';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import Confirmation from '../Confirmation/Confirmation';


export default function CheckOut() {
  const message = useSelector(state => state.PaymentMessage);
  const steps = ['Shipping address', 'Payments details'];
  const [activeStep, setActiveStep] = React.useState(0);
  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm backStep={backStep} nextStep={nextStep}/>
  const nextStep = () => setActiveStep(prevActiveSter => prevActiveSter + 1);
  const backStep = () => setActiveStep(prevActiveSter => prevActiveSter - 1);
  return (
    <>
    <main>
      <Paper className={st.Paper} >
        <Typography style={{color:'#0AA1DD'}} component='h1' variant='h4' align='center' >
          CheckOut
        </Typography>
        <Stepper activeStep={activeStep} >
          {steps.map(element => (
            <Step key={element}>
              <StepLabel>{element}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {
          activeStep === steps.length ? (<Confirmation message={message} />) : (<Form />)
        }
      </Paper>
    </main>
    </>
  );
};
