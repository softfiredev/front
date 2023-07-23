import React,{useEffect, useState} from 'react'
import './points.css'
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { InputAdornment, OutlinedInput, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { SearchNormal1 } from 'iconsax-react';

import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Base_url, Path } from '../../../config/Config';

const Pointsp = (props) => {
  const [all, setAll] = React.useState([]);
  const [point, setpoint] = React.useState([]);

  const Pointsp = async () => {
    try {
      const response = await axios.get(Base_url + Path.findBypartenaire + props?.user.id);
      setAll(response?.data.bonAchat );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getIdentiteClientt=async()=>{
    try {
      const response = await axios.get(Base_url + Path.identiteClient + props?.user.id);
      setpoint(response?.data?.client?.point);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    Pointsp()
    getIdentiteClientt()
  }, []);
  console.log((all))

const rows = [
  {
      id: "#100194",
      Articles: "2",
      Dateajout: "06/02/2022",
      Vendeur: "Errahma Library",
      Tarification: "120 dt",
      Statut: "Non valide",
  
  },
  {
    id: "#100194",
    Articles: "2",
    Dateajout: "06/02/2022",
    Vendeur: "Errahma Library",
    Tarification: "120 dt",
    Statut: "Non valide",

},  {
  id: "#100194",
  Articles: "2",
  Dateajout: "06/02/2022",
  Vendeur: "Errahma Library",
  Tarification: "120 dt",
  Statut: "valide",

},  {
  id: "#100194",
  Articles: "2",
  Dateajout: "06/02/2022",
  Vendeur: "Errahma Library",
  Tarification: "120 dt",
  Statut: "valide",

},
];
const styles = {
  tableCell: {
    fontSize: "16px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "20px",
  },
};
  return (
    <div style={{background:"#F5F5F5",padding:"2%"}}>
      <div  className='cp'>
    <div>  <p className='txt1-cp'>Mes points</p></div>
      <div  className='pp2'>
      <div>  <p className='txt1-cp20'>Total de points: {point}pts</p></div>
   
          <div className='row-c3'>
          <OutlinedInput
          className="input-pp"
          placeholder={"Code, nom de partenaire"}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />
   
     
          <TableContainer component={Paper} style={{
    boxShadow: "none", borderWidth: " 1px 0px",
    borderStyle: "solid",
    borderColor: "#EEEDF2",
    overflow: "hidden"
}}>
    <Table style={{ width: "95%" }} aria-label="simple table" >
        <TableHead >
            <TableRow >
                <TableCell style={styles.tableCell}>Code</TableCell>
                <TableCell style={styles.tableCell} align="left">Partenaire</TableCell>
                <TableCell style={styles.tableCell} align="left">Nbr de points</TableCell>
                <TableCell style={styles.tableCell} align="left">Date</TableCell>
                <TableCell style={styles.tableCell} align="left">Statut</TableCell>
               
            
            </TableRow>
        </TableHead>
        <TableBody >
            
            {all.map((row,rowIndex) => (
              

                <TableRow
                    key={rowIndex}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                    <p className='tb-tp'> {row?.code}  </p>  
                    </TableCell>
                  
                             
                       <TableCell component="th" scope="row">
                    <p className='tb-tp'> {row?.partenaire?.user?.fullname}   </p>  
                    </TableCell>                   
                     <TableCell component="th" scope="row">
 
                    <div><p className='tb-tp'>   {row?.solde} </p> </div>
                  
                   
                    </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> {row?.createdAt} </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> 
 <div
                            className={
                              row.Statut === "Non valide"
                                ? "Statut"
                                : "livre"
                            }
                          >
                            {row?.etat}
                          </div>
 </TableCell>
                  
                </TableRow>
  
                    
            ))}
        </TableBody>
    </Table>
</TableContainer>

                <br />
                <div>
                  <div className="row214-comn">
                  <div>  <p className="nombre-page">1-10 sur 19 commandes</p></div>
                    <div className="select-page">
                     <div> <p className="select-lable">
                        La page sur laquelle vous êtes
                      </p></div>
                      <select className="Select-comn">
                        <option value={1}>1</option>
                      </select>
                    </div>
                  </div>
                </div>






        
        </div>    
  
      </div>
      </div>

    </div>
  )
}



export default Pointsp

