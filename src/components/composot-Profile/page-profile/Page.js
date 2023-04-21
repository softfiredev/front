import React from 'react'
import './page.css'
import { OutlinedInput} from '@mui/material'
import { RefreshSquare,AddCircle} from "iconsax-react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Page = () => {
  return (
    <div>
      <div  className='carts2'>
<div className='col1-page1'>
  
<div className='txt1-carts2'>Mon identité</div>
<div className='col2-profile'><div className='txt-profile3'>Nom et Prénom</div><OutlinedInput className='input-pro' /></div>
<div className='col2-profile'><div className='txt-profile3'>Email</div><OutlinedInput className='input-pro' /></div>
<div className='col2-profile'><div className='txt-profile3'>Numéro de téléphone</div><OutlinedInput className='input-pro' /></div>
<div className='col2-profile'><div className='txt-profile3'>Date de naissance</div>
<LocalizationProvider dateAdapter={AdapterDayjs}  >
        <DatePicker className='input-pro'/>
    </LocalizationProvider>



</div>
<button className='bnt-pro3'><p className='txtbnt-pro2'>Valider</p></button><br/>
<h2>Mon mot de passe</h2>
<div className='rowbnt-page'><RefreshSquare size="22" color="#E9B949 "  variant="Bold"/><div>Changer le mot de passe</div></div>
<h2>Mes adresses</h2>
<div className='rowbnt-page'><AddCircle size="22" color="#E9B949" variant="Bold"/><div>Ajouter une nouvelle adresse</div></div>

</div>
</div>
    </div>
  )
}

export default Page
