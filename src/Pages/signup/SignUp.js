import React from 'react'
import "./signup.css"
import Imge from "../../assest/image1.png"
import { TextField, Grid,Button } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Signup = () => {
  const test = () => {
    alert("button active !!")
  }
  return (
    <div>
      <div className='signup'>

      <Grid
        container spacing={8}
      >
        <Grid item >
          <img className='im' src={Imge} alt="icon" />
        </Grid>
        <Grid item >

          <Grid
            container direction="column" spacing={2.97}
          >
            <Grid item ><br/><br/>
              <div className='Connexion'>S'inscrire</div>
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
                  <Button ><div className='icong'><i class="fab fa-google fa-1x" ></i></div><div className="textgml">Gmail</div></Button>
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
              <TextField className='bnt' label="Nom et Prénom" />
            </Grid>
            <Grid item>
              <TextField className='bnt' label="Email" />
            </Grid>
            <Grid item>
                <TextField className='bnt' label="Mot de passe" type="password" />
              </Grid>
              <Grid item >
                <TextField className='bnt' label="Confirmer mot de passe" type="password" />
              </Grid>
        
          
            <Grid item>
              <Checkbox style={{ color: " #1A110A", }} /><span>j'ai lu et j'accepte <span className='text2'>les conditions générales.</span></span>
            </Grid>
            <Grid item>
            <button className='bnt1' onClick={test}>
                <div className='discription2'>S'inscrire</div></button>
            </Grid>
            <Grid item>
              <div>Avez vous déjà un compte!  <Link to="/login" className="textc"> Connexion</Link></div>
            </Grid>

          </Grid >


        </Grid >
      </Grid>
      </div>


    </div>
  )
}

export default Signup
