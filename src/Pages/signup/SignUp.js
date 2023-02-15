import React from 'react'
import"./signup.css"
import Imge from "../../assest/image1.png"
import { TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Icongoogle from '../../assest/google.png';
const Signup = () => {
  const test=()=>{
    alert("button active !!")
}
  return (
    <div>
<div id="main">
  <div>
    <img src={Imge} alt="icon"/>
  </div>
  <div className='flex-container'>
    <p className='Sinscrire'>S'inscrire</p>
    <p className='Continue'>Continue avec</p>


    <div className='groupbutton'>
<button className='gmail' onClick={test}>
<div className="grid-container">
  <div className="grid-item"><img className="icongoogle"src={Icongoogle} alt="icon"/></div>
  <div className="grid-item">Gmail</div>
</div>
</button>
    <button className='facebook'  onClick={test}> 
    <div className="grid-container2">
  <div><Facebook  className='icon'/></div>
  <div className="textfacebook">Facebook</div>

     </div>
      </button>
        </div>

      <div>
      <br/>
    <span className='adresse'>Ou avec votre adresse e-mail</span>
    <div className='inputs'>
  <TextField fullWidth label="Nom et Prénom"  />
  <TextField fullWidth label="Email"  /> 
   <TextField fullWidth label="Mot de passe"type="password"  />
   <TextField fullWidth label="Confirmer mot de passe"type="password"  />
  </div>
  <div className='checkboox'>  <Checkbox style ={{color: " #1A110A",}} /><span className='discription'>J'ai lu et j'accepte les conditions générales.</span></div>
<button className='button2' onClick={test}>
  <div className='discription2'>S'inscrire</div></button>
  </div>
  <div class="discription3">Avez vous déjà un compte! <span><Link to="/login">Connexion</Link></span></div>

  </div>


</div>

   </div>
  )
}

export default Signup
