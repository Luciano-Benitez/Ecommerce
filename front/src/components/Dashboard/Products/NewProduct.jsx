import React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import { uploadImageCloud, postNewProduct} from '../../../actions/index';
import { IconButton } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default function NewProduct() {
    const id = useSelector(state => state.User.id);
    const theme = createTheme();
    const dispatch = useDispatch();
    const history = useNavigate();

    const [state, setState] = React.useState({
        name:'',
        productType:'',
        price:'',
        rating: '',
        image: "",
        description: '',
        userId: id
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
          image: linkImg
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewProduct(state));
        setState({name: '', productType: '',
            price: '', rating:'', image:'',
            description: '', userId:''});
        history('/DashboardAdmin');
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <AddToPhotosIcon color='primary' fontSize="large" />
          <Typography component="h1" variant="h5" style={{color:'#0AA1DD'}}>
            Create Product
          </Typography>
        <IconButton  sx={{display:'flex', marginRight:'200%'}} >
            <Button component={Link} to='/DashboardAdmin' variant='outlined' >
                Back
            </Button>
        </IconButton>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3}}>
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
                  id="productType"
                  label="Product type"
                  name="productType"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  type="text"
                  label="Price"
                  name="price"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rating"
                  type="text"
                  label="Rating"
                  name="rating"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  type="text"
                  label="Description"
                  name="description"
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
              disabled={!state.name || !state.productType || !state.price || !state.rating || !state.description}
              sx={{ mt: 3, mb: 2 }}
            >
              Create 
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};