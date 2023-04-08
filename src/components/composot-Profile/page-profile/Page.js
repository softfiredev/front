import React from 'react'
import './page.css'
import { OutlinedInput} from '@mui/material'
const Page = () => {
  return (
    <div>
      <div  className='carts2'>
<div className='col1-page1'>
  
<div className='txt1-carts2'>Mon identité</div>
<div className='col2-profile'><div className='txt-profile3'>Nom et Prénom</div><OutlinedInput className='input-pro' /></div>
<div className='col2-profile'><div className='txt-profile3'>Email</div><OutlinedInput className='input-pro' /></div>
<div className='col2-profile'><div className='txt-profile3'>Numéro de téléphone</div><OutlinedInput className='input-pro' /></div>
<div className='col2-profile'><div className='txt-profile3'>Date de naissance</div><OutlinedInput className='input-pro' /></div>
<button className='bnt-pro3'><p className='txtbnt-pro2'>Valider</p></button>

</div>
</div>
    </div>
  )
}

export default Page
