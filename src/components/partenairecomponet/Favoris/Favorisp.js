import React from 'react'
import'./Favorisp.css'
import { InputAdornment, OutlinedInput } from '@mui/material'
import { SearchNormal1 } from 'iconsax-react'
import Cardlisteprod from '../../card-produit/cardlisteprod/cardlisteprod'
const produit=[{id:"5142",titre:"COMPAS AVEC CRAYON 2506 INV"},{id:"5142",titre:"COMPAS AVEC CRAYON 2506 INV"},{id:"5142",titre:"COMPAS AVEC CRAYON 2506 INV"},{id:"5142",titre:"COMPAS AVEC CRAYON 2506 INV"},]
const Favorisp = () => {
  return (
    <div className='Favorisp'>
     <div><p className='txt1-Favorisp'>Mes Favoris</p></div>
     <div className='bloq-Favorisp'>
        <div className='row1-Favorisp'>
        <OutlinedInput
          className="input-Favorisp"
          placeholder={"Code, nom de partenaire"}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />

        <select className='select-Favorisp'>
            <option>Catégories</option>
        </select>
        <select className='select-Favorisp'>
            <option>Sous-catégories</option>
        </select>
        </div>

        <div className='grid-container01 '>
        {produit?.map((obj) => (


<div class="grid-item"  ><Cardlisteprod id={obj.id} titre={obj.titre} img={obj?.imageCataloges?.[0].name_Image} Role={'partiner'}/>  </div>

))}
        </div>

     </div>
    </div>
  )
}

export default Favorisp
