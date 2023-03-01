import React from 'react'
import './navbar.css'
import Imge from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'iconsax-react';
import Menuicon from '../menu-icon/minu';

function NavBar() {


  return (
    <div className='nav'>
      <header className="header">
        <div className="logo">
          <Link to="/home"> <img src={Imge} alt="logo" /></Link>
          <div className='icon-menu'>
            <Menuicon   />
            </div>

          </div>
        <div className='groupli'>
          <ul className="main-nav">
           <Link to="/home"> <li>Accueil</li></Link>
           <Link to="/Shop"> <li>Shop </li></Link>
           
            <span className="material-symbols-outlined">expand_more</span>
            <Link to="AboutUs"><li>À propos</li></Link>
           <Link to="BecomePartner"> <li>Devenir partenaire</li></Link>
          <Link to="Contact">  <li>Contact</li></Link>
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
          <Link to="login" className='butto-NAV-link' > <button className='butto-NAV' ><p className='conx'>Connexion</p></button></Link>
        </div>

      </header>



    </div>
  )
}

export default NavBar
