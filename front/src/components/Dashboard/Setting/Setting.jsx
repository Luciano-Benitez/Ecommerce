import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PasswordIcon from '@mui/icons-material/Password';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box, Collapse } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import {changeProfileImg, uploadImageCloud} from '../../../actions/index';


export default function Setting() {
  const dispatch = useDispatch();
  const idUser = useSelector(state => state.User.id);
  const profilePicture = useSelector(state => state.User.profilePicture);

  const [image, setImage] = React.useState(false); //Act/Des box of change profile image.
  const changeImage = () => {
    {boxName === true && setBoxName(!boxName)}
    setImage(!image)
  };
  
  const [state, setState] = React.useState({
    id: idUser,
    image:''
  });

    const handleChange = async (e) => {
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "ecommerce-products")
      const linkImg = await dispatch(uploadImageCloud(formData));
      setState({
        ...state,
        image: linkImg
      });
    };

    const handleProfile = (e) => {
      e.preventDefault();
      dispatch(changeProfileImg(state));
      {image === true && setImage(!image)}
    };

    const [boxName, setBoxName] = React.useState(false); 
    const openBoxName = () => {//Act/Des Box change name.
      {image === true && setImage(!image)}
      setBoxName(!boxName);
    };
    const [name, setName] = React.useState(''); //Save new name.
    const changeNameAdm = (e) => { //Function for change name.
      setName({[e.target.name]: e.target.value});
    };

    const handleNameAdm = (e) => {
      e.preventDefault();
      dispatch(changeNameAdm(name))
    };
  
    return (
      <Paper elevation={3} sx={{ width: 500, maxWidth: '100%',  display: 'content', padding: '1rem',
                               marginLeft: '30%', marginTop: '5%' }}>
        <MenuList >
          <MenuItem>
            <ListItemIcon onClick={changeImage} >
              <AccountBoxIcon sx={{ width: 25, height: 25 }} />
              <ListItemText sx={{marginLeft:'1rem'}} >Change Profile</ListItemText>
            </ListItemIcon>
          </MenuItem>
          <Divider/>
          <MenuItem>
            <ListItemIcon onClick={openBoxName} >
              <DriveFileRenameOutlineIcon sx={{ width: 25, height: 25 }} />
              <ListItemText sx={{marginLeft:'1rem'}} >Change full name</ListItemText>
            </ListItemIcon>
          </MenuItem>
          <Divider/>
          <MenuItem>
            <ListItemIcon  onClick={null}>
              <PasswordIcon sx={{ width: 25, height: 25 }} />
              <ListItemText sx={{marginLeft:'1rem'}} >Change password</ListItemText>
            </ListItemIcon>
          </MenuItem>
        </MenuList>

          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Collapse in={image}>
                <Avatar sx={{display:'flex', width: 150, height: 150,  justifyContent:'center'}}
                        src={state.image?state.image: profilePicture} alt='img' elevation={3} >
                </Avatar>
                <IconButton sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '-25%'}}
                   color="primary" aria-label="upload picture" component="label">
                  <input id='file' name='file' type="file"  hidden accept="image/*" onChange={handleChange} /><PhotoCamera/>
                </IconButton>
                  <Button onClick={handleProfile} >Guardar Cambios</Button>
            </Collapse>

            <Collapse in={boxName} >
              <Box /* sx={{display:'flex', justifyContent:'center'}} */>
              <TextField 
              // margin="normal" 
              required
              // fullWidth
              type= 'text'
              id="fullName"
              label="Full Name"
              name="fullName"
              value={name}
              onChange={changeNameAdm}
              // autoFocus
            />
              </Box>
            </Collapse>
          </Box>
      </Paper>
    );
  };