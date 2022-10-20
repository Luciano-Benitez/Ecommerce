import React from "react";
import {Link} from 'react-router-dom';
import st from './ConfirmAccount.module.css';

export default function ConfirmAccount() {

    return(
        <div className={st.base} >
            <h1>¡Su cuenta ha sido Confirmada!</h1>
            <button><Link to='/SignIn'>Iniciar Sesion.</Link></button>
        </div>
    );
};