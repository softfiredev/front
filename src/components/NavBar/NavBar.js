import React from 'react'
import './navbar.css'
import Imge from "../../assest/logo.png"
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'iconsax-react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HambergerMenu} from 'iconsax-react';
function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const pages =[
    {
    nom:"Accueil" , link: 'home'
  },
  {
    nom:"Shop" , link: 'Shop'
  },
  {
    nom:"À propos" , link: 'propos'
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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='nav'>
      <header className="header">
        <div className="logo">
          <Link to="/home"> <img src={Imge} alt="logo" /></Link>
          <div className='icon-menu'>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <HambergerMenu
            size="35"
         color="#F7F7F7"
        />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.link}><p className='link-page'>{page.nom}</p></Link>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
            </div>

          </div>
        <div className='groupli'>
          <ul className="main-nav">
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="#">Shop</Link>
            </li>
            <span className="material-symbols-outlined">expand_more</span>
            <li><Link to="#">À propos</Link></li>
            <li><Link to="#">Devenir partenaire</Link></li>
            <li><Link to="Contact">Contact</Link></li>
          </ul>
        </div>
        <div className='group'>
          <span className="cartchop">
            <Link to="#" className='iconcolor'>
              <ShoppingCart
                size="32"
                color="#FFFFFF"
                variant="Bold"
              />
            </Link>
          </span>
          <Link to="login"> <button className='butto-NAV' ><p className='conx'>Connexion</p></button></Link>
        </div>

      </header>



    </div>
  )
}

export default NavBar
