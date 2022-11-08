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
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import {changeProfileImg, uploadImageCloud, changeNameAdm, changePasswordAdm} from '../../../actions/index';
import st from './Setting.module.css';


export default function Setting() {
  const dispatch = useDispatch();
  const idUser = useSelector(state => state.User.id);
  const profilePicture = useSelector(state => state.User.profilePicture);

  const [image, setImage] = React.useState(false); 
  const changeImage = () => {//Act/Des box of change profile image.
    {boxName === true && setBoxName(!boxName)}
    {boxPass === true && setBoxPass(!boxPass)}
    setImage(!image)
  };
  
  const [state, setState] = React.useState({//State local for change profile image.
    id: idUser,
    image:''
  });
    const handleChange = async (e) => {//Function for upload profile image in Cloudinary.
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "ecommerce-products")
      const linkImg = await dispatch(uploadImageCloud(formData));
      setState({
        ...state,
        image: linkImg
      });
    };

    const handleProfile = (e) => {//Function for onClick of change image Profile.
      e.preventDefault();
      dispatch(changeProfileImg(state));
      {image === true && setImage(!image)}
    };


    const [boxName, setBoxName] = React.useState(false); 
    const openBoxName = () => {//Act/Des Box change name.
      {image === true && setImage(!image)}
      {boxPass === true && setBoxPass(!boxPass)}
      setBoxName(!boxName);
    };
    const [stateName, setStateName] = React.useState({//State local for save new name.
      id: idUser,
      name:''
    }); 
    const changeNameAdmin = (e) => { //Function for change name.
      setStateName({
        ...stateName,
        [e.target.name]: e.target.value
      });
    };

    const handleNameAdm = (e) => { //Function for onClick of changeNameAdm.
      e.preventDefault();
      dispatch(changeNameAdm(stateName));
      setStateName({name:''});
      {boxName === true && setBoxName(!boxName)}
    };


    const [boxPass, setBoxPass] = React.useState(false); //state local for open boxPass.
    const openBoxPass = () => {
      {image === true && setImage(!image)}
      {boxName === true && setBoxName(!boxName)}
      setBoxPass(!boxPass);
    };
    const [statePass, setStatePass] = React.useState({ //state local for save new password.
      id: idUser,
      newPassword: ''
    });
    const changePass = (e) => { //Function for change new password.
      setStatePass({
        ...statePass,
        [e.target.name]: e.target.value
      });
    };
    const handlePassword = (e) => {//Function for onClick of change PasswordAdm.
      e.preventDefault();
      dispatch(changePasswordAdm(statePass));
      {boxPass === true && setBoxPass(!boxPass)}
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
            <ListItemIcon  onClick={openBoxPass}>
              <PasswordIcon sx={{ width: 25, height: 25 }} />
              <ListItemText sx={{marginLeft:'1rem'}} >Change password</ListItemText>
            </ListItemIcon>
          </MenuItem>
        </MenuList>

          <Collapse in={image}>
            <Box className={st.changeProfileAdm} >
                <Avatar sx={{display:'flex', width: 150, height: 150,  justifyContent:'center'}}
                        src={state.image?state.image: profilePicture} alt='img' elevation={3} >
                </Avatar>
                <IconButton sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '-25%'}}
                   color="primary" aria-label="upload picture" component="label">
                  <input id='file' name='file' type="file"  hidden accept="image/*" onChange={handleChange} /><PhotoCamera/>
                </IconButton>
                  <Button onClick={handleProfile} >Guardar Cambios</Button>
            </Box>
          </Collapse>

          <Collapse in={boxName} >
            <Box className={st.changeNameAdm} >
            <TextField 
            required 
            fullWidth
            type= 'text'
            id="stateName"
            label="Change full name"
            name="name"
            value={stateName.name}
            onChange={changeNameAdmin}
            autoFocus
          />
          <Button onClick={handleNameAdm} >Change Name</Button>
            </Box>
          </Collapse>

          <Collapse in={boxPass} >
            <Box className={st.changePass} >
            <TextField 
            required 
            fullWidth
            type= 'password'
            id="Password"
            label="Change password"
            name="newPassword"
            value={statePass.newPassword}
            onChange={changePass}
            autoFocus
          />
          <Button onClick={handlePassword} >Change Password</Button>
            </Box>
          </Collapse>
          
      </Paper>
    );
  };