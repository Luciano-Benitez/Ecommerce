import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {loginAdmin} from '../../actions/index';
import st from './SignIn.module.css';
import { Paper } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        www.ecommerce.com
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const theme = createTheme();

export default function SignInAdmin() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [state, setState] = React.useState({
    email:'',
    password:''
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(state.email, state.password), history('/DashboardAdmin'));
    setState({email:'', password:''});
    history('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} className={st.b1} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1666889568766-4fbdffc34aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODM3MTQ4Nw&ixlib=rb-4.0.3&q=80&w=1080)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
             <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{color:'#0AA1DD'}}>
              Sign in Admin
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type= 'text'
              value={state.email}
              onChange={onChange}
              autoComplete="email"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={state.password}
              onChange={onChange}
              autoComplete="current-password"
            />
              <Button
              type="submit"
              disabled={!state.email || !state.password}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container sx={{justifyContent:'space-between'}} >
               <Grid item >
                 <Link href="/Forgot-Password" variant="body2">
                   Forgot password?
                 </Link>
               </Grid>
              <Grid item>
                 <Link href="/SignUp-Admin" variant="body2">
                   Don't have an account? Sign Up
                 </Link>
              </Grid>
             </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
