import React from 'react'
import './Transformer_points1.css'
import { SearchNormal1,ArrowCircleLeft} from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";

const Transformer_points1 = (props) => {
  const data=[{nom:"Fly Delivery"},{nom:"Errahma Maktba"}]
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

<div>       <OutlinedInput className="search-Tf1"placeholder={"Rechercher..."}
              endAdornment={
                <InputAdornment position="end">
                  <SearchNormal1 size="19" color="#B1B1B1" />
                </InputAdornment>
              }
            />
  </div>
<div>
  <p>Convertissez vos points avec:</p>
</div>
<div className='colini-Tf1'>
 
{data.map((obj, index) => (
 <div className='rowmini-Tf1'>
 <input
    type="Radio"
    className="radio-Tf1"
    name="r0"
  />

    <div><p className='txt7-Tf1'>{obj.nom} </p></div>

 </div>

))}
    </div>
    <div className="minirow-Tf1">
                <button className="bnt3-Tf1" >
                Annuler
                </button>
                
 <button className="bnt4-Tf1"  onClick={()=>{props.onClick()}}>
Valider
</button>

               
              </div>



    </div>
  )
}

export default Transformer_points1
