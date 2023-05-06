import React, { useState } from "react";
import "./page.css";
import dayjs from 'dayjs';
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { RefreshSquare, AddCircle, ExportCurve } from "iconsax-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import Modal from "@mui/material/Modal";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { changePassword } from './../../../Store/Service/changePassword';
import { toast } from "react-toastify";
const Page = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "356px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",

    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [titre, settitre] = React.useState("");
  const [open1, setOpen1] = React.useState(true);
  const [newPassword,setnewPassword]=useState()
  const [actuelPassword,setactuelPassword]=useState()
  console.log("new",newPassword,"actuel",actuelPassword)
  const handleClose = () => setOpen(false);
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
  settitre("Ajout d'une nouvelle adresse")
  setopencoll(true)
 }
 
 const changestyle2=()=>{
  setopencoll(false)
 }
 const openblock=()=>{
  settitre("Modification de l’adresse")
  setopencoll(true)

 }
 const addr=[{nom:"119 Rue Wanes Chbil",adr:"71 Rue Galboun Ibn Al Hassen",Gouvernorat:"bembla",Ville:"bembla",Codepostal:"5200"}]
 const client=[{nom:"seifbenaicha",email:"seifbenaica@ggg.ddd",num:"54522021",date:1/1/2000}]
 const uplode=()=>{
 }
const handleinfo=()=>{
  setOpen1(false)
}
const passwordchange=()=>{
  if(newPassword!==undefined && actuelPassword!==undefined){
    const data={
      newPassword : newPassword ,
      ActuelPassword :actuelPassword
    }
    changePassword(data,props.user.id).then((response)=>{
      console.log("azeazeaze",response)
        if(response.success===true){
            toast.success(" Mot de passe changer")
        }else{
            toast.error("verifie votre actuel password")
        }
    })
  }else{
    toast.error(" Mot de passe actuel ou Nouveau mot de passe vide  ")
  }
    
    setopenchangePassword(false)
    
}
 return (
    <div>
      <div className="carts2">
        <div className="col1-page1">
          <div className="txt1-carts2">Mon identité</div>
          <div>
            <div className="rowbnt-page">
              <div className="avatar-container">
              <Avatar style={{ height: "150px", width: "150px" }}  src={"http://127.0.0.1:8080/uploads/" } />
                <div className="icon-container" onClick={uplode}>
                <label htmlFor="file-input" className="labelup">
                  <ExportCurve
          
                    size="22"
                    color="#101010"
                    style={{
                      paddingTop: "2px",
                      paddingLeft: "3px",
                      marginLeft: "2px",
                    }}
                  />
                  </label>
                      <input type="file" className="uplod" id="file-input"accept=".jpg,.png"/>
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
            <OutlinedInput className="input-pro" value={client[0].nom}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Email</div>
            <OutlinedInput className="input-pro" value={client[0].email}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Numéro de téléphone</div>
            <OutlinedInput className="input-pro" value={client[0].num}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Date de naissance</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="input-pro" defaultValue={dayjs(client[0].date)} />
            </LocalizationProvider>
          </div>
          {open1?
          <div className="rowbnt-page0321" onClick={handleinfo}>
            <RefreshSquare size="22" color="#E9B949 " variant="Bold"/>
            <div>Changer mes informations</div>
          </div>
          :
          <div className="rowbnt-page03210">
          <button onClick={()=>{setOpen1(true)}} className="bnt3-page">
            <p className="txtbnt3-page">Annuler</p>
          </button>
          <button  className="bnt4-page">
            <p className="txtbnt4-page">Valider</p>
          </button>
        </div>
          }
          
      
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
            onChange={(e)=>setactuelPassword(e.target.value)}
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
            onChange={(e)=>setnewPassword(e.target.value)}
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
                <button onClick={passwordchange} className="bnt4-page">
                  <p className="txtbnt4-page">Valider</p>
                </button>
              </div>
        </div>
      </div>
      <br />

   
    
            <div  >
            <div className="box3-page">
              <h2>Mes adresses</h2>
             
        

              <div className={addr.length!=0 ?"col-page012":"box-hed"}>
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
       <div className="row-page"> <div className="txt200-page" onClick={openblock}>Modifier</div> <div className="txt200-page" onClick={()=>{setOpen(true)}}>Supprimer</div></div>
         </div>   
              
         <div className={ addr.length!=0 ?"col-page012":"box-hed"}>
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
       <div className="row-page"> <div className="txt200-page" onClick={openblock}>Modifier</div> <div className="txt200-page" onClick={()=>{setOpen(true)}}>Supprimer</div></div>
         </div>

         <div onClick={changestyle}>
              <div className={opencoll ?"box-hed":"rowbnt-page"}>
                <AddCircle size="22" color="#E9B949" variant="Bold" />
                <div>Ajouter une nouvelle adresse</div>
              </div><br/>

              </div>
         <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  onClose={handleClose}
                >
                  <Box sx={style} >
               
                    <div className="colll-page">
                    <div className='flex-end'>    <div > <i class="fa fa-close" onClick={handleClose}></i></div></div>
                    <div><p className="txtt-pagemodal">Etes-vous sûr de vouloir supprimer cette adresse?</p></div>
                    <div><p className="txtt-pagemodal2">Cette modification n’impactera pas les
commandes passées ou en cours.</p></div><br/>
                     
             <div className="rowbnt02-page"><button className="bntmodal2-page" onClick={handleClose}>Annuler</button> <button className="bntmodal3-page">Supprimer</button></div>
                    </div>
                




                   
            
                  </Box>
                </Modal>
         <br/>
              




                </div>
            </div>
          
  <div className={opencoll ?"box-blok":"box-hed"}>
  <div className="typographyReponse-page">
            <hr className="line-page" />
            <br />
            <div className="col-page">
              <div>
                
                <p className="txt3-profile">{titre}</p>
              </div>
              <br />
              <div className="minicol-page">
                <div>
                  <p>Nom de l’adresse</p>
                </div>
                <OutlinedInput className="input-pro" value={addr[0].nom}/>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Adresse</p>
                </div>
                <OutlinedInput className="input-pro" value={addr[0].adr} />
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Gouvernorat</p>
                </div>
                 <Select className='txt-select-page' defaultValue="Par pertinence" style={{ width: "400px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em className='txt-select-page'>{addr[0].Gouvernorat}</em>
                    </MenuItem>
                  
                    <MenuItem value={1} className='txt-select-page'>Meilleurs ventes</MenuItem>
                    <ListSubheader></ListSubheader>
                 
                </Select>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Ville</p>
                </div>
                <OutlinedInput className="input-pro" value={addr[0].Ville}/>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Code postal</p>
                </div>
                <OutlinedInput className="input-pro" value={addr[0].Codepostal}/>
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
