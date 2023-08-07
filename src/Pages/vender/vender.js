import React, { useEffect, useState } from "react";
import logo from "../../assets/logo10.png";
import img from "../../assets/Ellipse 503.png";
import minilogo from "../../assets/Logomini (2).png";
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

import "./vender.css";
import { Link, Outlet } from "react-router-dom";
import { Globalvariable2 } from "../../Store/Service/Globalvariable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import addNotification from 'react-push-notification';
import { Base_url, Path } from "../../config/Config";
import axios from "axios";
const Vender = (props) => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("persist:root");
    navigate("/login");
    navigate(0);
  };
  const linkarray = [
    {
      linkname: "Tableau du bord",
      icon: <Chart2 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Vender/TableauDuBord"
    },
    {
      linkname: "Liste de produits",
      icon: <Element4 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Vender/Liste_de_produits"
    },
    {
      linkname: "Inventaire",
      icon: <Shop size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Vender/Inventaire"
    },
    {
      linkname: "Liste commandes",
      icon: <Box size="32" color="#7E7E7E" variant="Bulk"  />,
      linkto :"/Vender/Liste_de_commandes"
    },
    {
      linkname: "Liste livraisons",
      icon: <TruckFast size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Vender/Liste_de_livraisons"
    },
    {
      linkname: "Approvisionner",
      icon: <ShoppingCart size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Vender/Approvisionner"
    },
    {
      linkname: "Gestion de points",
      icon: <Graph size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Vender/Gestion_de_points"
    },
    {
      linkname: "Factorisation",
      icon: <Receipt1 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Vender/Factorisation"
    },
 
    {
      linkname: "Profile",
      icon: <img src={img} alt="profil" className="profil" />,
      linkto :"/Vender/Profile"
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
  const [all, setAll] = React.useState([]);
  const Allcomnde = async () => {
    try {
      const response = await axios.get(Base_url + Path.findCommandeBylibrairie + props?.user.id);
     
      const hasNouveau = response?.data?.commandes.some(item => item.etatVender === 'Nouveau');
      const filter = response?.data?.commandes.filter(item => item.etatVender === 'Nouveau');
      setAll(filter.length)
      if(hasNouveau)
     {
      Notification()
     }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    Allcomnde()
  }, []);
  const Notification = () => {
    addNotification({
      title: 'Maktba.tn',
      message: 'nouvelle commande a ete Ajoute',
      duration: 30000,
      icon:minilogo,
      native: true,

    });
  };

  return (
    <div className="categoriePage">
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
         <div >   
          {
           e.linkname==="Liste commandes" && all!==0 ?
<div className="boxListe">  <div><p className="txt0214">{e.linkname}</p></div><div className="boxpatg">{all}</div> </div>
    :<p className="txt0214">{e.linkname}</p> 
          }
            
             </div>
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
      <main className="contentee"> 
  <Outlet /> 
  </main>
    
    </div>
  );
};
export default Vender;
