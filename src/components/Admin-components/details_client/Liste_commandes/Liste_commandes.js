import React, { useEffect } from 'react'
import './Liste_commandes.css'
import Filterbar from '../../../filterbar/Filterbar';
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
import img from '../../../../assets/Ellipse 150.png'
import { getAllcommandeByclient } from '../../../../Store/Service/getAllcommandebyClient';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Liste_commandes = () => {
  const [action, setAction] = React.useState("Tout");
  const data=[{titre:"Tout"},{titre:"Nouveau"},{titre:"En cours"},{titre:"Compléter"},{titre:"Rejeter"}]
const commandes = useSelector(
  (state) => state.AllcommandeByclient.commandesClient
);
const { id } = useParams();
const dispatch=useDispatch()
useEffect(() => {
  dispatch(getAllcommandeByclient(id));
}, []);

const filteredData =action=="Tout"?commandes:commandes.filter(item => item?.etatVender === action);

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
      {filteredData?.map((item, index) => (
   <TableRow>
   <TableCell>
   {item?.id}
   </TableCell>
   <TableCell>
   <div className='row-tab'><Avatar src={"http://localhost:8080/uploads/"+item?.labrairie?.imageStore} className='img-tab'/><div><p>{item?.labrairie?.nameLibrairie}</p></div> </div>
   </TableCell>
   <TableCell >
  <p className='Montant-tab'>{item?.total_ttc?.toFixed(3)}</p>
   </TableCell>
   <TableCell >
  <p className='Nbr_articles-tab'>{item?.produitlabrairies?.length}</p>
   </TableCell>
   <TableCell>
  {item?.createdAt}
   </TableCell>
   <TableCell>
   {item?.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{item?.etatVender}</p></button></>
:
<>
{
item?.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{item?.etatVender}</p></button>
:<>{item?.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>Rejeter</p></button>:
<>{item?.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{item?.etatVender}</p></button>:<></>}</>}</>}</>}
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
