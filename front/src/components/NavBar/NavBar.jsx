import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const UserOn = useSelector(state => state.User);

  const Logout = () => { //Function to close session.
    dispatch(startLogout());
  };

  const goDashboard = (e) => {
    e.preventDefault();
    {UserOn.length === 0 || UserOn.role === 'User'? History('/'): History('/DashboardAdmin')}
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar  position="fixed" style={{backgroundColor:'#CFF5E7'}} > 
        <Toolbar> 
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 5 }} >
            <Link to='/' ><HomeIcon fontSize='large' style={{color:'#0AA1DD'}}/></Link>
          </IconButton>
          {UserOn.length === 0 ?
          <Button component={Link} to='/SignIn-Admin' variant='outlined' style={{color:'#0AA1DD'}} ><strong>Sign in as Admin</strong></Button> :
          <Button onClick={goDashboard} variant='outlined'><strong>Dashboard</strong></Button> 
          }
          <Typography textAlign='center' variant='h5' component="div" sx={{ flexGrow: 1, marginRight:'10%' }}>
              {nameUser?'¡Bienvenido '+ nameUser + '!' : 'www.ecommerce.com'}
          </Typography>
          {UserOn.length === 0 ?
            <Button component={Link} to='/SignIn' variant='outlined'style={{color:'#0AA1DD'}} ><strong>Sign in</strong></Button> :
            <Button variant='outlined' onClick={Logout} ><strong>Sign Out</strong></Button>
          }
          <IconButton  color='inherit' >
            <Badge badgeContent={cartLength} color="secondary" >
                <Link to='/CheckoutPage' ><ShoppingCartRoundedIcon style={{color:'#0AA1DD'}} fontSize='large'/></Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
