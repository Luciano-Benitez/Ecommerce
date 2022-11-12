import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {getProductForID, changeNameProduct, changeProductType, putPriceProduct,
        putRatingProduct, putDescriptionProduct, uploadImageProduct,
        putImageProduct, deleteProduct} from '../../../actions/index';
import Paper from '@mui/material/Paper'
import {Box, Collapse} from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DescriptionIcon from '@mui/icons-material/Description';
import st from './EditProduct.module.css';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import accounting from 'accounting';

const EditProduct = () => {
    const {id} = useParams();
    const product = useSelector(state => state.ProductEdit);
    const imageProduct = useSelector(state => state.ProductEdit.image);
    const dispatch = useDispatch();
    const history = useNavigate();
    
    const [boxName, setBoxName] = React.useState(false); 
    const openBoxName = () => {
        {boxProductType === true && setBoxProductType(!boxProductType)}
        {boxPrice === true && setBoxPrice(!boxPrice)}
        {boxRating === true && setBoxRating(!boxRating)}
        {boxDescription === true && setBoxDescription(!boxDescription)}
        {boxImage === true && setBoxImage(!boxImage)}  
        setBoxName(!boxName)
    };
    const [stateName, setStateName] = React.useState({id: id, name:''});
    const changeName = (e) => {
        setStateName({
            ...stateName,
            [e.target.name]: e.target.value
        });
    };
    const handleChangeName = (e) => {   //Function for change the name of product.
        e.preventDefault();
        dispatch(changeNameProduct(stateName));
        setStateName({name: ''});
    };

    const [boxProductType, setBoxProductType] = React.useState(false);
    const openBoxProductType = () => {
        {boxName === true && setBoxName(!boxName)}
        {boxPrice === true && setBoxPrice(!boxPrice)}
        {boxRating === true && setBoxRating(!boxRating)}
        {boxDescription === true && setBoxDescription(!boxDescription)}
        {boxImage === true && setBoxImage(!boxImage)}    
        setBoxProductType(!boxProductType)
    };
    const [stateProductType, setProductType] = React.useState({id: id, newType:''});
    const changeNamePType = (e) => {  
        setProductType({
            ...stateProductType,
            [e.target.name] : e.target.value
        });
    };
    const handleProdcutType = (e) => { //Function for change the name of Product type.
        e.preventDefault();
        dispatch(changeProductType(stateProductType));
        setProductType({newType:''});
    };

    const [boxPrice, setBoxPrice] = React.useState(false);
    const openBoxPrice = () => {
        {boxName === true && setBoxName(!boxName)}
        {boxProductType === true && setBoxProductType(!boxProductType)}
        {boxRating === true && setBoxRating(!boxRating)}
        {boxDescription === true && setBoxDescription(!boxDescription)}
        {boxImage === true && setBoxImage(!boxImage)}    
        setBoxPrice(!boxPrice);
    };
    const [statePrice, setStatePrice] = React.useState({id: id, newPrice: ''});
    const changePrice = (e) => {  
        setStatePrice({
            ...statePrice,
            [e.target.name]: e.target.value
        });
    };
    const handlePrice = (e) => {   //Function for change the price of products.
        e.preventDefault();
        dispatch(putPriceProduct(statePrice));
        setStatePrice({newPrice: ''});
    };

    const [boxRating, setBoxRating] = React.useState(false);
    const openBoxRating = () => {
        {boxName === true && setBoxName(!boxName)}
        {boxProductType === true && setBoxProductType(!boxProductType)}
        {boxPrice === true && setBoxPrice(!boxPrice)}
        {boxDescription === true && setBoxDescription(!boxDescription)}
        {boxImage === true && setBoxImage(!boxImage)}
        setBoxRating(!boxRating)
    };
    const [stateRating, setStateRating] = React.useState({id: id, newRating:''});
    const changeRating = (e) => {
        setStateRating({
            ...stateRating,
            [e.target.name] : e.target.value
        });
    };
    const handleRating = (e) => {   //Function for change the rating of product.
        e.preventDefault();
        dispatch(putRatingProduct(stateRating));
        setStateRating({newRating:''});
    };  

    const [boxDescription, setBoxDescription] = React.useState(false);
    const openBoxDescription = () => {
        {boxName === true && setBoxName(!boxName)}
        {boxProductType === true && setBoxProductType(!boxProductType)}
        {boxPrice === true && setBoxPrice(!boxPrice)}
        {boxRating === true && setBoxRating(!boxRating)}
        {boxImage === true && setBoxImage(!boxImage)}
        setBoxDescription(!boxDescription);
    };
    const [stateDescription, setStateDescription] = React.useState({id: id, newDescription:''});
    const changeDescription = (e) => {
        setStateDescription({
            ...stateDescription,
            [e.target.name] : e.target.value
        });
    };
    const handleDescription = (e) => {   //Function for change the Description of product.
        e.preventDefault();
        dispatch(putDescriptionProduct(stateDescription));
        setStateDescription({newDescription:''});
    };

    const [boxImage, setBoxImage] = React.useState(false);
    const openBoxImage = () => {
        {boxName === true && setBoxName(!boxName)}
        {boxProductType === true && setBoxProductType(!boxProductType)}
        {boxPrice === true && setBoxPrice(!boxPrice)}
        {boxRating === true && setBoxRating(!boxRating)}
        {boxDescription === true && setBoxDescription(!boxDescription)}
        setBoxImage(!boxImage)
    };
    const [stateImage, setStateImage] = React.useState({id: id, newImage:''});
    const uploadImage = async (e) => {   //Function for upload image.
        const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "ecommerce-products")
      const linkImg = await dispatch(uploadImageProduct(formData));
      setStateImage({
        ...stateImage,
        newImage: linkImg
      });
    };
    const handleImage = (e) => {
        e.preventDefault();
        dispatch(putImageProduct(stateImage));
        {boxImage === true && setBoxImage(!boxImage)}
    };

    const destroyProduct = (e) => {  //Function for delete product.
        e.preventDefault();
        dispatch(deleteProduct(id));
        history('/DashboardAdmin');
    };

    useEffect(() => {
        dispatch(getProductForID(id))
    },[dispatch, id]); 

    return (
        <Paper elevation={3} className={st.Paper} /* style={{backgroundColor:'#E8F9FD'}} */ >
            <Box sx={{display:'flex', justifyContent:'space-around'}}>
                <Button variant="outlined" component={Link} to='/DashboardAdmin' >Back to Dashboard</Button>
                <Button variant="outlined" color='error' onClick={destroyProduct} >Remove product </Button>
            </Box>
            <MenuList className={st.Menu} >
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon onClick={openBoxName} >
                        <ModeEditIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Name</ListItemText>
                        <ListItemText>{product.name}</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon onClick={openBoxProductType} >
                        <BorderColorIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Product type</ListItemText>
                        <ListItemText>{product.productType}</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{ display:'grid',  justifyContent:'inherit'}} >
                    <ListItemIcon onClick={openBoxPrice} >
                        <CurrencyExchangeIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Price</ListItemText>
                        <ListItemText>{accounting.formatMoney(product.price)}</ListItemText>
                    </ListItemIcon>
                    
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon onClick={openBoxRating} >
                        <StarHalfIcon sx={{marginRight:'1%', paddingTop:'1%'}} />
                        <ListItemText sx={{paddingTop:'1%'}} >Change Rating</ListItemText>
                        <ListItemIcon sx={{marginRight:'42%'}} >{Array(product.rating).fill().map((_, i) => (<p>&#11088;</p>))}</ListItemIcon>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon onClick={openBoxDescription} >
                        <DescriptionIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Description</ListItemText>
                        <ListItemText>{product.description}</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{display:'grid', justifyContent:'inherit'}} >
                    <ListItemIcon onClick={openBoxImage} >
                        <AddPhotoAlternateIcon sx={{marginRight:'1rem'}} />
                        <ListItemText>Change Image</ListItemText>
                        <ListItemText>-</ListItemText>
                    </ListItemIcon>
                </MenuItem>
            </MenuList>
        <Collapse in={boxName} >
            <Box >
                <TextField 
                required 
                fullWidth
                type= 'text'
                id="name"
                label="Change full name"
                name="name"
                value={stateName.name}
                onChange={changeName}
                autoFocus
            />
            <Button sx={{marginTop:'1rem'}} variant="outlined" onClick={handleChangeName} >Change Name</Button>
            </Box>
        </Collapse>

        <Collapse in={boxProductType} >
            <Box >
                <TextField 
                required 
                fullWidth
                type= 'text'
                id="newType"
                label="Change product type"
                name="newType"
                value={stateProductType.newType}
                onChange={changeNamePType}
                autoFocus
            />
            <Button sx={{marginTop:'1rem'}} variant="outlined" onClick={handleProdcutType} >Change product type</Button>
            </Box>
        </Collapse>

        <Collapse in={boxPrice} >
            <Box >
                <TextField 
                required 
                fullWidth
                type= 'text'
                id="newPrice"
                label="Change Price"
                name="newPrice"
                value={statePrice.newPrice}
                onChange={changePrice}
                autoFocus
            />
            <Button sx={{marginTop:'1rem'}} variant="outlined" onClick={handlePrice} >Change price</Button>
            </Box>
        </Collapse>

        <Collapse in={boxRating} >
            <Box >
                <TextField 
                required 
                fullWidth
                type= 'text'
                id="newRating"
                label="Change Rating"
                name="newRating"
                value={stateRating.newRating}
                onChange={changeRating}
                autoFocus
            />
            <Button sx={{marginTop:'1rem'}} variant="outlined" onClick={handleRating} >Change Rating</Button>
            </Box>
        </Collapse>

        <Collapse in={boxDescription} >
            <Box >
                <TextField 
                required 
                fullWidth
                type= 'text'
                id="newDescription"
                label="Change Description"
                name="newDescription"
                value={stateDescription.newDescription}
                onChange={changeDescription}
                autoFocus
            />
            <Button sx={{marginTop:'1rem'}} variant="outlined" onClick={handleDescription} >Change Description</Button>
            </Box>
        </Collapse>

        <Collapse in={boxImage}>
            <Box className={null} sx={{display:'grid', justifyContent:'center'}} >
                <Avatar sx={{display:'flex', width: 150, height: 150,  justifyContent:'center'}}
                        src={stateImage.newImage?stateImage.newImage: imageProduct} alt='img' elevation={3} >
                </Avatar>
                <IconButton sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '-25%'}}
                   color="primary" aria-label="upload picture" component="label">
                  <input id='file' name='file' type="file"  hidden accept="image/*" onChange={uploadImage} /><PhotoCamera/>
                </IconButton>
                  <Button onClick={handleImage} >Guardar Cambios</Button>
            </Box>
          </Collapse>
        </Paper>
    );
};

export default EditProduct;