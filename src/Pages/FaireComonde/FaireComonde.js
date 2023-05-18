import React, { useEffect, useState } from 'react'
import'./FaireComonde.css'
import { useNavigate } from "react-router-dom";

const FaireComonde = () => {
    const navigate = useNavigate();
    const [Provider,setProvider] = useState('');
    const [profile, setProfile] = useState();
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
      const checkedboxfilter=(event)=>{
        setCheck(event.target.checked) 
       }
       const [check,setCheck] = useState(false);
       const [login,setlogin] = useState(false);

  return (
    <div className='Fc'>
      <div><p className='txt1-Fc'>faire une commande</p></div>
      <div className='row0-Fc'>
<div className='col0-Fc'>



<div className='blox-Fc'>
    <div className='bloxrow-Fc'>

    <div className='circule-Fc'><p>1</p></div>
    <div><p className='txt2-Fc'>Informations Personelles</p></div>

    </div>

    <div className='sousblox-Fc'>
<div className='row-Fc'>
    <button className='bnt0-Fc' onClick={()=>{navigate("/login")}}>Déjà client?  Connexion</button>
    <button className='bnt1-Fc'onClick={()=>{navigate("/Signup")}}>Nouveau client?  Créez un compte</button>
</div>
   
</div>





</div>

    

<div className='blox-Fc'>
    <div className='bloxrow-Fc'>

    <div className='circule-Fc'><p>2</p></div>
    <div><p className='txt2-Fc'>Adresses</p></div>

    </div>

    <div className='sousblox2-Fc'>
      <div>  <p className='txt3-Fc'>Mes adresses:</p></div>
                             <div className='rowmini-Fc'>
                             <input
                                type="Radio"
                                className="radio-Fc"
                                name="r0"
                              />
                             </div>
                               <input
                                type="Radio"
                                className="radio-Fc"
                                name="r0"
                              />
                               <input
                                type="Radio"
                                className="radio-Fc"
                                name="r0"
                              />

    </div>





</div>





</div>











<div className='col0-Fc'>

</div>
      </div>
    
    
    
    </div>
  )
}

export default FaireComonde
