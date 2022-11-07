import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch} from 'react-redux'
import {postUser, uploadImageCloud} from '../../actions/index';


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

export default function SignUp() {
    const theme = createTheme();
    const dispatch = useDispatch();
    const history = useNavigate();

    const [state, setState] = React.useState({
        name:'',
        email:'',
        role:'User',
        password: '',
        img: "",
        isVerified: false
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const uploadImage = async (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "ecommerce-products")
    
        const linkImg = await dispatch(uploadImageCloud(formData));
        setState({
          ...state,
          img: linkImg
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postUser(state));
        alert(`¡Cuenta creada con exito!. Por favor confirme su cuenta a travez de su correo ${state.email}`);
        setState({name: '', email: '', password: '', img:''});
        history('/');
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="file"
                  name="file"
                  id="file"
                  onChange={uploadImage}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright/>
      </Container>
    </ThemeProvider>
  );
};