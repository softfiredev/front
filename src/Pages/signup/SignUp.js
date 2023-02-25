import React, { useEffect, useState } from 'react'
import "./signup.css"
import Imge from "../../assest/image1.png"
import { Grid} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { OutlinedInput,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Eye,EyeSlash} from 'iconsax-react';
import axios from 'axios';
import { Flip, toast } from 'react-toastify';
import Toast from '../../components/toast/Toast';
import Spiner from '../../components/spiner/spiner';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [email, setemail] = useState("");
  const [loding, setloding] = useState(true);
  const [password, setpassword] = useState("");
  const [confpass, setconfpass] = useState("");
  const [name_prenom, setname_prenom] = useState("");
  const handleemail = (e) => {
    setemail(e.target.value);
  }
  const handlepassword = (e) => {
    setpassword(e.target.value);
  
  }
  const handlename = (e) => {
    setname_prenom(e.target.value);
  
  }
  const handleconfirm = (e) => {
    setconfpass(e.target.value);
  
  }

const signup= async ()=>{

if(email.length !==0 &&password.length!==0&&name_prenom.length!==0 )
{
  let reg = /^[a-z-A-Z0-9-_.]+@[a-z-A-Z0-9-_]{2,}[.][a-z-A-Z]{2,3}$/
  let result = ((reg.exec(email)!=null));
  if(result===true)
  {
  if(password === confpass)
  {
    let date = {
      email:email,
      password:password,
      name_prenom:name_prenom
    }
  axios.post('http://localhost:3000/user/register', date)
    .then(response => {
    
      switch(response.data.message){

        case 'email exist':
            return toast.error("email exist deja !!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
    
        case 'verif your email now ':
            return toast.success("verif your email now", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        default :
            break;
        }
  
})
.catch(error => {
console.error(error);
});
  }


  else
  {
    toast.warn("confirmation password  !!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
}else
{
  toast.warn("validaiton de Email", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
} 
}
else{

  return toast.warn("chomp vide  !!", {
    position: "top-center",
    autoClose: 4000,
    transition:Flip,
     hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

}
}

useEffect(()=>{
  setloding(true)
  setTimeout(()=>{
    setloding(false)
  },1000)
    
 
},[])
  return (
    <div>
     {loding?<>
   <Spiner/> 
     </>
    :<>
    <div className='signup'>
   
<div className='singg'   >
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
                </Grid>  <div className='esp'></div>
                <Grid item>      
                <button className="btn default"><div className='iconf'><Facebook style={{ width: "20px", height: "20px" }} /></div> <div className='textfbk'>Facebook</div></button>
                </Grid>

              </Grid>
            </Grid>
            <Grid item>
              <p className='adr'>Ou avec votre adresse e-mail</p>
            </Grid>
         
            <Grid item>
            <OutlinedInput className='inpu' placeholder="Nom et Prénom"  onChange={handlename}
           
                    value={name_prenom}/>
            </Grid>
            <Grid item>
            <OutlinedInput className='inpu' placeholder="Email"onChange={handleemail}
           value={email} />
            </Grid>
            <Grid item>
            <OutlinedInput  className='inpu'
            type={showPassword ? 'text' : 'password'}
             endAdornment={
              <InputAdornment position="end">
                <IconButton style={{color:"#222222"}}
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <EyeSlash size="28.5" color="#222222"/> : <Eye size="28.5" color="#222222"/>}
                </IconButton>
              </InputAdornment>
            }
          placeholder="Password"onChange={handlepassword}
          value={password}
          />
            </Grid>
            <Grid item>
                  <OutlinedInput className='inpu' placeholder="Confirmer mot de passe" type="password" onChange={handleconfirm}
           value={confpass} />
            </Grid>
            
            <Grid item>
              <Checkbox style={{ color: " #E9B949", }} /><span className='text3'>j'ai lu et j'accepte les<span className='text2'>  Politique de confidentialité.</span></span>
            </Grid>
         
            <Grid item>
            <button className='bntnSin' onClick={signup}>
                <div className='textbntnSin'>S’inscrire</div></button>
            </Grid>
            <Grid item>
              <div>Avez vous déjà un compte!  <Link to="/login" className="textc-up">Connexion</Link></div>
            </Grid>
          </Grid >
          <Toast/>
        </Grid >
        </div>
      </div>
    
    </> 
    }

      

     
    </div>
  )
}

export default Signup
