import React from 'react';
import {Link} from 'react-router-dom';
import st from './Nav.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed" color='default' > 
        <Toolbar  > 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <Link to='/' ><HomeIcon fontSize='large' /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ¡Bienvenido!
          </Typography>
          <Link to='/Loguin' ><Button variant='outlined' ><strong>Login</strong></Button></Link>
          <IconButton  color='inherit' >
            <Badge badgeContent={4} color="secondary" >
                <Link to='/CheckoutPage' ><ShoppingCartRoundedIcon  fontSize='large'/></Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
