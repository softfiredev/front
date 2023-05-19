import React from 'react'
import './Transformer_points3.css'
import { SearchNormal1,ArrowCircleLeft} from "iconsax-react";
const Transformer_points3 = (props) => {
  return (
    <div className='Tf1'>
    <div className='row-Tf1' onClick={()=>{props.onRetourner()}}>
    <ArrowCircleLeft
     size="22"
     color="#222"
    />
      <div><p>Retourner</p></div>
    </div>
    <div><p className='txt-Tf1'>Transformer mes points</p></div>
   <div className='prag-Tf3'>
    <p>
     Vous avez transféré <span className='txth-Tf3'>200pts</span> (40 dinars), avec <span className='txth-Tf3'>Errahma Maktba</span>.
     Votre code est le <span className='txth-Tf3'>#1258E6</span>.
     Il sera enregistré dans votre espace "mes points".
     Une fois validé, ce code ne fonctionnera plus.
    </p>
   </div>
 

    
    
    
        </div>
  )
}

export default Transformer_points3
