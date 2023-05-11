import React, { useEffect,useState } from "react";
import './Detailcomnder.css'
import Avatar from '@mui/material/Avatar';
import {ArrowCircleLeft,Call,Sms,Location} from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../../../assets/Ellipse 503.png"
import img2 from "../../../assets/prod3.png"
import { useDispatch, useSelector } from "react-redux";
import { Detailcomonde } from "../../../Store/Service/Detailcomonde";

const Detailcomnder = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const idcomonde=useParams(":id");
    const [open, setopen] = useState(true);
    const navigat=()=>{
        navigate(`/Vender/Liste_de_commandes`)
    }
    const DetailcomondeClient = useSelector((state) => state.Detailcomonde.Detailcomonde);
    useEffect(() => {
      dispatch(Detailcomonde(idcomonde.id));

    },[]);
console.log(DetailcomondeClient[0])
const data=[{nom:"GOUACHE 9T METAL...",prix:"174 dt",Qté:'2',TotaleHT:"348.00 dt"},{nom:"GOUACHE 9T METAL...",prix:"174 dt",Qté:'2',TotaleHT:"348.00 dt"}]
  return (
    <div className='Detailcomnder'>
       <div className='rowbox-dc'  style={{cursor:"pointer"}} onClick={navigat} ><ArrowCircleLeft size="25" color="#9E9E9E"/>
    <div><p className='txtbox-dc'>Retourner</p></div>
    </div>
    <div>
        <p className='txt1-dc'>Détails de commande</p>
    </div>
    <div className='row1-dc'>
<div className='col1-dc'>
<div className='box1-dc'>
    <div className='border-dc'> </div>
    <div className='colbox1-dc'>
    <div><p className='txtbox1-ddc'># {DetailcomondeClient[0]?.id}</p></div>
    <div>
        <ul className='ul-dc'>
            <li><p className='txtli-dc'>Montant Totale:<span className='txtspanli-dc'>{DetailcomondeClient[0]?.total_ttc} dt</span></p></li>
            <br/>
            <li>Nbr d’article(s):<span className='txtspanli-dc'> {DetailcomondeClient[0]?.produitlabrairies?.length}</span></li>
        </ul>
    </div>
    </div>
 
</div>
<div className='box2-dc'>
<div><p className='txtbox2-dc'>Détails de contact</p></div>
<div className='minirow-dc'><Avatar src={"http://127.0.0.1:8080/uploads/"+DetailcomondeClient[0]?.user?.avatar} className='img-dc'/><div><p className='txt1box3-dc'>{DetailcomondeClient[0]?.user?.fullname}</p></div></div>
<div className='minirow-dc'><Call size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box2-dc'>(+216) {DetailcomondeClient[0]?.user?.telephone}</p></div></div>
<div className='minirow-dc'><Sms size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-dc'>{DetailcomondeClient[0]?.user?.email}</p></div></div>
<div className='minirow-dc'><Location size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-dc'> {DetailcomondeClient[0]?.user?.client?.adresses[0]?.Code_postal}{DetailcomondeClient[0]?.user?.client?.adresses[0]?.Adresse}, {DetailcomondeClient[0]?.user?.client?.adresses[0]?.Ville}</p></div></div>

</div>
<div className='box3-dc'>
<div><p className='txtbox2-dc'>Calendrier</p></div>
<div className='minirow-dc'><div className='cirl-dc'></div><div><p className='txt3box3-dc'>Demande reçu : </p></div>
<div><p className='txt4box3-dc'>20/03/2023</p></div>
</div>

</div>
</div>
<div className='col05-dc'>
<div className='box4-dc'>
<div><p  className='txtbox1-ddc'>Liste des articles</p></div>
<div className='rowbox4-dc'>
<div><p className='txtbox4-dc'>Article</p></div>
<div><p className='txtbox4-dc'>Qté</p></div>
<div><p className='txtbox4-dc'>Totale HT</p></div>
</div>
<table>

{DetailcomondeClient[0]?.produitlabrairies.map((obj,index) => (

<tr >
<td className='widthtd-dc'><div className='row2box4-dc'>
    <img src={"http://127.0.0.1:8080/uploads/"+obj.imagelibrairies[0]. name_Image} className='imgbox4-dc'/>
<div className='colbox4-dc'>  
 <div> <p className='txt3box4-dc'>{obj.titre}</p></div>
<div> <p className='txt4box4-dc'>{obj.prix}dt</p></div>
</div>   

    </div>
</td>
<td className='widthtd1-dc'><p className='txttab-dc'>{obj.produit_c_Detail.Qte}</p></td>
<td><p className='txttab-dc'>{(obj.prix)*(obj.produit_c_Detail.Qte)}</p></td>

</tr>

))}


</table>
</div>
{open?
    <div className='box5-dc'>
<div className='row01box5-dc'>
<div><p className='txtbox5-dc'>Souhaitez-vous accepter cette commande ?</p></div>
<div className='rowbox5-dc'><button className='bntbox5-dc' onClick={()=>{setopen(false)}}>Rejeter</button><button className='bntbox6-dc' onClick={()=>{setopen(false)}}>Accepter</button></div>

</div>

</div>
:<></>
}


</div>

    </div>
    </div>
  )
}

export default Detailcomnder
