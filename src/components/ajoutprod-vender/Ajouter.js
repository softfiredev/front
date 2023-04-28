import React from 'react'
import "./Ajouter.css"
import {Box,Import} from "iconsax-react";
import { OutlinedInput, IconButton } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const Ajouter = () => {
  return (
    <div className='box-ajout'>
<div className='col-ajout'>
    <div className='cube-ajout'><div className='contbox-ajout'><Box size="25" color="#222222" variant="Bold"/></div></div>
    <div><p className='txt-ajout'>Détails du produit</p></div>
    <div><p className='txt1-ajout'>Ces informations aideront les clients à trouver votre produit parmi d'autres.</p></div>

</div>

<div className='col2-ajout'>
    <div className='downlod-ajout'>

        <div className='downlod2-ajout'><Import size="30" color="#222222" variant="Outline"/></div>
   <p className='txt3-ajout'>Télécharger un ou plusieurs photos</p>
    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Nom de produit</p></div>
        <OutlinedInput placeholder='Nome' />

    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Prix</p></div>
        <OutlinedInput placeholder='Prix' />
    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Catégorie</p></div>
        <Select className='txt-select' defaultValue="Par pertinence" style={{ width: "500px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em className='txt-select-ajout'>Scolaire</em>
                    </MenuItem>
                  
                    <MenuItem value={1} className='txt-select'>Meilleurs ventes</MenuItem>
                    <ListSubheader></ListSubheader>
                 
                </Select>
    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Quantité</p></div>
        <OutlinedInput placeholder='Nome' />
    </div>

<div className='rowbnt-ajout'><button className='bnt01-ajout'><p className='txtbnt01-ajout'>Annuler</p></button><button  className='bnt02-ajout'><p className='txtbnt02-ajout'>Ajouter</p></button></div>
</div>
    </div>
  )
}

export default Ajouter
