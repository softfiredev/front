import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(

);


function Minuicon() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const pages =[
    {
    nom:"Accueil" , link: 'home'
  },
  {
    nom:"Shop" , link: 'Shop'
  },
  {
    nom:"À propos" , link: 'AboutUs'
  },
  {
    nom:"Devenir partenaire" , link: '/Devenirpartenaire'
  },
  {
    nom:"Contact" , link: 'Contact'
  },
  {
    nom:"Connexion" , link: 'login'
  }
] ;

  return (
    <Box >
      <CssBaseline />
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
       
        </Toolbar>
    
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

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        <Divider />
        <List>
        
          
          {pages.map((page,i) => (
              <ListItem key={page} disablePadding>
                <MenuItem  onClick={handleDrawerClose}  key={i}>
                  <Typography textAlign="center">
                    <Link to={page.link}><p className='link-page'>{page.nom}</p></Link>
                    </Typography>
                </MenuItem>
                     </ListItem>
              ))}
       
    
        </List>
        <Divider />
        
      </Drawer>
    
    </Box>
  );
}
export default Minuicon
