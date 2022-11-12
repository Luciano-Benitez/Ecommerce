import React from 'react';
import { Button } from '@mui/material';
import st from './Paginado.module.css';

export function Paginado({allProducts, productsPerPage, paginado}){
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allProducts/productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav className={st.nav} >
            {
                pageNumbers?.map(number => (
                    <Button variant="outlined" padding='1rem'
                        key={number} onClick={() => paginado(number)} >
                        {number}
                    </Button>

                ))
            }
        </nav>
    )
};

export default Paginado;