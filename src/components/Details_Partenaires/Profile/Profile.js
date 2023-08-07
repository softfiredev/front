import React from 'react'
import'./Profile.css'
import Paper from "@mui/material/Paper";
import { Map, Profile, SearchNormal1 } from 'iconsax-react'
import { Avatar, InputAdornment, OutlinedInput,Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, } from '@material-ui/core'
const Profil = () => {
const data=[{
    Code:"1524",
    Partenaire:"sqdqsd",
    Nbrpoints:"10",
    Date:"15/20/2020",
    Statut:"Non validé"

},{
    Code:"1524",
    Partenaire:"sqdqsd",
    Nbrpoints:"10",
    Date:"15/20/2020",
    Statut:"validé"

},]
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
    <Avatar scr='' className='img-Profil' style={{width: "120px",height: "120px"}}/>
</div>
<div>
    <p className='soustxt-Profil'>Nom et Prénom</p>
    <OutlinedInput  className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Email</p>
    <OutlinedInput  className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Numéro de téléphone</p>
    <OutlinedInput  className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Type</p>
    <OutlinedInput  className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Nom d’établissement</p>
    <OutlinedInput  className='inpt-Profil'/>

</div>
<div>
    <p className='soustxt-Profil'>Détails d’établissement</p>
<OutlinedInput className='inpt-Profil2' placeholder="L'association Pensée Nationale Libre est une association à but non lucratif née en janvier 2010, Mahdia." multiline rows={5} maxRows={80} />


</div>
<div>
    <p className='soustxt-Profil'>Status de compte</p>
<div className='mcol-Profil'>
<div className='rowinput-Profil'><input type="Radio" className="radio-Tf1" name="r0"   /><div><p>Actif</p></div></div>
  <div className='rowinput-Profil'><input type="Radio" className="radio-Tf1" name="r0"   /><div><p>Bloquée</p></div></div>
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
      {data.map((item, index) => (
   <TableRow >
   <TableCell>
   #{item.Code}
   </TableCell>
   <TableCell>
   {item.Partenaire}
   </TableCell>
   <TableCell >
  <p className='Montant-tab'>{item.Nbrpoints}</p>
   </TableCell>
   <TableCell >
  <p className='Nbr_articles-tab'>{item.Date}</p>
   </TableCell>
   <TableCell>
   {item?.Statut==="Non validé"?
<>
<button className='bnt1-Profil'>
  {item?.Statut}</button>
    </>
:
<>
<button className='bnt2-Profil'>
 {item?.Statut}</button>
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
