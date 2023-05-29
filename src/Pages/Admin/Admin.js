import React, { useState } from "react";
import logo from "../../assets/logo10.png";
import img from "../../assets/Ellipse 503.png";

import {
  Chart2,
  Element4,
  Shop,
  Box,
  TruckFast,
  ShoppingCart,
  Graph,
  Receipt1,
  LogoutCurve,
} from "iconsax-react";

import "./Admin.css";
import { Link, Outlet } from "react-router-dom";
import { Globalvariable2 } from "../../Store/Service/Globalvariable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("persist:root");
    navigate(0);
  };
  const linkarray = [
    {
      linkname: "Tableau du bord",
      icon: <Chart2 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Admin/TableauDuBord"
    },
    
    {
      linkname: "Produits",
      icon: <Element4 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Admin/Produits"
    },
    {
      linkname:<div className="row-admin"><div>Liste de demande </div><div className="circule"><p style={{color:" #222222",fontSize:"10px",fontFamily:"Inter",fontWeight:"600"}}>+4</p></div></div>,
      icon: <Shop size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Admin/Liste_de_demande"
    },
    {
      linkname: "Liste de commandes",
      icon: <Box size="32" color="#7E7E7E" variant="Bulk"  />,
      linkto :"/Admin/Liste_de_commandes"
    },
    {
      linkname: "Liste de livraisons",
      icon: <TruckFast size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Admin/Liste_de_livraisons"
    },
    {
      linkname: "Approvisionner",
      icon: <ShoppingCart size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Admin/Approvisionner"
    },
    {
      linkname: "Gestion de points",
      icon: <Graph size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Admin/Gestion_de_points"
    },
    {
      linkname: "Factorisation",
      icon: <Receipt1 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Admin/Factorisation"
    },
 
    {
      linkname: "Profile",
      icon: <img src={img} alt="profil" className="profil" />,
      linkto :"/Admin/Profile"
    },
  ];
  const dispatch=useDispatch()
  const Globalvariablee=useSelector(state=> state.Globalvariable.Global2)
  const [linkStyle, setLinkStyle] = useState(true);
  const [linkId, setLinkId] = useState(Globalvariablee.length!==undefined?0:Globalvariablee);
  const handleChangeStyleLink = (id) => {
    setLinkStyle(true);
    dispatch(Globalvariable2(id))
      setLinkId(id);
     
  };
 
  return (
    <div className="Admin">
      <div className="side-bar">
    <img src={logo} alt="maktba" className="logo-side" />
        <div className="link-side-bar">
          {linkarray.map((e, key) => (
            <Link to={e.linkto} > 
                    <div   onClick={() => handleChangeStyleLink(key)}
              className={
                linkId === key && linkStyle
                  ? "link"
                  : key === 0 && !linkStyle
                  ? "link"
                  : "linknone"
              }
            >
            <div>      {e.icon}  </div>
         <div>     <p className="txt0214">{e.linkname}</p>  </div>
            </div>
            </Link>
           
          ))}
        </div>
      
        <div className="deconnecter-box" onClick={Logout}>
          <LogoutCurve
            size="22"
            color="#E66A6A"
            variant="Bulk"
            className="iconOut"
          />
          <p className="outText">Se déconnecter</p>
        </div>
      </div>
      <Outlet/>
      
    </div>
  );
};
export default Admin;
