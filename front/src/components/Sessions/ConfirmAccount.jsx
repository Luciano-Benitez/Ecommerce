import React from "react";
import {Link} from 'react-router-dom';
import st from './ConfirmAccount.module.css';
import Button from '@mui/material/Button';

export default function ConfirmAccount() {

    return(
        <div className={st.base} >
            <h1>¡Su cuenta ha sido Confirmada!</h1>
            <Button component={Link} to='/' variant="outlined" color='primary' >Ir a Inicio</Button>
        </div>
    );
};

