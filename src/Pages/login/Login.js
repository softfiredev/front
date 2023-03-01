import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import Imge from "../../assets/image1.png"
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { OutlinedInput, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Eye, EyeSlash } from 'iconsax-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Path, Base_url } from '../../config/Config'
import { useDispatch } from 'react-redux';
import { Loginstore } from '../../Store/Loginuser';
import Spinier from '../../components/spinier/Spinier'


const Login = () => {
  const Dispatch = useDispatch();
  localStorage.clear()
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [user, setUser] = useState({ email: "", password: "" });
  const handleInputChange = (field) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onsubmit = () => {

    if (user.email.length !== 0 && user.password.length !== 0) {
      let reg = /^[a-z-A-Z0-9-_.]+@[a-z-A-Z0-9-_]{2,}[.][a-z-A-Z]{2,3}$/
      let result = ((reg.exec(user.email) !== null));
      if (result === true) {
        let data = {
          email: user.email,
          password: user.password,
        }
        axios.post(Base_url + Path.LoginApi, data)
          .then(response => {
            setLoading(true)
            if (response.data.message === "success") {
              Dispatch(Loginstore({ accessToken: response.data.accessToken, refreshToken: response.data.refreshToken, isLogin: true }))
              setLoading(false)
            }
            if (response.data.err === 'password is not correct') {
              toast.error("le mot de passe n'est pas correct !!")
              setLoading(false)
            }
            if (response.data.success === false) {
              toast.error("active votre compte Svp !!")
              setLoading(false)
            }
            if (response.data.err === "email is not correct") {
              toast.error("Email ne par exist !!")
              setLoading(false)
            }


          })
      }
      else {
        toast.error("validation de Email !!")
        setLoading(false)
      }

    }
    else {
      toast.error("remplir Champ vide SVP !!")
      setLoading(false)
    }

  }
  return (

    <>
      {loading ? <Spinier /> :

    <div className='login'>

      <Grid item >
        <img className='im' src={Imge} alt="icon" />
      </Grid >

      <Grid item  >

        <div className='espa'>
          <Grid container direction="column" spacing={3}     >

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
              <OutlinedInput className='input-login' placeholder="Email" onChange={handleInputChange("email")} value={user.email} />
            </Grid>
            <Grid item>

              <OutlinedInput className='input-login'

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
                onChange={handleInputChange("password")}
                value={user.password}
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

            <Grid item container spacing={1}>
              <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="Souviens">Souviens-toi de moi</p></span>
            </Grid>
            <Grid item>
              <button className='bntn1-log' onClick={onsubmit}>
                <div className='textbntConnexionn'>Connexion</div></button>
            </Grid>
            <Grid item>
              <p>Vous n'avez pas de compte !<Link to="/Signup" className="textc"> S'inscrire</Link></p>
            </Grid>
            <div />
          </Grid >
        </div>
      </Grid >



    </div>

}

</>


  )
}

export default Login
