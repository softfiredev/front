import React from 'react'
import './Liste_commandes.css'
import Filterbar from '../../filterbar/Filterbar';
import { Sort } from 'iconsax-react';
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import img from '../../../assets/Ellipse 150.png'
const Liste_commandes = () => {
  const [action, setAction] = React.useState("Tout");
  const data=[{titre:"Tout"},{titre:"Nouveau"},{titre:"Compléter"},{titre:"Rejeter"}]
  const data2=[
    {
        id:"1561",
        Vendeur:"Dr. Ginger Spinka",
        Client:"Otis Hoppe",
        Montant:"150",
        Nbr_articles:"20",
        Datecréation:"20/03/2023",
        Staut:"Compléter"
},
{
    id:"1561",
    Vendeur:"Dr. Ginger Spinka",
    Client:"Otis Hoppe",
    Montant:"150",
    Nbr_articles:"20",
    Datecréation:"20/03/2023",
    Staut:"Rejeter"
},
{
    id:"1561",
    Vendeur:"Dr. Ginger Spinka",
    Client:"Otis Hoppe",
    Montant:"150",
    Nbr_articles:"20",
    Datecréation:"20/03/2023",
    Staut:"En cours"
}
,
{
    id:"1561",
    Vendeur:"Dr. Ginger Spinka",
    Client:"Otis Hoppe",
    Montant:"150",
    Nbr_articles:"20",
    Datecréation:"20/03/2023",
    Staut:"Nouveau"
}
]
const filteredData =action=="Tout"?data2:data2.filter(item => item.Staut === action);
  return (
    <div className='Liste_commandes'>
      <div className='row-Liste_commandes'>
   {
       data.map((item, index) => (

        <div className={item.titre==action?'box1-Liste_commandes':'box2-Liste_commandes'} onClick={()=>{setAction(item.titre)}}>
         {item.titre}
        </div>
       ))
   }
      </div>
      <Filterbar icon={  <Sort size="22" color="#222222"/> } nom="Trier par" />
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
    <Table sx={{ width: "100%" }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>
            <p className="tableCell">#</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Vendeur</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Client</p>
          </TableCell>
          <TableCell>
            <p className="tableCell">Montant</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Nbr d’articles</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Date de création</p>
          </TableCell>
          <TableCell align="left">
            <p className="tableCell">Staut</p>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {filteredData.map((item, index) => (
   <TableRow>
   <TableCell>
   {item.id}
   </TableCell>
   <TableCell>
   <div className='row-tab'><Avatar src={img} className='img-tab'/><div><p>{item.Vendeur}</p></div> </div>
   </TableCell>
   <TableCell>
   <div  className='row-tab'><Avatar src={img} className='img-tab'/><div><p>{item.Client}</p></div> </div>

   </TableCell>
   <TableCell >
  <p className='Montant-tab'>{item.Montant}</p>
   </TableCell>
   <TableCell >
  <p className='Nbr_articles-tab'>{item.Nbr_articles}</p>
   </TableCell>
   <TableCell>
  {item.Datecréation}
   </TableCell>
   <TableCell>
   {item?.Staut==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{item?.Staut}</p></button></>
:
<>
{
item?.Staut==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{item?.Staut}</p></button>
:<>{item?.Staut==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{item?.Staut}</p></button>:
<>{item?.Staut==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{item?.Staut}</p></button>:<></>}</>}</>}</>}
   </TableCell>


 </TableRow>

      ))}
   
   
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default Liste_commandes
