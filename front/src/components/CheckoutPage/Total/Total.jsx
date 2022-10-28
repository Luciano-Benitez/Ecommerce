import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import accounting from 'accounting';
import Button from '@mui/material/Button';
import st from './Total.module.css';

const Total = () => {
  
    const Items = useSelector(state => state.ShoppingCart?.length);   
    const prices = useSelector(state => state.ShoppingCart?.map((e => e.price)));
    const Total = prices?.reduce((e, i) => e + i, 0);
    
    return (
        <div className={st.Principal} >
            <h5>Total Items: {Items}</h5>
            <h5>{accounting.formatMoney(Total)}</h5>
            <Button component={Link} to='/CheckOut' className={st.Button} variant='contained' color='success' >Check Out</Button>
        </div>
    );
};

export default Total;