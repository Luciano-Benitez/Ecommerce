import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {getProductForID} from '../../../actions/index';
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DescriptionIcon from '@mui/icons-material/Description';
import st from './EditProduct.module.css';
import Divider from '@mui/material/Divider';

const EditProduct = () => {
    const {id} = useParams();
    const product = useSelector(state => state.ProductEdit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductForID(id))
    },[dispatch, id]); 

    return (
        <Paper elevation={3} className={st.Paper} >
                <Button component={Link} to='/DashboardAdmin' >
                    Back to Dashboard
                </Button>
            <MenuList className={st.Menu} >
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon>
                        <ModeEditIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Name</ListItemText>
                        <ListItemText>NAME</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon>
                        <ModeEditIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Product type</ListItemText>
                        <ListItemText>PRODUCT TYPE</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon>
                        <CurrencyExchangeIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Price</ListItemText>
                        <ListItemText  >PRICE</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon >
                        <StarHalfIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Rating</ListItemText>
                        <ListItemText  >RATING</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon>
                        <DescriptionIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Description</ListItemText>
                        <ListItemText>DESCRIPTION</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon>
                        <AddPhotoAlternateIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Image</ListItemText>
                        <ListItemText>IMAGE</ListItemText>
                    </ListItemIcon>
                </MenuItem>
            </MenuList>
        </Paper>
    )
};

export default EditProduct;