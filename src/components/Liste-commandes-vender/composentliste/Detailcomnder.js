import React from 'react'
import './Detailcomnder.css'
import {ArrowCircleLeft} from "iconsax-react";
import { useNavigate } from "react-router-dom";
const Detailcomnder = () => {
    const navigate = useNavigate();

    const navigat=()=>{
        navigate(`/Vender/Liste_de_commandes`)
    }
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
<div></div>
</div>
<div></div>

    </div>
    </div>
  )
}

export default Detailcomnder
