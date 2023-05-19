import React from 'react'
import './Transformer_points2.css'
import { SearchNormal1,ArrowCircleLeft} from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";

const Transformer_points2 = (props) => {
    const data=[{nom:"100pts (20 dinars)"},{nom:"200pts (40 dinars)"},{nom:"500 (120 dinars)"},{nom:"1000 (300 dinars)"},{nom:"Auter :"}]

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
<div className='colini-Tf2'>
 
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

    <div className='rowinput-Tf2'>
    <OutlinedInput className="s-Tf2"placeholder={"(Minimum 50pts)"}/>
<div> <p className='txt25-Tf2'>=</p></div>
    <OutlinedInput className="s-Tf2" value={"0dt"}/>

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

export default Transformer_points2
