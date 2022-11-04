import React from 'react';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
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
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import st from './DashboardAdmin.module.css';
import {getProductsAdmin, startLogout} from'../../actions/index';
import Setting from './Setting/Setting';
import { Container } from '@mui/system';

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

  const id = useSelector(state => state.User.id);
  const fullName = useSelector(state => state.User.name);
  const profilePicture = useSelector(state => state.User.profilePicture);

  const [profile, setProfile] = React.useState(false);
  const handleProfile = () => {
    setProfile(!profile);
    {openMenu === true && setOpenMenu(!openMenu)}
    {openSetting === true && setOpenSetting(!openSetting)}
  };

  const [openSetting, setOpenSetting] = React.useState(false);
  const OpenSetting = () => {
    setOpenSetting(!openSetting);
  };

  const offSesion = () => {
    dispatch(startLogout())
    History('/')
  };

  const [openMenu, setOpenMenu] = React.useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
    {profile === true && setProfile(!profile)}
    {openSetting === true && setOpenSetting(!openSetting)}
  };

  const getProducts = (e) => {
    e.preventDefault();
    dispatch(getProductsAdmin(id));
  };

  const goHome = (e) => {
    e.preventDefault();
    History('/')
  };

  return (
    <Box>
      <AppBar position="fixed" open={openMenu}>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >
          <IconButton color="inherit" aria-label="open drawer" onClick={handleMenu} edge="start" sx={{
              ...(openMenu && { display: 'none' }),
            }}><MenuIcon/></IconButton>
          <Typography variant="h6" noWrap component="div">{`${fullName}`}</Typography>
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
            <ListItemButton onClick={null} >
              <ListItemIcon><MarkEmailUnreadIcon/></ListItemIcon>
              <ListItemText primary="Notificaciones" />
            </ListItemButton>
            <ListItemButton onClick={null} >
              <ListItemIcon><AutoAwesomeMotionIcon/></ListItemIcon>
              <ListItemText primary="Ver Productos" />
            </ListItemButton>
            <ListItemButton onClick={goHome} >
              <ListItemIcon><HomeIcon/></ListItemIcon>
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
      </Box>
    </Box>
  );
};
