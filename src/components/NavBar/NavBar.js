import React from 'react'
import './navbar.css'
import Imge from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { ShoppingCart,ArrowDown2, ProfileCircle } from 'iconsax-react';
import Menuicon from '../menu-icon/minu';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
function NavBar(props) {
  const clientData = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  const nbprod=useSelector(state=> state.Panier.nbprod)
  return (

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
        <div className='group032'>
          <div className="cartchop">

          <span>
            <Link to="/cart" className='iconcolor'>
              <ShoppingCart
                size="32"
                color="#FFFFFF"
                variant="Bold"
              /><p className='patch'><p className='patch-txt'>+{nbprod}</p></p>
            </Link>
          </span>
          </div>
         <div>
         <Link to="/login" className={props.user.auth?"butto-NAV-link-none":"butto-NAV-link"} > <button className='butto-NAV' ><p className='conx'>Connexion</p></button></Link>
          <Link to="/Profile/Monidentité" >
          <div className={props.user.auth?"section_user":"section_user-none"}>
                  <p className='username'> {clientData?.fullname===undefined?props.user?.fullname:clientData?.fullname}</p>
                  <Avatar  style={{ height: "26px", width: "26px" }}  src={clientData?.avatar!==undefined?"http://127.0.0.1:8080/uploads/"+clientData?.avatar:"http://127.0.0.1:8080/uploads/"+props.user.avatar} className="avrt-pagenave" />
          </div>
          </Link>
          </div>
    
        </div>

      </header>
      




    
  )
}

export default NavBar
