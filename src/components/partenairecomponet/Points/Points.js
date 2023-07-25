import React,{useEffect, useState} from 'react'
import './points.css'
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { InputAdornment, Menu, MenuItem, OutlinedInput, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { More, SearchNormal1, Trash } from 'iconsax-react';

import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Base_url, Path } from '../../../config/Config';

const Pointsp = (props) => {
  const [all, setAll] = React.useState([]);
  const [id, setid] = React.useState();

  const [point, setpoint] = React.useState([]);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
      setAnchorEl(null);
  };
  const Pointsp = async () => {
    try {
      const response = await axios.get(Base_url + Path.bonAchatfindBypartenaire + props?.user.id);
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
  }, []);
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
const delect=async()=>{
  try {
    const response = await axios.delete(Base_url+Path.bonAchatdelectBypartenaire+ id);
    Pointsp()
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
const update=async ()=>{
  try {
    const response = await axios.put(Base_url+Path.bonAchatupdateBypartenaire+ id);
    Pointsp()
  } catch (error) {
    console.error("Error fetching data:", error);
  }

}
  return (
    <div style={{background:"#F5F5F5",padding:"2%"}}>
      <div  className='cp'>
    <div>  <p className='txt1-cp'>Mes points</p></div>
      <div  className='pp2'>
   
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
                <TableCell style={styles.tableCell} align="left">user</TableCell>
                <TableCell style={styles.tableCell} align="left">Date</TableCell>
                <TableCell style={styles.tableCell} align="left">Statut</TableCell>
                <TableCell style={styles.tableCell} align="left">Action</TableCell>

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
                    <div><p className='tb-tp'>   {row?.user?.fullname} </p> </div>
                    </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> {row?.createdAt} </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> 
 <div
                            className={
                              row.etat === "Non Valide"
                                ? "Statut"
                                : "livre"
                            }
                          >
                            {row?.etat}
                          </div>
 </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> 
 
 <More
size="22"
color="#222222"
aria-controls={open ? "basic-menu" : undefined}
aria-haspopup="true"
aria-expanded={open ? "true" : undefined}
onClick={(e) => {handleClick(e);setid(row?.id) }}
className="more-avis"
/>
 
 
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



                <Menu

id="basic-menu"
className="menu-avis"
anchorEl={anchorEl}
open={open}
onClose={handleClose}
MenuListProps={{
    "aria-labelledby": "basic-button",
}}
>
<MenuItem className="menuitem-avis" onClick={()=>{update(); setAnchorEl(null)}}>
<div>Valide</div>
</MenuItem>
<MenuItem className="menuitem-avis" onClick={()=>{delect(); setAnchorEl(null)}}>
<div>
<p style={{color:"red"}}>
Supprimer
</p>
</div>
</MenuItem>

</Menu>


        
        </div>    
  
      </div>
      </div>

    </div>
  )
}



export default Pointsp

