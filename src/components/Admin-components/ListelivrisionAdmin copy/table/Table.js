import React from 'react'
import'./Table.css'
import {
    Avatar,
    Box,
    InputAdornment,
    Menu,
    MenuItem,
    Modal,
    OutlinedInput,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import Paper from "@mui/material/Paper";
import Filterbar from '../../../filterbar/Filterbar';
import { Sort } from 'iconsax-react';
import img from '../../../../assets/Ellipse 150.png'
import { useNavigate } from 'react-router-dom';
const Tablee = (props) => {
  const nav=useNavigate()
  return (
<div className='tab'>
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
      {props.data.map((item, index) => (
   <TableRow style={{cursor:"pointer"}} onClick={()=>{nav("/Admin/Details_de_livraisons/"+item.id)}}>
   <TableCell>
   {item.id}
   </TableCell>
   <TableCell>
<div  className='row-tab'><Avatar src={img} className='img-tab'/><div><p className='txtnome-tab'>{item.Vendeur}</p></div> </div>
   </TableCell>
   <TableCell>
   <div  className='row-tab'><Avatar src={img} className='img-tab'/><div><p className='txtnome-tab'>{item.Client}</p></div> </div>

   </TableCell>
   <TableCell>
  <p className='Montant-tab'>{item.Montant}</p>
   </TableCell>
   <TableCell>
  <p className='Nbr_articles-tab'>{item.Nbr_articles}</p>
   </TableCell>
   <TableCell>
  {item.Datecréation}
   </TableCell>
   <TableCell>
   {item?.Staut==="Compléter"||item?.Staut==="Livré"?
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

export default Tablee
