import React from 'react'
import './Detailcomnder.css'
import {ArrowCircleLeft,Call,Sms,Location} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/Ellipse 503.png"
import img2 from "../../../assets/prod3.png"

const Detailcomnder = () => {
    const navigate = useNavigate();

    const navigat=()=>{
        navigate(`/Vender/Liste_de_commandes`)
    }
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
    <div><p className='txtbox1-ddc'>#103429</p></div>
    <div>
        <ul className='ul-dc'>
            <li><p className='txtli-dc'>Montant Totale:<span className='txtspanli-dc'> 1371.00 dt</span></p></li>
            <br/>
            <li>Nbr d’article(s):<span className='txtspanli-dc'> 7</span></li>
        </ul>
    </div>
    </div>
 
</div>
<div className='box2-dc'>
<div><p className='txtbox2-dc'>Détails de contact</p></div>
<div className='minirow-dc'><img src={img1} className='img-dc'/><div><p className='txt1box3-dc'>122 Rue de bourguiba, mahdia</p></div></div>
<div className='minirow-dc'><Call size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box2-dc'>Amine ben amine</p></div></div>
<div className='minirow-dc'><Sms size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-dc'>(+216) 20 222 222</p></div></div>
<div className='minirow-dc'><Location size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-dc'>amine.benamine@gmail.com</p></div></div>

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

{data.map((obj,index) => (

<tr >
<td className='widthtd-dc'><div className='row2box4-dc'>
    <img src={img2} className='imgbox4-dc'/>
<div className='colbox4-dc'>  
 <div> <p className='txt3box4-dc'>Article</p></div>
<div> <p className='txt4box4-dc'>174 dt</p></div>
</div>   

    </div>
</td>
<td className='widthtd1-dc'><p className='txttab-dc'>{obj.Qté}</p></td>
<td><p className='txttab-dc'>{obj.TotaleHT}</p></td>

</tr>

))}


</table>
</div>

<div className='box5-dc'>
<div className='row01box5-dc'>
<div><p className='txtbox5-dc'>Souhaitez-vous accepter cette commande ?</p></div>
<div className='rowbox5-dc'><button className='bntbox5-dc'>Rejeter</button><button className='bntbox6-dc'>Accepter</button></div>

</div>

</div>


</div>

    </div>
    </div>
  )
}

export default Detailcomnder
