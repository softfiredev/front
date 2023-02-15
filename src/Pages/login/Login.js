import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import Imge from "../../assest/image1.png"
import { TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import Icongoogle from '../../assest/google.png';
const Login = () => {
  const test = () => {
    alert("button active !!")
  }
  return (
    <div>
      <div id="main">
        <div><img src={Imge} alt="logo" />

        </div>
        <div className='flex-container'>
          <p className='Sinscrire'>Connexion</p>
          <p className='Contin'>Continue avec</p>
          <div>
            <div className='groupbutton'>
              <button className='gmail'>
                <div className="grid-container">
                  <div className="grid-item"><img className="icongoogle" src={Icongoogle} alt="Icongoogle" /></div>
                  <div className="grid-item">Gmail</div>
                </div>
              </button>
              <button className='facebook' >
                <div className="grid-container2">
                  <div><Facebook className='icon' /></div>
                  <div className="textfacebook">Facebook</div>

                </div>
              </button>
            </div>
            <br />
            <span className='adresse'>Ou avec votre adresse e-mail</span>
            <div className='input'>
              <TextField fullWidth label="E-mail" type="email" />
              <div><TextField fullWidth label="Mot de passe" type="password" /> </div>
            </div>
            <div className='group3'>
              <div className='checkboox'> <Checkbox style={{ color: " #1A110A", }} /><span className='discription'>J'ai lu et j'accepte les conditions générales.</span></div>
              <button className='button2' onClick={test}><div className='discription2'>Connexion</div></button>
            </div>
            <div className="discription3">Vous n'avez pas de compte <span ><Link to="/signup">! S'inscrire</Link></span></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
