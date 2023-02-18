import React from 'react'
import { Grid } from '@mui/material'
import './Contact.css'
import { Location,ArrowRight2,Call,Sms} from 'iconsax-react';
const Contact = () => {
  return (
    
      <div className='contact'>
   <Grid  container  direction="column"  alignItems="center" >
  <Grid item >
    <p className='txt1'> Contactez-nous</p><br/>
     </Grid>
  <Grid item >
  <p className='txt2'>Entrez en contact avec notre équipe. Nous <br/>serions ravis de vous donner un coup de main </p>
   <br/><br/><br/>
   </Grid>
  <Grid item >
  <Grid   container direction="row"  spacing={4}> 

<Grid item  >
  <div className='box'>
<Grid  container  direction="column"  alignItems="center"  >
  <div className='contun_box'>
<Grid item >

<Location className='local' size="32" color="#222222" variant="Bold"/>
</Grid>
<Grid item  >
  <p className='adr_con'>Adresse</p>
</Grid>
<Grid item >
  <p className='txt3'>122 Rue de Makthar, Monastir</p>
</Grid>
<Grid item >
  <p className='txt4'>Emplacement</p><p className='arrow'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone"/></p>
</Grid>
</div>
</Grid>

  </div>
</Grid>

<Grid item  >
  <div className='box'>
<Grid  container  direction="column"  alignItems="center"  >
  <div className='contun_box'>
<Grid item >

<Call size="32" className='local'  color="#222222" variant="Bold"/></Grid>
<Grid item  >
  <p className='adr_con'>Téléphone</p>
</Grid>
<Grid item >
  <p className='txt3-box2'>(+216)20 222 222</p>
</Grid>
<Grid item >
  <p className='txt4-box2'>Appelez-nous</p><p className='arrow2'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone"/></p>
</Grid>
</div>
</Grid>

  </div>
</Grid>

<Grid item  >
  <div className='box'>
<Grid  container  direction="column"  alignItems="center"  >
  <div className='contun_box'>
<Grid item >
  <Sms  className='local'size="32" color="#222222" variant="Bold"/>
</Grid>
<Grid item  >
  <p className='adr_con'>E-mail</p>
</Grid>
<Grid item >
  <p className='txt3'>Contact@maktba.com</p>
</Grid>
<Grid item >
  <p className='txt4-box2'>Entrer en contact</p><p className='arrow3'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone"/></p>
</Grid>
</div>
</Grid>

  </div>
</Grid>



</Grid>
  </Grid>
</Grid>
     
      </div>



  )
}

export default Contact
