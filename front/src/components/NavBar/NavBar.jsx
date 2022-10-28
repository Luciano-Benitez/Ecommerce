import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import st from './NavBar.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';
import {startLogout} from '../../actions/index';

export default function NavBar() {

  const History = useNavigate();
  const dispatch = useDispatch();
  
  const cartLength = useSelector(state => state.ShoppingCart?.length);
  const nameUser = useSelector(state => state.User.name);
  const userOn = useSelector(state => state.User);

  const Logout = () => { //Funcion de Cerrar Sesion.
    dispatch(startLogout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed" color='default' > 
        <Toolbar> 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <Link to='/' ><HomeIcon fontSize='large' /></Link>
          </IconButton>
          <Typography textAlign='center' variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {nameUser?'¡Bienvenido '+ nameUser + '!' : 'www.ecommerce.com'}
          </Typography>
          {userOn.length === 0 ?
            <Button component={Link} to='/SignIn' variant='outlined'><strong>Sign in</strong></Button> :
            <Button variant='outlined' onClick={Logout} ><strong>Sign Out</strong></Button>
          }
          <IconButton  color='inherit' >
            <Badge badgeContent={cartLength} color="secondary" >
                <Link to='/CheckoutPage' ><ShoppingCartRoundedIcon  fontSize='large'/></Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
