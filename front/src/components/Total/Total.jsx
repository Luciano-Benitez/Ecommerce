import React from 'react';
import accounting from 'accounting';
import Button from '@mui/material/Button';
import st from './Total.module.css';

const Total = () => {
    return (
        <div className={st.Principal} >
            <h5>Total Items: 3</h5>
            <h5>{accounting.formatMoney(50)}</h5>
            <Button className={st.Button} variant='contained' color='secondary' >Check Out</Button>
        </div>
    );
};

export default Total;