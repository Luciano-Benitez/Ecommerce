import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import st from './DashboardAdmin.module.css';

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
  const [open, setOpen] = React.useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  const [profile, setProfile] = React.useState(false);
  const handleProfile = () => {
    setProfile(!profile)
  };

  return (
    <Box>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >
          <IconButton color="inherit" aria-label="open drawer" onClick={handleMenu} edge="start" sx={{
              ...(open && { display: 'none' }),
            }}><MenuIcon/></IconButton>
          <Typography variant="h6" noWrap component="div">Dashboard</Typography>
          <IconButton sx={{marginRight:'2rem'}} onClick={handleProfile} aria-expanded={profile}  >
              <Avatar/>
            </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleMenu}><ChevronLeftIcon/></IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {['Notificaciones', 'Productos', 'Ventas', 'Otros'].map((texto, index) => (
            <ListItem key={texto} disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}>
                <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={texto} sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
      </Drawer>
      <Box component="main" sx={{padding:'5rem'}} >
        
        <Box sx={{display:'grid', justifyContent:'center', float:'right',
                  marginRight:'-5rem', marginTop:'-2rem'}} >
          <Collapse  in={profile} orientation='vertical' unmountOnExit timeout='auto' >
            <List >
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemIcon><InboxIcon/></ListItemIcon>
                  <ListItemText primary="Configuracion" />
                </ListItemButton>
              </ListItem>
              <Divider/>
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemIcon><InboxIcon/></ListItemIcon>
                  <ListItemText primary="Cerrar Sesión" />
                </ListItemButton>
              </ListItem>
            </List> 
          </Collapse>
        </Box> 
          
        
      </Box>
    </Box>
  );
};
