import React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {getProductsAdmin, startLogout} from'../../actions/index';
import Setting from './Setting/Setting';
import { Container } from '@mui/system';
import Products from './Products/Products';
import st from './Dashboard.module.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DashboardAdmin() {
  const History = useNavigate();
  const dispatch = useDispatch();

  const idUser = useSelector(state => state.User.id);
  const fullName = useSelector(state => state.User.name);
  const profilePicture = useSelector(state => state.User.profilePicture);

  const [backImg, setBackImg] = React.useState(true);

  const [profile, setProfile] = React.useState(false); 
  const handleProfile = () => { //Open/Close the profile.
    setProfile(!profile);
    {openMenu === true && setOpenMenu(!openMenu)}
    {openSetting === true && setOpenSetting(!openSetting)}
  };

  const [openSetting, setOpenSetting] = React.useState(false);
  const OpenSetting = () => {  //Open/Close Setting.
    {backImg === true && setBackImg(!backImg)}
    {openProducts === true && setOpenProducts(!openProducts)}
    setOpenSetting(!openSetting);
  };

  const offSesion = () => {//Function for off Sesion.
    dispatch(startLogout())
    History('/')
  };

  const [openMenu, setOpenMenu] = React.useState(false);
  const handleMenu = () => {  //Open/Close the menu.
    setOpenMenu(!openMenu);
    {profile === true && setProfile(!profile)}
    {openSetting === true && setOpenSetting(!openSetting)}
  };

  const goStart = () => {
    {profile === true && setProfile(!profile)}
    {openSetting === true && setOpenSetting(!openSetting)}
    {openMenu === true && setOpenMenu(!openMenu)}
    {openProducts === true && setOpenProducts(!openProducts)}
    {backImg === false && setBackImg(!backImg)}
  };

  const [openProducts, setOpenProducts] = React.useState(false);
  const openAllProducts = () => {  //Open/Close allProducts the Dashboard.
    {backImg === true && setBackImg(!backImg)}
    {profile === true && setProfile(!profile)}
    {openMenu === true && setOpenMenu(!openMenu)}
    {openSetting === true && setOpenSetting(!openSetting)}
    {openProducts === false && setOpenProducts(!openProducts)}
  };
  const goHome = (e) => {  //Function for redirect to Home.
    e.preventDefault();
    History('/')
  };

  const [id] = React.useState(idUser);
  useEffect(() => {  //Render all admin products in the global state.
    dispatch(getProductsAdmin(id));
  }, [dispatch, id]); 

  return (
    <Box>
      <AppBar position="fixed" open={openMenu} style={{backgroundColor:'#0AA1DD'}}>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >
          <IconButton color="inherit" aria-label="open drawer" onClick={handleMenu} edge="start" sx={{
              ...(openMenu && { display: 'none' }),
            }}><MenuIcon/></IconButton>
          <Typography variant="h6" noWrap component="div">{`Welcome ${fullName}`}</Typography>
          <IconButton sx={{marginRight:'2rem'}} onClick={handleProfile} aria-expanded={profile}  >
            <Avatar src={profilePicture} sx={{ width: 45, height: 45 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" open={openMenu}>
        <DrawerHeader>
          <IconButton onClick={handleMenu}><ChevronLeftIcon/></IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
            <ListItemButton onClick={goStart} >
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
            <ListItemButton onClick={openAllProducts} >
              <ListItemIcon><AutoAwesomeMotionIcon/></ListItemIcon>
              <ListItemText primary="Ver Productos" />
            </ListItemButton>
            <ListItemButton onClick={goHome} >
              <ListItemIcon><ReplyAllIcon/></ListItemIcon>
              <ListItemText primary="Volver a Inicio" />
            </ListItemButton>
        </List>
        <Divider/>
      </Drawer>
      <Box component="main" sx={{padding:'5rem'}} >
        <Box sx={{display:'grid', justifyContent:'center', float:'right',
                  marginRight:'-5rem', marginTop:'-2rem'}} >
          <Collapse  in={profile} orientation='vertical' unmountOnExit timeout='auto' >
          
            <List >
              <ListItem disablePadding >
                <ListItemButton onClick={OpenSetting} >
                  <ListItemIcon><SettingsIcon/></ListItemIcon>
                  <ListItemText primary="Configuracion" />
                </ListItemButton>
              </ListItem>
              <Divider/>
              <ListItem disablePadding >
                <ListItemButton onClick={offSesion} >
                  <ListItemIcon><LogoutIcon/></ListItemIcon>
                  <ListItemText primary="Cerrar Sesión" />
                </ListItemButton>
              </ListItem>
            </List> 
          </Collapse>
        </Box> 

        <Container>
          <Collapse in={openSetting} unmountOnExit sx={{display:'flex'}} >
            <Setting/>
          </Collapse>     
        </Container>

        <Container>
          <Collapse in={openProducts} unmountOnExit >
              <Products/>
          </Collapse>
        </Container>

        <Container>
          <Collapse in={backImg} >
            {<div className={st.app} />}
          </Collapse>
        </Container>
      </Box>
    </Box>
  );
};
