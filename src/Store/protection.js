import { Navigate,useLocation } from "react-router-dom"; 

const Protection = ({children,user}) => {
const location = useLocation();

if((location.pathname==="/login"|| location.pathname==="/Signup" ||location.pathname==="/New_password"))
{
  
  if( user.auth===false)
  {
    return children
  }
  else{return <Navigate to="/" />}
}
if(user.auth==true &&user.role==="labrairie" )
{
  const s=location.pathname.substring(location.pathname.length,location.pathname.indexOf("n/")+2)
  const c=location.pathname.substring(location.pathname.length,location.pathname.indexOf("e/")+2)

  if((location.pathname==="/Vender/Liste_de_commandes"||location.pathname==="/Vender/Details_de_commande/"+c||location.pathname==="/vender"||location.pathname==="/Vender/categorie"||location.pathname==="/Vender/Inventaire"||location.pathname==="/Vender/Liste_de_livraisons"||location.pathname==="/Vender/Details_de_livraison/"+s||location.pathname==="/Vender/Approvisionner"||location.pathname==="/Vender/Factorisation"||location.pathname==="/Vender/Profile"||location.pathname==="/Vender/Gestion_de_points"))
  {
    return children
  }
else{return <Navigate to="/" />}
}


if(user.role==="client" &&user.auth==true )
{
  
if((location.pathname==="/Profile/Monidentite" || location.pathname==="/Profile"|| location.pathname==="/Profile/MesPoints" || location.pathname==="/Profile/Avis" || location.pathname==="/Profile/Commandes" || location.pathname==="/Profile/Favoris"))
{
  return children
}
else{return <Navigate to="/" />}
}



if(user.auth===false )
{
 return <Navigate to="/" />
}




}
export default Protection
