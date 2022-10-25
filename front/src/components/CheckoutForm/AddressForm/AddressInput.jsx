import React from 'react'
import { Grid, TextField } from '@mui/material';
import {useFormContext, Controller} from 'react-hook-form';

const AddressInput = ({ name, label, required}) => {
    const {control} = useFormContext();
    return (
      <Grid item xs={12} sm={6} >
        <Controller name={name} render={({field:{onChange}}) => (<TextField control={control} onChange={onChange} defaultValue=''  fullWidth  label={label} required={required} /> )}
        />
    </Grid>
  ) 
};

export default AddressInput;
