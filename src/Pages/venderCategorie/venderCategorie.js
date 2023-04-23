import React from "react";
import logo from "../../assets/logo10.png";
import img from "../../assets/Ellipse 503.png"
import { Chart2,Element4,Shop,Box,TruckFast,ShoppingCart,Graph,Receipt1,LogoutCurve} from "iconsax-react";
const VenderCategorie = () => {
  const linkarray=[
    {
      linkname: "Tableau du bord",
      icon: <Chart2 size="32" color="#FF8A65" variant="Bulk" />,
    },
    {
  
      linkname: "Catégories",
      icon: <Element4 size="32" color="#FF8A65" variant="Bulk"/>,
    },
    {
    
      linkname: "Inventaire",
      icon: <Shop size="32" color="#FF8A65" variant="Bulk"/>,
    },
    {
    
      linkname: "Liste de commandes",
      icon: <Box size="32" color="#FF8A65" variant="Bulk"/>,
    },
    {
      
      linkname: "Liste de livraisons",
      icon:<TruckFast size="32" color="#FF8A65" variant="Bulk"/> ,
    },
    {
   
      linkname: "Approvisionner",
      icon: <ShoppingCart size="32" color="#FF8A65" variant="Bulk"/>,
    },
    {
      linkname: "Gestion de points",
      icon: <Graph size="32" color="#FF8A65" variant="Bulk"/>,
    },
    {
      linkname: "Factorisation",
      icon: <Receipt1 size="32" color="#FF8A65" variant="Bulk"/>,
    },
  ];
  console.log(linkarray) ;
  return (
    <div className="categoriePage">
      <div className="side-bar">
        <img src={logo} alt="maktba" />
        <div className="link-side-bar">
            {linkarray.map((e,key)=>(
                <div className="link">
                        {e.icon}
                        <p>{e.linkname}</p>
                </div>
            ))}
        </div>
        <div className="profile-container1">
             <img src={img} alt="profil"/>
             <p className="titreProfile">Profile</p>       
        </div>
        <div className="deconnecter-box">
            <LogoutCurve size="32" color="#FF8A65" variant="Bulk"/>  
            <p>Se déconnecter</p>     
        </div>
      </div>
      <div className="pages-container1">
            <div className="header-page-categorie"> 
                <h1 className="title-page-categorie">Catégories</h1>
                <button className="btn-suggestion">Faire une suggestion</button>
            </div>     
      </div>
    </div>
  );
};
export default VenderCategorie;
