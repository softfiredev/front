import React, { useEffect, useState } from 'react'
import "./Catégories.css"
import Filterbar from "../../filterbar/Filterbar"
import { Base_url, Path } from '../../../config/Config';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { Table } from 'react-bootstrap';
import { Edit, More, Trash } from 'iconsax-react';
import { Checkbox, Menu, MenuItem, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Catégories = () => {
  const nav=useNavigate()
    const formatDate = (inputDate) => {
        const dateObj = new Date(inputDate);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear().toString();
        return `${day}-${month}-${year}`;
      };
    const [all, setAll] =useState([]);
    const [id, setid] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const AllFavorisp = async () => {
      try {
        const response = await axios.get(Base_url + Path.findCategorie);
        setAll(response?.data?.categorie);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {
      AllFavorisp()
    }, []);
const styles = {
  tableCell: {
    fontSize: "16px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "20px",
  },
};
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      }
      const update=()=>{

      }
      const delect=async()=>{
        try {
            const response = await axios.delete(Base_url + Path.deleteCategorie+selectedCheckboxes);
            toast.success("votre Catégorie a ete Supprimer avec success", {
                autoClose: 1000,
              })
            setSelectedCheckboxes([])
            AllFavorisp()
        
          } catch (error) {
            console.error("Error fetching data:", error);
          }
      }
      const delecte=async()=>{
        try {
            const response = await axios.delete(Base_url + Path.deleteCategorie+id);
            toast.success("votre Catégorie a ete Supprimer avec success", {
                autoClose: 1000,
              })
            setSelectedCheckboxes([])
            AllFavorisp()
        
          } catch (error) {
            console.error("Error fetching data:", error);
          }
      }
      const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

      const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
    
        if (checked) {
          setSelectedCheckboxes([...selectedCheckboxes, value]);
        } else {
          setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== value));
        }
      };
  return (
    <div className='Catégories'>
     <div className='row1-Catégories'>
         <div className='txt1-Catégories'><p>Catégories</p></div>
<div style={{display:"flex",gap:"1em"}}>
{ selectedCheckboxes.length!==0?
    <button className='bnt2-Catégories' onClick={delect}>
    <Trash
     size="24"
    />Supprimer</button>
    :
    ""
}
<button className='bnt-Catégories' onClick={()=>{nav("/Admin/AjouteGategories")}}>Ajouter catégorie</button>
</div>
     </div>
     <div className='box1-Catégories'>
      <Filterbar icon="none"/>
      <div>
      <TableContainer component={Paper} style={{
    boxShadow: "none", borderWidth: " 1px 0px",
    borderStyle: "solid",
    borderColor: "#EEEDF2",
    overflow: "hidden"
}}>
    <Table style={{ width: "95%" }} aria-label="simple table" >
        <TableHead >
            <TableRow >
                <TableCell style={styles.tableCell}>Catégorie</TableCell>
                <TableCell style={styles.tableCell} align="left">Description</TableCell>
                <TableCell style={styles.tableCell} align="left">Sous-catégories</TableCell>
                <TableCell style={styles.tableCell} align="left">Dernière mise à jour</TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
            {all.map((row,rowIndex) => (
                <TableRow
                    key={rowIndex}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                     <TableCell component="th" scope="row">
                    <div style={{display:"flex",alignItems:"center"}}>
                    <Checkbox style={{ color: " #E9B949" }} key={rowIndex} 
       value={row?.id}
       onChange={handleCheckboxChange}
       checked={selectedCheckboxes[0]==row?.id || false}
  />
                      <div>  <p className='tb-tp'>   {row?.name} </p></div>
      
                     </div>
                    </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> {row?.Description} </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> {row?.Souscategories?.length} </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> {formatDate(row?.createdAt)} </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> 
 
 <More
size="22"
color="#222222"
aria-controls={open ? "basic-menu" : undefined}
aria-haspopup="true"
aria-expanded={open ? "true" : undefined}
onClick={(e) => {handleClick(e);setid(row?.id)}}
className="more-avis"
/>
 
 
  </TableCell>

                </TableRow>
  
                    
            ))}
        </TableBody>
    </Table>
</TableContainer>
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

<div style={{display:"flex",justifyContent:"center",gap:"0.5em"}}>
<Edit size="24" color="#adadad" variant="Bulk"/>
<div>Modifier</div>
</div>
</MenuItem>

<MenuItem className="menuitem-avis" onClick={()=>{delecte(); setAnchorEl(null)}}>
<div style={{display:"flex",justifyContent:"center",gap:"0.5em"}}>
<Trash
 size="24"
 color="red"
 variant="Bulk"
/>
<p style={{color:"red"}}>
Supprimer
</p>
</div>
</MenuItem>

</Menu>
    </div>
  )
}

export default Catégories
