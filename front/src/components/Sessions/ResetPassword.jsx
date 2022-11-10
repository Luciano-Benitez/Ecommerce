import React from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PasswordIcon from '@mui/icons-material/Password';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {resetPassword} from '../../actions/index';
import st from './ResetPassword.module.css';

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

export default function ResetPassword () {

  const dispatch = useDispatch();
  const history = useNavigate();
  const {token} = useParams();
  
  const [state, setState] = React.useState({
    password1:'',
    password2:''
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, state.password1));
    setState({password1:'', password2:''});
    history('/');
  };

  return (
    <ThemeProvider theme={theme}  >
      <Container component="main" maxWidth="xs" className={st.b1} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PasswordIcon color="primary" fontSize="large" />
          <Typography component="h1" variant="h5">
           Reset Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password1"
              name="password1"
              label="Insert your password"
              type="password"
              value={state.password1}
              onChange={onChange}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password2"
              name="password2"
              label="Repeat your password"
              type="password"
              value={state.password2}
              onChange={onChange}
            />
            <Button
              type="submit"
              disabled={!state.password1 || !state.password2}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            > Send </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

