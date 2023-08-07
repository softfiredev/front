import React, { useEffect } from 'react'
import'./Profile.css'
import Paper from "@mui/material/Paper";
import { Map, Profile, SearchNormal1 } from 'iconsax-react'
import { Avatar, InputAdornment, OutlinedInput,Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, } from '@material-ui/core'
import { getIdentiteClientt } from '../../../../Store/Service/identiteClient';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AllbonDachateByuser } from '../../../../Store/Service/AllbonDachateByuser';
const Profil = (props) => {
const { id } = useParams();
const dispatch=useDispatch()
const clientData = useSelector(
  (state) => state.IdentiteClient.identiteClient
);
  
const bonDachates = useSelector(
  (state) => state.AllbonDachateByuser.bondachates
);
useEffect(() => {
  dispatch(getIdentiteClientt(id));
  dispatch(AllbonDachateByuser(id))

},[]);


  return (
    <div className='Profile'>
<div>
<div className='box1-Profile'>
     <Profile
 size="25"
 color="#222"
 variant="Bold"
/>
     </div>
        <div className='row-Profil2'>
   <div>

     <h3>Détails personnels</h3>
     <p className='txt-Profil'>Entrez vos coordonnées et avec les bonnes informations.</p>
   </div>
 <div className='col-Profil'>
<div>
    <h3>Photo de profile</h3>
    <Avatar src={"http://localhost:8080/uploads/"+clientData?.avatar} className='img-Profil' style={{width: "120px",height: "120px"}}/>
</div>
<div>
    <p className='soustxt-Profil'>Nom et Prénom</p>
    <OutlinedInput disabled="true" value={clientData?.fullname} className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Email</p>
    <OutlinedInput disabled  value={clientData?.email} className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Numéro de téléphone</p>
    <OutlinedInput disabled value={clientData?.telephone} className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Date de naissance</p>
    <OutlinedInput disabled value={clientData?.Date_de_naissance}type='date' className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Status de compte</p>
<div className='mcol-Profil'>
<div className='rowinput-Profil'>
  <input type="Radio" disabled className="radio-Tf1" name="r0"  checked={clientData?.etatCompte==="active"} />
  <div><p className='txtinpit-profil'>Actif</p>
  </div>
  </div>
  <div className='rowinput-Profil'><input type="Radio" disabled className="radio-Tf1" name="r0"  checked={clientData?.etatCompte==="bloque"}  /><div><p className='txtinpit-profil'>Bloquée</p></div></div>
</div>
</div>
 </div>
   </div>
</div>



  <div>
  <div className='box1-Profile'>
     <Map
 size="25"
 color="#222"
 variant="Bold"
/>
     </div>
   <div className='row-Profil'>
   <div>

     <h3>Nombre de ponits</h3>
     <p className='txt-Profil'>Le nombre total de points dans ce compte</p>
   </div>
 <div className='col2-Profil'>
<div>
    <h2>Total de points: 1700 pts</h2>
    <OutlinedInput
          className="inpt-Profil"
          placeholder={"Code, nom de partenaire"}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />
</div>
<TableContainer
    component={Paper}
    style={{
      boxShadow: "none",
      borderWidth: " 1px 0px",
      borderStyle: "solid",
      borderColor: "#EEEDF2",
      width: "100%" 
    }}
  >
    <Table style={{ width: "100%" }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>
            <p className="tableCell">Code</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Partenaire</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Nbr de points</p>
          </TableCell>
          <TableCell>
            <p className="tableCell">Date</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Statut</p>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {bonDachates?.map((item, index) => (
   <TableRow >
   <TableCell>
   {item?.code}
   </TableCell>
   <TableCell>
   {item?.partenaire?.nameetablissement}
   </TableCell>
   <TableCell >
  <p className='Montant-tab'>{item?.solde}</p>
   </TableCell>
   <TableCell >
  <p >{item?.createdAt}</p>
   </TableCell>
   <TableCell>
   {item?.etat==="Non Valide"?
<>
<button className='bnt1-Profil'>
  {item?.etat}</button>
    </>
:
<>
<button className='bnt2-Profil'>
 {item?.etat}</button>
    </>
   }
   </TableCell>


 </TableRow>

      ))}
   
   
      </TableBody>
    </Table>
  </TableContainer>
 </div>
 
 
 
   </div>
  </div>

    </div>
  )
}

export default Profil
