import React from "react";
import {Link} from 'react-router-dom';
import st from './ConfirmAccount.module.css';
import Button from '@mui/material/Button';
import { Alert } from "@mui/material";

export default function ConfirmAccount() {

    return(
        <div className={st.base} >
            <Alert severity='success' sx={{justifyContent:'center', marginTop:'1rem'}} >
                <strong>¡Su cuenta ha sido Confirmada!</strong>
            </Alert>
            <Button sx={{marginTop:'1rem'}} component={Link} to='/' variant="outlined" color='primary' >
                Ir a Inicio
            </Button>
        </div>
    );
};

