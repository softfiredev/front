import React, { useEffect, useState } from 'react'
import'./FaireComonde.css'
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FaireComonde = () => {
    const navigate = useNavigate();
    const [addresse, setAddresse] = useState({ nom: "", addr: "",Ville:"",codepostal:"",clientId:"",Societe:"",NuméroTVA:""});
    const [Gouvernorat,setGouvernorat] = useState("");
    const Gouvernora=[{nome:"Ariana"},{nome:"Béja"},{nome:"Ben Arous"},{nome:"Bizerte"},{nome:"Gabès"},{nome:"Gafsa"},{nome:"Jendouba"},{nome:"Kairouan"},{nome:"Kairouan"},{nome:"Kasserine"},{nome:"Kébili"},{nome:"Le Kef"},{nome:"Mahdia"},{nome:"La Manouba"},{nome:"Médenine"},{nome:"Monastir"},{nome:"Nabeul"},{nome:"Sfax"},{nome:"Sidi Bouzid"},{nome:"Siliana"},{nome:"Sousse"},{nome:"Tataouine"},{nome:"Tozeur"},{nome:"Tozeur"},{nome:"Tunis"},{nome:"Zaghouan"}]
    const [check,setCheck] = useState(false);
    const [login,setlogin] = useState(false);
    const handleChangeGouvernorat = (event) => {
        setGouvernorat(event.target.value);
      };
      
    const handleInputChange = (field) => {
        return (e) => {
            setAddresse((prev) => ({
            ...prev,
            [field]: e.target.value
          }));
        };
      };

      const checkedboxfilter=(event)=>{
        setCheck(event.target.checked) 
       }
       const data=[]

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
{data.length!=0?
 <div className='sousblox2-Fc'>
 <div>  <p className='txt3-Fc'>Mes adresses:</p></div>
                     
                     
       {data.map((obj, index) => (
                        <div className='rowmini-Fc'>
                        <input
                           type="Radio"
                           className="radio-Fc"
                           name="r0"
                         />
                         <div className='colini-Fc'>
                           <div><p className='txt4-Fc'>{obj.nom}</p></div>
                           <div><p className='txt5-Fc'>{obj.addr}</p></div>
                         </div>
                        </div>
                     ))
                    }
                     
                     
                        
                     
                        <div className='rowmini-Fc'>
                        <input
                           type="Radio"
                           className="radio-Fc"
                           name="r0"
                         />
                           <div><p className='txt4-Fc'>Autre</p></div>
                        </div>
                       
                        <div className='sousblox3-Fc'>
                        <br/>

                        <div className='colini-Fc'>
                        <div>
                        <p className='txt5-Fc'>Adresse *</p>
                        </div>
                        <OutlinedInput className="input-Fc" onChange={handleInputChange("addr")} value={addresse.addr}/>
                           </div>

                        <div className="colini-Fc">
           <div>
         <p className='txt5-Fc'>Gouvernorat</p>
           </div>
            <Select value={Gouvernorat} onChange={handleChangeGouvernorat} className='txt-select-page'  placeholder="Tunis" style={{ width: "460px", height: " 48px", borderRadius: "8px" }} >
               <MenuItem value="Tunis">
                   <em className='txt-select-page'>Tunis</em>
               </MenuItem>
          
                   {Gouvernora.map((obj,key) => (
                     <MenuItem value={obj.nome}className='txt-select-page'>{obj.nome}</MenuItem>

                 ))}
             
            
           </Select>
           <div></div>
                           </div>

              <div className='colini-Fc'>
                        <div>
                        <p className='txt5-Fc'>Ville</p>
                        </div>
                        <OutlinedInput className="input-Fc" onChange={handleInputChange("Ville")} value={addresse.Ville}/>
                           </div>

                           <div className='colini-Fc'>
                        <div>
                        <p className='txt5-Fc'>Code postal*</p>
                        </div>
                        <OutlinedInput className="input-Fc" onChange={handleInputChange("codepostal")} value={addresse.codepostal}/>
                           </div>

                           <div className='colini-Fc'>
                        <div>
                        <p className='txt5-Fc'>Société</p>
                        </div>
                        <OutlinedInput placeholder='Société' className="input-Fc" onChange={handleInputChange("Societe")} value={addresse.Societe}/>
                           </div>
                           <div className='colini-Fc'>
                        <div>
                        <p className='txt5-Fc'>Numéro de TVA</p>
                        </div>
                        <OutlinedInput placeholder='Numéro de TVA' className="input-Fc" onChange={handleInputChange("NuméroTVA")} value={addresse.NuméroTVA}/>
                           </div>
                           <div>
         <Grid item container spacing={1}>
         <Checkbox style={{ color: " #62B0E8",  }}
          onChange={checkedboxfilter}
         /><span ><p className="Souviens-Fc">Utiliser aussi cette adresse pour la facturation</p></span>
       </Grid>
         </div>
         <div className='endflex-Fc'>
          <button className='bntendflex-Fc'>Continuer</button>
         </div>
                        </div>
    

</div>
:<></>
}
</div>


<div className='blox-Fc'>
   
    <div className='bloxrow-Fc'>

<div className='circule-Fc'><p>3</p></div>
<div><p className='txt2-Fc'>Mode de livraison</p></div>
</div>

    <div className='colini-Fc'>
    <div className='rowmini-Fc'>
                    <input
                       type="Radio"
                       className="radio-Fc"
                       name="r0"
                     />
                     <div className='colini-Fc'>
                       <div><p className='txt4-Fc'>Fly Delivery - Mahdia</p></div>
                       <div><p className='txt5-Fc'>Gratuit</p></div>
                     </div>
                    </div>
                    <div className='rowmini-Fc'>
                    <input
                       type="Radio"
                       className="radio-Fc"
                       name="r0"
                     />
                     <div className='colini-Fc'>
                       <div><p className='txt4-Fc'>Aramex - Toute la Tunisie  </p></div>
                       <div><p className='txt5-Fc'>7.50 DT (Livraison gratuite à partir de 300 DT d'achat)</p></div>
                     </div>
                    </div>
                    <div className='rowmini-Fc'>
                    <input
                       type="Radio"
                       className="radio-Fc"
                       name="r0"
                     />
                     <div className='colini-Fc'>
                       <div><p className='txt4-Fc'>Retrait en magasine </p></div>
                       <div><p className='txt5-Fc'>7.50 DT (Livraison gratuite à partir de 300 DT d'achat)</p></div>
                     </div>
                    </div>
                    <div className='endflex-Fc'>
      <button className='bntendflex-Fc'>Continuer</button>
     </div>
     </div>

    </div>

   
    <div className='blox-Fc'>




    <div className='bloxrow-Fc'>

    <div className='circule-Fc4'><p>4</p></div>
    <div><p className='txt2-Fc'>Détails de paiement</p></div>
    </div>
 <div className='colini-Fc'>
 <div className='rowmini-Fc'>
                        <input
                           type="Radio"
                           className="radio-Fc"
                           name="r0"
                         />
                    
                           <div><p className='txt7-Fc'>Paiement par carte bancaire à la livraison  <span  className='txt8-Fc'> (Sans disponible)</span> </p></div>
                     
                        </div>
                        <div className='rowmini-Fc'>
                        <input
                           type="Radio"
                           className="radio-Fc"
                           name="r0"
                         />
                    
                           <div><p className='txt7-Fc'>Paiement par carte bancaire  <span className='txt8-Fc'> (Sans disponible)</span></p></div>
                     
                        </div>
                        <div className='rowmini-Fc'>
                        <input
                           type="Radio"
                           className="radio-Fc"
                           name="r0"
                         />
               
                           <div><p className='txt7-Fc'>Payer comptant à la livraison</p></div>
                   
                        </div>
                        <div className='endflex-Fc'>
          <button className='bntendflex-Fc'>Continuer</button>
         </div>
 </div>
    </div>







</div>











<div className='col20-Fc'>
    
<div><p className='txt10-Fc'>Liste des articles</p></div>
<div className='row214-Fc'>

<div><p>2x</p></div>
<div><img src='' style={{width:"40px",height:"40px"}}/></div>
<div><p className='txt214-Fc'>Jovicolor  12 couleurs</p></div>



</div>

<div>
    <p className='txt10-Fc'>Récapitulatif</p>
</div>

<div className='row200-Fc'>

<div className='col200-Fc'>
  <div>  <p className='txt101-Fc'>Totale HT</p></div>
  <div>  <p className='txt101-Fc'>Frais de port</p></div>
  <div>  <p className='txt101-Fc'>Remise</p></div>
  <div>  <p className='txt101-Fc'>Tax</p></div>
</div>

<div className='col202-Fc'>
  <div>  <p className='txt101-Fc'>1371.00 dt</p></div>
  <div>  <p className='txt101-Fc'>7.50 dt</p></div>
  <div>  <p className='txt101-Fc'>-21.00 dt</p></div>
  <div>  <p className='txt101-Fc'>  7%</p></div>
</div>
</div>

<div className=''>
    <p className='txt10-Fc'>Code de réduction</p>
      <div className="inpute_icon">
        <OutlinedInput placeholder="Entrer votre code" className="code-Fc" />
        <button className="btn_input">
          <ArrowForwardIosIcon
            style={{
              width: "15px",
              height: "15px",
              color: "4B4B4B",
              marginTop: "1px",
              marginLeft: "-5px",
            }}
          />
        </button>
      </div>
</div>

<div className='row200-Fc'>

<div className='col200-Fc'>
  <div>  <p className='txt10-Fc'>Totale HT</p></div>

</div>

<div className='col202-Fc'>
  <div>  <p className='txt101-Fc'>1371.00 dt</p></div>

</div>
</div>

</div>




      </div>
    
    
    
    </div>
  )
}

export default FaireComonde
