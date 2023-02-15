import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import Imge from "../../assest/image1.png"
import { TextField, Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import Icongoogle from '../../assest/google.png';
const Login = () => {
  const test = () => {
    alert("button active !!")
  }

  return (
    <div className='main'>

      <Grid container direction="row" spacing={4}>
        <Grid item xs>
          <div> <img className='im' src={Imge} alt="icon" /></div>
        </Grid>
        <Grid item container direction="column" xs spacing={2}>
          <br />
          <Grid item xs={5} md={1}>
            <div className='Connexion'>Connexion</div>

          </Grid>
          <Grid item xs={1} md={1} >
            <div className='content' >Continue avec</div>
            <br />
          </Grid>
          <Grid item xs={1} md={1}>
            <Grid container direction="row" spacing={4}>
              <button className='gmail' onClick={test}>
                <div className="grid-container">
                  <div className="grid-item"><img className="icongoogle" src={Icongoogle} alt="icon" /></div>
                  <div className="grid-item">Gmail</div>
                </div>
              </button>
              <button className='facebook' onClick={test}>
                <div className="grid-container2">
                  <div><Facebook className='icon' /></div>
                  <div className="textfacebook">Facebook</div>

                </div>
              </button>
            </Grid>
          </Grid>
          <Grid item xs={6} md={1}>
            <div className='adr'>Ou avec votre adresse e-mail</div>
          </Grid>


          <Grid item >
            <TextField style={{ width: "416px", height: "52px" }} fullWidth label="Email" />
          </Grid>
          <br />
          <Grid item xs={1}>
            <TextField style={{ width: "416px", height: "52px" }} fullWidth label="Mot de passe" type="password" />
          </Grid>



          <Grid item>
            <div className='oblie'><Link to="#">Mot de passe oublié?</Link></div>
          </Grid>

          <Grid item >
            <Checkbox style={{ color: " #1A110A", }} /><span >Souviens-toi de moi</span>
          </Grid>

          <Grid item >
            <button className='bnt' onClick={test}>
              <div className='discription2'>Connexion</div></button>
          </Grid>

          <Grid item > <br />
            <div  >Vous n'avez pas de compte !<Link to="/Signup" class="textc"> S'inscrire</Link></div>
          </Grid>
        </Grid>

      </Grid>
    </div>






  )
}

export default Login
