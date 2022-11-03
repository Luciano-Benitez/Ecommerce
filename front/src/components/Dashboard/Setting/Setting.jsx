import React from 'react';
import { useSelector } from 'react-redux';
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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


export default function Setting() {
    const Profile = useSelector(state => state.User.Profile);
    const [image, setImage] = React.useState(false);
    const changeImage = () => {
      setImage(!image)
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
            <ListItemIcon onClick={null} >
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
                        src={Profile} alt='img' elevation={3} >
                </Avatar>
                <IconButton sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '-15%'}}
                   color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera/>
                </IconButton>
                  
            </Collapse>
          </Box>
      </Paper>
    );
  };