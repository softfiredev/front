import React, { useState } from 'react'
import './add-new-password.css'
import { TextField, Grid, OutlinedInput,IconButton  } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import { Eye,EyeSlash} from 'iconsax-react';

const Add_new_password = (props) => {
  const [password, setpassword] = useState("");
  const [Confirmerpassword, setConfirmerpassword] = useState("");
 
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Chang=()=>{
    if(password.length!==0 &&Confirmerpassword!==0)
    {
      if(password===Confirmerpassword)
      {     
        props.onClick()
      }
      else{
        alert("verify Confirmer password")
      }
    
    }
 
 } 

 const handlepassword = (e) => {
  setpassword(e.target.value);
}
const handleconformationpassword = (e) => {
  setConfirmerpassword(e.target.value);

}
  return (
    <div>
      <div className='group2' >
        <Grid container direction="column" spacing={3}  >
        <Grid item md={10}  > <p className='recupere2'> Récupérer le mot de passe</p></Grid ><br/>
        <Grid item >  <p className='email-pass2'>Nouveau mot de passe</p></Grid >
        <Grid item>

        <OutlinedInput  className='inpt-pass2'
            type={showPassword ? 'text' : 'password'}onChange={handlepassword}  value={password}
             endAdornment={
              <InputAdornment position="end">
                <IconButton style={{color:"#222222"}}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <EyeSlash size="28.5" color="#222222"/> : <Eye size="28.5" color="#222222"/>}
                </IconButton>
              </InputAdornment>
            }
          placeholder="Password"
          />
            </Grid>
            <Grid item>
              <TextField className='inpt-pass2' placeholder="Confirmer mot de passe"type="password"  onChange={handleconformationpassword} value={Confirmerpassword} />
            </Grid>
            <Grid item>
            <button className='bntn1'onClick={Chang} >
                <div className='bnt-pass2'>Réinitialiser</div></button>
            </Grid>
       </Grid >
        </div>
    </div>
  )
}

export default  Add_new_password 
