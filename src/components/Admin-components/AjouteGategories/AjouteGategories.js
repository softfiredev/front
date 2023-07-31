import React, { useEffect, useState } from 'react'
import './AjouteGategories.css'
import { InputAdornment, OutlinedInput} from '@mui/material'
import { Table } from 'react-bootstrap';
import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { Trash } from 'iconsax-react';
import axios from 'axios';
import { Base_url, Path } from '../../../config/Config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AjouteGategories = () => {
  const styles = {
    tableCell: {
      fontSize: "16px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "20px",
      color:"rgb(67 64 64 / 71%)",
    },
  };
  const [all, setAll] =useState([]);
const nav=useNavigate()
  const [onesouscategorie, setonesouscategorie] =useState([]);
  const [categorie, setcategorie] =useState({name:"",Description:""});
  const handleInputChange = (field) => {
    return (e) => {
      setcategorie((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };

  const getsouscategorie = async () => {

    try {
      const response = await axios.get(Base_url + Path.ALLsousGategorie);
      setAll(response?.data?.categorie);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getsouscategorie()
  }, []);
  const Ajoutecategorie=async()=>{
    if(categorie.name.length!==0 &&categorie.Description.length!==0)
    {
      try {
        const response = await axios.post(Base_url + Path.AddCategorie,{
          "name":categorie.name,
          "Description":categorie.Description
  });
  toast.success("votre Catégorie a ete Ajoute avec success", {
    autoClose: 1000,
  });
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      nav("/Admin/Categories")
    }
    else{
      toast.error("remplir votre champ Svp !!", {
        autoClose: 1000,
      });
    }

  }

  return (
    <div className='AjouteG'>
    <div className='row1-AjouteG'>
        <div>
        <p className='txt-AjouteG'> Ajoute Catégories</p>
        </div>
         
        <div>
        <button className='bnt-AjouteG' onClick={Ajoutecategorie}>Confirmer les Ajoute</button>
        </div>
         </div>
         <div className='row1-AjouteG'>
            <div className='col-AjouteG'>
             <div>   <p className='txt1-AjouteG'>Générale</p></div>
             <div>  <p className='txt2-AjouteG'>Informations générales sur votre catégorie.</p></div>
            </div>
            <div className='col-AjouteG'>
            <div className='colmini-AjouteG'>
                <div><p className='txt3-AjouteG'>Nom de catégorie</p></div>
                <OutlinedInput
          className="input-AjouteG" placeholder="Nom de catégorie"onChange={handleInputChange("name")}
          value={categorie.name}/>

            </div>

            <div className='colmini-AjouteG'>
                <div><p className='txt3-AjouteG'>Description</p></div>
                <OutlinedInput className='input-AjouteG2'onChange={handleInputChange("Description")}
           value={categorie.Description} placeholder="Description" multiline rows={4} maxRows={80} />
            </div>

            </div>
         </div>


































         <div className='row1-AjouteG'>
            <div className='col-AjouteG'>
             <div>   <p className='txt1-AjouteG'>Liste de sous-catégories:</p></div>
             <div>  <p className='txt5-AjouteG'>Votre catégorie peut avoir plusieurs sous-catégories.</p></div>
            </div>
            <div className='col-AjouteG'>
            <div className='colmini-AjouteG'>
            <OutlinedInput
          className="input-AjouteG"
          placeholder={"Sous-catégorie"}
          endAdornment={
            <InputAdornment position="end">
             <div className='box-catégorie' onClick={()=>{console.log('mrgla')}}><p className='txt6-catégorie'>Ajouter</p></div>
            </InputAdornment>
          }
          value={onesouscategorie.name}
        />
            </div>
            <div className="table-container">
            <TableContainer component={Paper} style={{
    boxShadow: "none", borderWidth: " 1px 0px",
    borderStyle: "solid",
    borderColor: "#EEEDF2",
    overflow: "hidden"
}}>
    <Table style={{ width: "100%" }} aria-label="simple table" >
        <TableHead >
            <TableRow >
                <TableCell style={styles.tableCell}>Sous-catégorie</TableCell>
                <TableCell style={styles.tableCell} align="left">Date de création</TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
   
               
        {all.map((row) => (
  <TableRow style={{cursor:"pointer"}} onClick={() => setonesouscategorie(row)} key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <TableCell component="th" scope="row" style={{ borderRight: "none" }}>
      {row.name}
    </TableCell>
    <TableCell component="th" scope="row" style={{ borderRight: "none" }}>
      {row.createdAt}
    </TableCell>
    <TableCell component="th" scope="row" style={{ borderRight: "none" }}>
      <div className='box2-AjouteG'>
        <Trash size="24" color='#E0574E' variant="Bold" />
      </div>
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

export default AjouteGategories
