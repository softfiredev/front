import React from 'react'
import './Récupérer.css'
import { TextField, Grid } from '@mui/material'

const Récupérer = (props) => {
  const chang=()=>{
     props.onClick()
  } 
 console.log(props)
  return (
        <div className='group1' >
        <Grid container direction="column" spacing={3}  >
        <Grid item md={10}> <p className='recupere'> Récupérer le mot de passe</p></Grid ><br/>
        <Grid item >  <p className='email-pass'>Votre adresse e-mail </p></Grid >
        <Grid item>
              <TextField className='inpt-pass' placeholder="Email" />
            </Grid>
            <Grid item>
            <button className='bntn1'onClick={chang} >
                <div className='bnt-pass'>Envoyer à votre e-mail</div></button>
            </Grid>
       </Grid >
        </div>
        
        
       
  
  )
}

export default Récupérer
