import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import Imge from "../../assest/image1.png"
import { TextField, Grid, Button } from '@mui/material'
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
        </Grid>
        <Grid item >

          <Grid
            container direction="column" spacing={2.7}
          ><br/><br/><br/>
            <Grid item >
              <div className='Connexion'>Connexion</div>
            </Grid >
            <Grid item >
              <div className='content' >Continue avec</div>
            </Grid>
            <Grid item >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item >
                  <Button ><div className='icong'><i className="fab fa-google fa-1x" ></i></div><div className="textfbk">Gmail</div></Button>
                </Grid>
                <Grid item>
                  <Button ><div className='iconf'><Facebook style={{ width: "20px", height: "20px" }} /></div> <div className='textfbk'>Facebook</div></Button>
                </Grid>

              </Grid>
            </Grid>
            <Grid item>
              <div className='adr'>Ou avec votre adresse e-mail</div>
            </Grid>
         
            <Grid item>
              <TextField className='bnt' label="Email" />
            </Grid>
            <Grid item>
              <TextField className='bnt' label="Mot de passe" type="password" />
            </Grid>
            <Grid item>
            <Grid
  container
  direction="row-reverse"
  justifyContent="flex-start"
  alignItems="baseline"
>
              <p className='obli'><Link to="#">Mot de passe oublié  ?</Link></p>
            </Grid>
            </Grid>
            
            <Grid item   container spacing={2}>
              <Checkbox style={{ color: " #1A110A", }} /><span ><div className="Souviens">Souviens-toi de moi</div></span>
            </Grid>
            <Grid item>
            <button className='bnt1' onClick={test}>
                <div className='discription2'>Connexion</div></button>
            </Grid>
            <Grid item>
              <div>Avez vous déjà un compte!  <Link to="/Signup" className="textc"> S'inscrire</Link></div>
            </Grid>

          </Grid >


        </Grid >
      </Grid>
    </div>






  )
}

export default Login
