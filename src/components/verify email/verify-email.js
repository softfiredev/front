import React, { useState }  from 'react'
import './verify-email.css'
import {  Grid, OutlinedInput} from '@mui/material'
const Verify_email = (props) => {
  const [mail,setmail] = useState("");
  
  const chang=()=>{
    if(mail.length!==0)
    {
      let reg = /^[a-z-A-Z0-9-_.]+@[a-z-A-Z0-9-_]{2,}[.][a-z-A-Z]{2,3}$/
      let result = ((reg.exec(mail)!=null));
      if(result===true){
        props.onClick()
      }
      else{
        alert("email n'est pas valide")
      }
      
    }
    
  } 
  const handlemail=(e)=>{
    setmail(e.target.value);
  }
  return (
        <div className='group1' >
        <Grid container direction="column" spacing={3}  >
        <Grid item md={10}> <p className='recupere0'> Récupérer le mot de passe</p></Grid ><br/>
        <Grid item >  <p className='email-pass'>Votre adresse e-mail </p></Grid >
        <Grid item>
        <OutlinedInput className='inpt-pass' placeholder="Email"onChange={handlemail} value={mail}   />           
            </Grid>
            <Grid item>
            <button className='bntn1'onClick={chang} >
                <div className='bnt-pass'>Envoyer à votre e-mail</div></button>
            </Grid>
       </Grid >
        </div>
        
        
       
  
  )
}

export default Verify_email
