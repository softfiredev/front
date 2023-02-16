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
        </Grid >
     
        <Grid item  >
         <div className='espace' />
          <Grid
            container direction="column" spacing={3} 
          >
            <Grid item >
              <h1 className='Sinscrire'>S'inscrire</h1>
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
              <TextField className='inpu'  placeholder="Nom et Prénom" />
            </Grid>
            <Grid item>
              <TextField className='inpu'  placeholder="Email" />
            </Grid>
            <Grid item>
              <TextField className='inpu' placeholder="Mot de passe" type="password" />
            </Grid>
            <Grid item>
              <TextField className='inpu' placeholder="Confirmer mot de passe" type="password" />
            </Grid>
            
            <Grid item>
              <Checkbox style={{ color: " #1A110A", }} /><span className='text3'>j'ai lu et j'accepte <span className='text2'>les conditions générales.</span></span>
            </Grid>
         
            <Grid item>
            <button className='bntnSin' onClick={test}>
                <div className='textbntnSin'>Sinscrire</div></button>
            </Grid>
            <Grid item>
              <div>Avez vous déjà un compte!  <Link to="/login" className="textc">Connexion</Link></div>
            </Grid>

          </Grid >


        </Grid >
        </Grid>
      </div>


    </div>
  )
}

export default Signup
