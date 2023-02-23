import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import Imge from "../../assest/image1.png"
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { OutlinedInput, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Eye, EyeSlash } from 'iconsax-react';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const test = () => {
    alert("button active !!")
  }

  return (
    <div className='login'>

      <Grid
        container spacing={6}
      >
        <Grid item >
          <img className='im' src={Imge} alt="icon" />
        </Grid >
     
        <Grid item  >
          <div />
          <Grid container direction="column" spacing={3}     >
          <div className='espa'></div>
            <Grid item >
              <h1 className='Connexion'>Connexion</h1>
            </Grid >
            <Grid item >
              <p className='content' >Continue avec</p>
            </Grid>
            <Grid item >
              <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start"
              >
                <Grid item xs={4.7}>
                  <button className="btn default"><div className='icong'><i className="fab fa-google fa-1x" ></i></div><p className="textgml">Gmail</p></button>
                </Grid>
                <div className='esp'></div>
                <Grid item>
                  <button className="btn default"><div className='iconf'><Facebook style={{ width: "20px", height: "20px" }} /></div> <div className='textfbk'>Facebook</div></button>
                </Grid>

              </Grid>
            </Grid>
            <Grid item className='ar'>
              <p className='adr'>Ou avec votre adresse e-mail</p>
            </Grid>

            <Grid item>
              <OutlinedInput className='inpu' placeholder="Email" />
            </Grid>
            <Grid item>

              <OutlinedInput className='inpu'

                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton style={{ color: "#222222" }}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >

                      {showPassword ? <EyeSlash size="28.5" color="#222222" /> : <Eye size="28.5" color="#222222" />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Password"
              />
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="baseline"
              >
                <Link to="/New_password" className='obli' >Mot de passe oublié  ?</Link>
              </Grid>
            </Grid>

            <Grid item container spacing={2}>
              <Checkbox style={{ color: " #E9B949" ,marginTop:"-2.2%"}} /><span ><p className="Souviens">Souviens-toi de moi</p></span>
            </Grid>
            <Grid item>
              <button className='bntn1' onClick={test}>
                <div className='textbntConnexionn'>Connexion</div></button>
            </Grid>
            <Grid item>
              <p>Vous n'avez pas de compte !<Link to="/Signup" className="textc"> S'inscrire</Link></p>
            </Grid>

          </Grid >


        </Grid >
      </Grid>

    </div>






  )
}

export default Login
