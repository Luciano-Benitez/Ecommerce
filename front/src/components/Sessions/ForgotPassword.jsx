import React from 'react';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockResetIcon from '@mui/icons-material/LockReset';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import st from './ForgotPassword.module.css';
import Swl from 'sweetalert2';
import {startRestorePassword} from '../../actions/index';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        www.ecommerce.com
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ForgotPassword () {

  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    email:''
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startRestorePassword(state.email));
    setState({email:''});
  };

  return (
    <ThemeProvider theme={theme}  >
      <Container component="main" className={st.b1} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <LockResetIcon fontSize='large' color='primary' />
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <Button
              type="submit"
              disabled={!state.email}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

