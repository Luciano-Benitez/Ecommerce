import React from 'react'
import {Paper, Typography, Stepper, Step, StepLabel} from '@mui/material';
import st from './CheckOut.module.css';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';

export default function CheckOut() {
  const steps = ['Shipping address', 'Payments details'];
  const [activeStep, setActiveStep] = React.useState(0);
  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm backStep={backStep} nextStep={nextStep}/>
  const nextStep = () => setActiveStep(prevActiveSter => prevActiveSter + 1);
  const backStep = () => setActiveStep(prevActiveSter => prevActiveSter - 1);
  return (
    <>
    <main>
      <Paper className={st.Paper} >
        <Typography component='h1' variant='h4' align='center' >
          CheckOut
        </Typography>
        <Stepper activeStep={activeStep} >
          {steps.map(element => (
            <Step key={element}>
              <StepLabel>{element}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Form  />
      </Paper>
    </main>
    </>
  )
};
