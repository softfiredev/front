import React from 'react'
import "./signup.css"
import Imge from "../../assest/image1.png"
import { TextField, Grid} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { OutlinedInput,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Eye,EyeSlash} from 'iconsax-react';
const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
                <button className="btn default"><div className='icong'><i className="fab fa-google fa-1x" ></i></div><p className="textgml">Gmail</p></button>         
                </Grid>
                <Grid item>      
                <button className="btn default"><div className='iconf'><Facebook style={{ width: "20px", height: "20px" }} /></div> <div className='textfbk'>Facebook</div></button>
                </Grid>

              </Grid>
            </Grid>
            <Grid item>
              <p className='adr'>Ou avec votre adresse e-mail</p>
            </Grid>
         
            <Grid item>
            <OutlinedInput className='inpu' placeholder="Nom et Prénom" />
            </Grid>
            <Grid item>
            <OutlinedInput className='inpu' placeholder="Email" />
            </Grid>
            <Grid item>
            <OutlinedInput  className='inpu'
            type={showPassword ? 'text' : 'password'}
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
                  <OutlinedInput className='inpu' placeholder="Confirmer mot de passe" type="password"  />
            </Grid>
            
            <Grid item>
              <Checkbox style={{ color: " #E9B949", }} /><span className='text3'>j'ai lu et j'accepte les<span className='text2'>  Politique de confidentialité.</span></span>
            </Grid>
         
            <Grid item>
            <button className='bntnSin' onClick={test}>
                <div className='textbntnSin'>S’inscrire</div></button>
            </Grid>
            <Grid item>
              <div>Avez vous déjà un compte!  <Link to="/login" className="textc-up">Connexion</Link></div>
            </Grid>

          </Grid >


        </Grid >
        </Grid>
      </div>


    </div>
  )
}

export default Signup
