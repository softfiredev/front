import React from 'react'
import './navbar.css'
import Imge from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { ShoppingCart,ArrowDown2 } from 'iconsax-react';
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
           <ArrowDown2 size="20" color="#FFFFFF" variant="TwoTone" style={{marginTop:'5%',marginLeft:'-3.5%'}}/>

            <Link to="/AboutUs"><li>À propos</li></Link>
           <Link to="/BecomePartner"> <li>Devenir partenaire</li></Link>
          <Link to="/Contact">  <li>Contact</li></Link>
          </ul>
        </div>
        <div className='group'>
          <span className="cartchop">
            <Link to="/cart" className='iconcolor'>
              <ShoppingCart
                size="32"
                color="#FFFFFF"
                variant="Bold"
              /><p className='patch'><p className='patch-txt'>+3</p></p>
            </Link>
          </span>
          <Link to="/login" className='butto-NAV-link' > <button className='butto-NAV' ><p className='conx'>Connexion</p></button></Link>
        </div>

      </header>



    </div>
  )
}

export default NavBar
