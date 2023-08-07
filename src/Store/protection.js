import { Navigate,useLocation,useParams} from "react-router-dom"; 
import Notfound from "../Pages/not-found/Not-found";


const Protection = ({children,user}) => {
const location = useLocation();
const { id } = useParams();

if((location.pathname==="/login"|| location.pathname==="/Signup" ||location.pathname==="/New_password"))
{
  
  if( user.auth===false)
  {
    return children
  }
  else{return <Navigate to={"/"}/>}
}

if(user.auth==true &&user.role==="labrairie"&&user.etatCompte==="active" )
{
  const s=location.pathname.substring(location.pathname.length,location.pathname.indexOf("n/")+2)
  const c=location.pathname.substring(location.pathname.length,location.pathname.indexOf("e/")+2)

  if((location.pathname==="/Vender/Liste_de_commandes"||location.pathname==="/Vender/Details_de_commande/"+c||location.pathname==="/vender"||location.pathname==="/Vender/Liste_de_produits"||location.pathname==="/Vender/Inventaire"||location.pathname==="/Vender/Liste_de_livraisons"||location.pathname==="/Vender/Details_de_livraison/"+s||location.pathname==="/Vender/Approvisionner"||location.pathname==="/Vender/Factorisation"||location.pathname==="/Vender/Profile"||location.pathname==="/Vender/Gestion_de_points"||location.pathname==="/Vender/TableauDuBord"))
  {
    return children
  }
else{return <Notfound url={"/Vender/TableauDuBord"}/>}
}


if(user.role==="client" &&user.auth==true &&user.etatCompte==="active" )
{
  
if((location.pathname==="/Profile/Monidentite" || location.pathname==="/Profile"|| location.pathname==="/Profile/MesPoints" || location.pathname==="/Profile/Avis" || location.pathname==="/Profile/Commandes" || location.pathname==="/Profile/Favoris"))
{
  return children
}
else{return <Notfound url={"/Profile/Monidentite"}/>}
}
const s1=location.pathname.substring(location.pathname.length,location.pathname.indexOf("t/")+2)

if(user.role==="Admin" &&user.auth==true &&user.etatCompte==="active" )
{
  
if((location.pathname==="/Admin/details_Partenaires/"+id ||location.pathname==="/Admin/details_client/"+id ||location.pathname==="/Admin/Details_de_livraisons/"+id ||location.pathname==="/Admin/Details_de_commande/"+id ||location.pathname==="/Admin/Liste_de_livraisons" ||location.pathname==="/Admin/Liste_de_commandes" ||location.pathname==="/Admin/AjouteGategories" ||location.pathname==="/Admin/TableauDuBord" ||location.pathname==="/Admin/Categories" ||location.pathname==="/Admin/Liste_de_demande" || location.pathname==="/Admin"|| location.pathname==="/admin"|| location.pathname==="/Admin/Produits"|| location.pathname==="/Admin/Modifier_produit/"+s1|| location.pathname==="/Admin/Ajouter_un_produit" || location.pathname==="/Admin/ListeClients" ||  location.pathname==="/Admin/ListeFournisseurs"||  location.pathname==="/Admin/ListeVendeurs"||  location.pathname==="/Admin/ListePartenaires"))
{
  return children
}
else{return <Notfound url={"/Admin/TableauDuBord"}/>}
}
if(user.role==="fournisseur" &&user.auth==true &&user.etatCompte==="active" )
{

if((location.pathname==="/fournisseur" || location.pathname==="/fournisseur/Liste_de_livraisons"|| location.pathname==="/fournisseur/Détails_de_livraison/"+id || location.pathname==="/fournisseur/Liste_de_commandes" || location.pathname==="/fournisseur/Détails_de_commandes/"+id || location.pathname==="/fournisseur/Factorisation"|| location.pathname==="/fournisseur/Profile"))
{
  return children
}
else{return <Notfound url={"/fournisseur"}/>}
}


if(user.role==="partenaire" &&user.auth==true &&(user.etatCompte==="active"||user.etatCompte===null) )
{
  
if((location.pathname==="/partenaire"|| location.pathname==="/partenaire/commandes"|| location.pathname==="/partenaire/Mes_points"|| location.pathname==="/partenaire/Mes_Favoris"|| location.pathname==="/partenaire/Profile" || location.pathname==="/partenaire/Avis"))
{
  return children
}
else{return <Notfound url={"/partenaire"}/>}
}




if(user.auth===false || user.etatCompte==="bloque")
{
 return <Notfound url={"/login"}/>
}




}
export default Protection
