import React from 'react'
import './navbar.css'
import Imge from "../../assest/logo.png"
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'iconsax-react';
import Minuicon from '../minu-icon/minu';

function NavBar() {


  return (
    <div className='nav'>
      <header className="header">
        <div className="logo">
          <Link to="/home"> <img src={Imge} alt="logo" /></Link>
          <div className='icon-menu'>
            <Minuicon   />
            </div>

          </div>
        <div className='groupli'>
          <ul className="main-nav">
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="#">Shop</Link>
            </li>
            <span className="material-symbols-outlined">expand_more</span>
            <li><Link to="AboutUs">À propos</Link></li>
            <li><Link to="BecomeaPartner">Devenir partenaire</Link></li>
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
