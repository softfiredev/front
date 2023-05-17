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
if(user.auth==true )
{
  const s=location.pathname.substring(location.pathname.length,location.pathname.indexOf("n/")+2)
  const c=location.pathname.substring(location.pathname.length,location.pathname.indexOf("e/")+2)
console.log(location.pathname)
  if( user.role==="labrairie"&&(location.pathname==="/Vender/Liste_de_commandes"||location.pathname==="/Vender/Details_de_commande/"+c||location.pathname==="/vender"||location.pathname==="/Vender/categorie"||location.pathname==="/Vender/Inventaire"||location.pathname==="/Vender/Liste_de_livraisons"||location.pathname==="/Vender/Details_de_livraison/"+s||location.pathname==="/Vender/Approvisionner"||location.pathname==="/Vender/Factorisation"||location.pathname==="/Vender/Profile"))
  {
    return children
  }
else{return <Navigate to="/" />}
}


if(user.auth==true )
{
if(user.role==="client")
{
  return children
}
else{return <Navigate to="/Shop" />}
}


if(user.auth===false )
{
return <Navigate to="/" />
}




}
export default Protection
