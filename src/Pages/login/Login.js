import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import Imge from "../../assest/image1.png"
import { TextField, Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';

const Login = () => {
  const test = () => {
    alert("button active !!")
  }

  return (
    <div className='login'>

      <Grid
        container spacing={8}
      >
        <Grid item >
          <img className='im' src={Imge} alt="icon" />
        </Grid >
     
        <Grid item  >
         <div className='lo' />
          <Grid
            container direction="column" spacing={3} 
          >
            <Grid item >
              <h1 className='Connexion'>Connexion</h1>
            </Grid >
            <Grid item >
              <p className='content' >Continue avec</p>
            </Grid>
            <Grid item >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={4.7}>
                <button class="btn default"><div className='icong'><i className="fab fa-google fa-1x" ></i></div><p className="textgml">Gmail</p></button>         
                </Grid>
                <Grid item>

                  
                <button class="btn default"><div className='iconf'><Facebook style={{ width: "20px", height: "20px" }} /></div> <div className='textfbk'>Facebook</div></button>
                </Grid>

              </Grid>
            </Grid>
            <Grid item>
              <p className='adr'>Ou avec votre adresse e-mail</p>
            </Grid>
         
            <Grid item>
              <TextField className='inpu' placeholder="Email" />
            </Grid>
            <Grid item>
              <TextField className='inpu' placeholder="Mot de passe" type="password" />
            </Grid>
            <Grid item>
            <Grid
  container
  direction="row-reverse"
  justifyContent="flex-start"
  alignItems="baseline"
>
              <Link to="/password"><p className='obli' >Mot de passe oublié  ?</p></Link>
            </Grid>
            </Grid>
            
            <Grid item   container spacing={2}>
              <Checkbox style={{ color: " #1A110A", }} /><span ><p className="Souviens">Souviens-toi de moi</p></span>
            </Grid>
            <Grid item>
            <button className='bntn1' onClick={test}>
                <div className='textbntConnexion'>Connexion</div></button>
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
