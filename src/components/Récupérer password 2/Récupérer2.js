import React from 'react'
import './Récupérer2.css'
import { TextField,Grid } from '@mui/material'

const Récupérer2 = (props) => {
  const chang=()=>{
    props.onClick()
 } 
  return (
    <div>
      <div className='group2' >
        <Grid container direction="column" spacing={3}  >
        <Grid item md={10}  > <p className='recupere2'> Récupérer le mot de passe</p></Grid ><br/>
        <Grid item >  <p className='email-pass2'>Nouveau mot de passe</p></Grid >
        <Grid item>
              <TextField className='inpt-pass2' placeholder="Mot de passe" type="password"/>
            </Grid>
            <Grid item>
              <TextField className='inpt-pass2' placeholder="Confirmer mot de passe"type="password" />
            </Grid>
            <Grid item>
            <button className='bntn1'onClick={chang} >
                <div className='bnt-pass2'>Réinitialiser</div></button>
            </Grid>
       </Grid >
        </div>
    </div>
  )
}

export default Récupérer2
