import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dashboard from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleActionTheme } from '../redux/actions/themeAction';
import LightMode from '@mui/icons-material/LightMode'; 
import DarkMode from '@mui/icons-material/DarkMode';
import { useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction'; 

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const DrawerLeft = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    
    { text: 'Home', icon: <HomeIcon /> , path: '/home'},
    { text: 'Notifications', icon: <NotificationsIcon /> , path: '/notifications'},
    { text: 'Tasks Booked', icon: <Dashboard />, path: '/userdashboard' },
    
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

      // log out user
  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
        navigate('/');
    }, 500)
  }

  const location = useLocation();
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const { userInfo } = useSelector(state => state.signIn);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            HuzaHub
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {menuItems.map((item, index) => (
                        <ListItem 
                            button 
                            key={item.text}
                            component={Link} 
                            to={item.path}
                            selected={location.pathname === item.path} // Highlight if current page matches
                            sx={{
                                fontWeight: location.pathname === item.path ? 'bold' : 'normal', // Bold if selected
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => dispatch(toggleActionTheme())}>
                <ListItemIcon>
                {palette.mode === "dark" ? (
                        <DarkMode sx={{ color: "#808080", fontSize: "25px" }} />
                    ) : (
                        <LightMode sx={{ color: "808080", fontSize: "25px" }} />
                    )}
                </ListItemIcon>
                {/* <ListItemText primary={text} /> */}
              </ListItemButton>
            </ListItem>

            {!userInfo ? 
            <ListItem 
                  button 
                  component={Link} 
                  to={"/login"}
                  selected={location.pathname === "/login"} // Highlight if current page matches
                  sx={{
                      fontWeight: location.pathname === "/login" ? 'bold' : 'normal', // Bold if selected
                  }}
              >
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText primary={"Log in"} />
              </ListItem> 
              
              :

              <ListItem disablePadding>
                <ListItemButton onClick={logOutUser}>
                  <ListItemText primary={"Log in"} />
                </ListItemButton>
            </ListItem>
              }
          

            
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default DrawerLeft;
