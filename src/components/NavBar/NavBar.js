import React from 'react'
import './navbar.css'
import Imge from "../../assest/logo.png"
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div className='nav'>
      <header className="header">
        <div className="logo">
        <Link to="/home"> <img src={Imge} alt="logo" /></Link></div>
        <div className='groupli'>
          <ul className="main-nav">
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="#">Shop</Link>
              </li>
            
            
            <span className="material-symbols-outlined">expand_more</span>



            <li><Link to="#">À propos</Link></li>
            <li><Link to="#">Devenir partenaire</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
        <div className='group'>
          <span className="material-symbols-outlined">
            <Link to="#" className='iconcolor'>
              shopping_cart
            </Link>
          </span>
          <button className='button' ><Link to="login"><p className='conx'>Connexion</p></Link></button>
        </div>

      </header>



    </div>
  )
}

export default NavBar
