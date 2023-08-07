import React from 'react'
import './navbar.css'
import Imge from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart,ArrowDown2, ProfileCircle, Logout } from 'iconsax-react';
import Menuicon from '../menu-icon/minu';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
function NavBar(props) {
  const clientData = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  const navigate = useNavigate();
  const Lsogout = () => {
    localStorage.removeItem("persist:root");
    navigate("/login");
    navigate(0);
  };
  const nbprod=useSelector(state=> state.Panier.nbprod)
console.log(props.user)
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
           <a href="/home"> <li>Accueil</li></a>
           <a href="/Shop"> <li>Shop </li></a>
            <a href="/AboutUs"><li>À propos</li></a>
           <a href="/BecomePartner"> <li>Devenir partenaire</li></a>
          <a href="/Contact">  <li>Contact</li></a>
          </ul>
        </div>
        <div className='group032'>
          <div className="cartchop">

          <span>
            <a href={props?.user?.etatCompte==="bloque"?null:"/cart"} className='iconcolor'>
              <ShoppingCart
                size="32"
                color="#FFFFFF"
                variant="Bold"
              /><p className='patch'><p className='patch-txt'>+{nbprod}</p></p>
            </a>
          </span>
          </div>
         <div>
         <Link to="/login" className={props.user.auth?"butto-NAV-link-none":"butto-NAV-link"} > <button className='butto-NAV' ><p className='conx'>Connexion</p></button></Link>
          {props?.user?.etatCompte==="bloque" &&props.user.auth?
<div style={{cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",gap:"1em"}} onClick={Lsogout}>
<Logout
 size="32"
 color="#fff"
 variant="Bold"
/>
<div><p style={{color:"#fff"}}>LogOut</p></div>
</div>
:
<Link to={props.user.role==="client"?"Profile/Monidentite":props.user.role==="labrairie"?"/Vender/TableauDuBord":props.user.role==="Admin"?"/Admin/TableauDuBord":props.user.role==="partenaire"?"/partenaire":props.user.role==="fournisseur"?"/fournisseur":""} >
<div className={props.user.auth?"section_user":"section_user-none"}>
        <p className='username'> {props.user?.fullname}</p>
        <Avatar  style={{ height: "26px", width: "26px" }}  src={"http://localhost:8080/uploads/"+props.user.avatar} className="avrt-pagenave" />
</div>
</Link>
          }
          
  
          </div>
    
        </div>

      </header>
      




    
  )
}

export default NavBar
