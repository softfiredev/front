import React, { useState } from "react";
import "./page.css";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { RefreshSquare, AddCircle, ExportCurve } from "iconsax-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Avtr from "../../../assets/avtclient.png";
import { Visibility, VisibilityOff } from "@material-ui/icons";
const Page = () => {

const[openchangePassword,setopenchangePassword]=useState(false)
const [opencoll, setopencoll] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleOpenChanegPassword=()=>{
    setopenchangePassword(true)
  }
  const handleCloseChanegPassword=()=>{
    setopenchangePassword(false)
  }
 const changestyle=()=>{
  setopencoll(true)

 }
 const changestyle2=()=>{
  setopencoll(false)
 }
 
 const addr=[{nom:"119 Rue Wanes Chbil",adr:"71 Rue Galboun Ibn Al Hassen",Gouvernorat:"bembla",Ville:"bembla",Codepostal:"5200"},{nom:"119 Rue Wanes Chbil",adr:"71 Rue Galboun Ibn Al Hassen",Gouvernorat:"bembla",Ville:"bembla",Codepostal:"5200"},{nom:"119 Rue Wanes Chbil",adr:"71 Rue Galboun Ibn Al Hassen",Gouvernorat:"bembla",Ville:"bembla",Codepostal:"5200"}]
  return (
    <div>
      <div className="carts2">
        <div className="col1-page1">
          <div className="txt1-carts2">Mon identité</div>
          <div>
            <div className="rowbnt-page">
              <div className="avatar-container">
                <img src={Avtr} className="avrt-page" />
                <div className="icon-container">
                  <ExportCurve
                    size="22"
                    color="#101010"
                    style={{
                      paddingTop: "2px",
                      paddingLeft: "3px",
                      marginLeft: "2px",
                    }}
                  />
                </div>
              </div>
              <div className="col00-page1">
                <div>
                  <p className="txt0-profile3">Photo de profile</p>
                </div>
                <div>
                  <p className="txt1-profile3">300x300 et max 2 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Nom et Prénom</div>
            <OutlinedInput className="input-pro" />
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Email</div>
            <OutlinedInput className="input-pro" />
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Numéro de téléphone</div>
            <OutlinedInput className="input-pro" />
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Date de naissance</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="input-pro" />
            </LocalizationProvider>
          </div>
          <button className="bnt-pro3">
            <p className="txtbnt-pro2">Valider</p>
          </button>
          <br />
        </div>
      </div>
      <div className="box2-page">
        <h2>Mon mot de passe</h2>
        <div onClick={handleOpenChanegPassword} className={openchangePassword?"rowbnt-page-none":"rowbnt-page"} >
          <RefreshSquare size="22" color="#E9B949 " variant="Bold"/>
          <div>Changer le mot de passe</div>
        </div>
        <div className={openchangePassword?"change-password-form":"change-password-form-none"}>
            <label className="label-inpute">Mot de passe actuel</label>
            <OutlinedInput
            className="input-password"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
           <label className="label-inpute">Nouveau mot de passe</label>
            <OutlinedInput
            className="input-password"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
             <div className="minirow-page">
                <button onClick={handleCloseChanegPassword} className="bnt3-page">
                  <p className="txtbnt3-page">Annuler</p>
                </button>
                <button onClick={handleCloseChanegPassword} className="bnt4-page">
                  <p className="txtbnt4-page">Valider</p>
                </button>
              </div>
        </div>
      </div>
      <br />

   
    
            <div  onClick={changestyle}>
            <div className="box3-page">
              <h2>Mes adresses</h2>
              <div className={opencoll ?"box-hed":"rowbnt-page"}>
                <AddCircle size="22" color="#E9B949" variant="Bold" />
                <div>Ajouter une nouvelle adresse</div>
              </div>


              <div className={opencoll && addr.length!=0 ?"col-page012":"box-hed"}>
            <div className="txt201-page">. Maison</div>
              {addr.map((obj) => (
          <>
            <div className="row-page032">
            <div>{obj.nom},</div>
          <div>{obj.Ville},</div>
          <div>{obj.Gouvernorat},</div>
          <div>{obj.Codepostal}</div>
            </div>
           
          </>
        ))}
       <div className="row-page"> <div className="txt200-page">Modifier</div> <div className="txt200-page">Supprimer</div></div>
         </div>   
              
         <div className={opencoll && addr.length!=0 ?"col-page012":"box-hed"}>
            <div className="txt201-page">. Lieu de travail</div>
              {addr.map((obj) => (
          <>
            <div className="row-page032">
            <div>{obj.nom},</div>
          <div>{obj.Ville},</div>
          <div>{obj.Gouvernorat},</div>
          <div>{obj.Codepostal}</div>
            </div>
           
          </>
        ))}
       <div className="row-page"> <div className="txt200-page">Modifier</div> <div className="txt200-page">Supprimer</div></div>
         </div>
         
         <br/>
              




                </div>
            </div>
          
  <div className={opencoll ?"box-blok":"box-hed"}>
  <div className="typographyReponse-page">
            <hr className="line-page" />
            <br />
            <div className="col-page">
              <div>
                {" "}
                <p className="txt3-profile">Ajout d'une nouvelle adresse</p>
              </div>
              <br />
              <div className="minicol-page">
                <div>
                  <p>Nom de l’adresse</p>
                </div>
                <OutlinedInput className="input-pro" />
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Adresse</p>
                </div>
                <OutlinedInput className="input-pro" />
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Gouvernorat</p>
                </div>
                <OutlinedInput className="input-pro" />
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Ville</p>
                </div>
                <OutlinedInput className="input-pro" />
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Code postal</p>
                </div>
                <OutlinedInput className="input-pro" />
                <div></div>
              </div>

              <div className="minirow-page">
                <button className="bnt3-page" onClick={changestyle2}>
                  <p className="txtbnt3-page">Annuler</p>
                </button>
                <button className="bnt4-page">
                  <p className="txtbnt4-page">Valider</p>
                </button>
              </div>
            </div>
          </div>

  </div>
    
    
    </div>
  );
};

export default Page;
