import React, { useEffect, useState } from "react";
import "./page.css";
import dayjs from 'dayjs';
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { RefreshSquare, AddCircle, ExportCurve } from "iconsax-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Avtr from "../../../assets/avtclient.png";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import Modal from "@mui/material/Modal";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { changePassword } from './../../../Store/Service/changePassword';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getIdentiteClientt } from "../../../Store/Service/identiteClient";
import { modifierIdentiteClient } from "../../../Store/Service/ModifieIdentite";
import Avatar from '@mui/material/Avatar';

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
const handleinfo=()=>{
  setOpen1(false)
  setfullname(clientData.fullname);
  setemail(clientData.email);
  settelephone(clientData.telephone);
  setDate_de_naissance(clientData.Date_de_naissance)
  setavatar(clientData.avatar)
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
const dispatch=useDispatch()
const clientData = useSelector(
  (state) => state.IdentiteClient.identiteClient
);
console.log(clientData)
const [fullname,setfullname]=useState()
const [email,setemail]=useState()
const [telephone,settelephone]=useState()
const [Date_de_naissance,setDate_de_naissance]=useState()
const [avatar,setavatar]=useState()
const [refreshpage,setrefreshpage]=useState()
useEffect(() => {
  dispatch(getIdentiteClientt(props.user.id));
},[]);
const addresses=clientData?.client?.adresses
const changeIdentite=()=>{
   const data= new FormData() ; 
   data.append("Date_de_naissance",Date_de_naissance)
   data.append("image",avatar)
   data.append("telephone",telephone)
   data.append("fullname",fullname)
   data.append("email",email)
    modifierIdentiteClient(props.user.id,data).then((response)=>{
      if(response.success===true){
          toast.success("votre identite  modifier avec success")
          console.log(data.get('telephone'))
      }
    })
    setrefreshpage(false)
}
 return (
    <div>
      <div className="carts2">
        <div className="col1-page1">
          <div className="txt1-carts2">Mon identité</div>
          <div>
            <div className="rowbnt-page">
              <div className="avatar-container">

                <Avatar  style={{ height: "150px", width: "150px" }}  src={clientData?.avatar===undefined?Avtr:"http://127.0.0.1:8080/uploads/"+clientData?.avatar} className="avrt-page" />

                <div className="icon-container" >
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
                      <input type="file" className="uplod" id="file-input"accept=".jpg,.png" onChange={(e)=>setavatar(e.target.files[0])}/>
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
            <input type="text" className="input-pro" defaultValue={clientData?.fullname} onChange={(e)=>{setfullname( e.target.value)}}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Email</div>
            <input type="text" className="input-pro" defaultValue={clientData?.email} onChange={(e)=>{setemail( e.target.value)}}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Numéro de téléphone</div>
            <input type="text" className="input-pro" defaultValue={clientData?.telephone} onChange={(e)=>{settelephone(e.target.value)}}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Date de naissance</div>
         
              <input type="date" className="input-pro" defaultValue={clientData?.Date_de_naissance} onChange={(e)=>{setDate_de_naissance(e)}}/>

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
            <p className="txtbnt4-page" onClick={changeIdentite}>Valider</p>
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
             
        

              <div className={addresses?.length!=0 ?"col-page012":"box-hed"}>
            
              {addresses?.map((obj) => (
          <>
            <div className="txt201-page">. {obj.Nom_de_adresse}</div>
            <div className="row-page032">
            <div>{obj.Adresse},</div>
          <div>{obj.Gouvernorat},</div>
          <div>{obj.Ville},</div>
          <div>{obj.Code_postal}</div>
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
                <OutlinedInput className="input-pro" value={0}/>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Adresse</p>
                </div>
                <OutlinedInput className="input-pro" value={0} />
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Gouvernorat</p>
                </div>
                 <Select className='txt-select-page' defaultValue="Par pertinence" style={{ width: "400px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em className='txt-select-page'>{0}</em>
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
                <OutlinedInput className="input-pro" value={0}/>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Code postal</p>
                </div>
                <OutlinedInput className="input-pro" value={0}/>
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