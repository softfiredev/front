import React from 'react'
import "./signup.css"
import Imge from "../../assest/image1.png"

import { TextField, Grid } from '@mui/material'

import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Icongoogle from '../../assest/google.png';
const Signup = () => {
  const test = () => {
    alert("button active !!")
  }
  return (
    <div>
      <div className='main'>

        <Grid container direction="row" spacing={2}>
          <Grid item xs>
            <div> <img className='im' src={Imge} alt="icon" /></div>
          </Grid>
          <Grid item container direction="column" xs spacing={2}>

            <Grid item xs={5} md={1}>
              <div className='Connexion'>S'inscrire</div>

            </Grid>
            <Grid item xs={1} md={1} >
              <div className='content' >Continue avec</div>

            </Grid>
            <Grid item xs={1} md={1}>
              <Grid container direction="row" spacing={3}>
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
              <TextField style={{ width: "416px", height: "52px" }} fullWidth label="Nom et Prénom" />
            </Grid>
            <Grid item >
              <TextField style={{ width: "416px", height: "52px" }} fullWidth label="Email" />
            </Grid>
            <Grid item >
              <TextField style={{ width: "416px", height: "52px" }} fullWidth label="Mot de passe" type="password" />
            </Grid>
            <Grid item xs={1}>
              <TextField style={{ width: "416px", height: "52px" }} fullWidth label="Confirmer mot de passe" type="password" />
            </Grid>



            <Grid item>
              <div className='oblie'><Link to="#">Mot de passe oublié?</Link></div>
            </Grid>

            <Grid item >
              <Checkbox style={{ color: " #1A110A", }} /><span className='text3' >J'ai lu et j'accepte les conditions générales.</span>
            </Grid>

            <Grid item >
              <button className='bnt' onClick={test}>
                <div className='discription2'> S'inscrire</div></button>

            </Grid>

            <Grid item >
              <div>Avez vous déjà un compte!  <Link to="/Login" className="textc">Connexion</Link></div>
            </Grid>
          </Grid>

        </Grid>
      </div>

    </div>
  )
}

export default Signup
