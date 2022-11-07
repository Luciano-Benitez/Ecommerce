import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const EditProduct = () => {
    return (
        <>
        <h4>Edit</h4>
        <Button component={Link} to='/DashboardAdmin' >
            Back to Dashboard
        </Button>
        </>
    )
};
export default EditProduct;