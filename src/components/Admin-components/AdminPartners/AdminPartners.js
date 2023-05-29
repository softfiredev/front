import React, { useEffect, useState } from "react";
import './AdminPartners.css'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Filterbar from '../../filterbar/Filterbar';
import {Sort,More, Edit, Trash } from "iconsax-react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findCommandeBylibrairie } from "../../../Store/Service/findCommandeBylibrairie";
import Pagination from "@mui/material/Pagination";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
   
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
function a11yProps(index) {

    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Listecommandes = (props) => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [op, setop] = React.useState(false);
    const [op2, setop2] = React.useState(false);
    const librairieData = useSelector(
      (state) => state.findCommandeBylibrairie.commandeslibrairie
    );
    const librairieState = useSelector(
      (state) => state.findCommandeBylibrairie.status
    );
    const [all, setAll] = React.useState(librairieData);

    const navigat=(id)=>{
        navigate(`/Vender/Details_de_commande/${id}`)
        navigate(0)
    }
    const filteredDataNouveau = librairieData?.filter((item) => {
      return item?.etatVender.includes("Nouveau");
    });
    const filteredDataRejeter = librairieData?.filter((item) => {
        return item?.etatVender.includes("Rejeter");
      });
      const filteredEncours = librairieData?.filter((item) => {
        return item?.etatVender.includes("En cours");
      });
      const filteredDataCompléter = librairieData?.filter((item) => {
        return item?.etatVender.includes("Compléter");
      });

      const handleChange = (event, newValue) => {
        setValue(newValue);
      }
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleClicke = () => {
        setop(true);
      };
      const items =8;
      const [current,setCurrent]=useState(1)
      const NbPage=Math.ceil(all?.length/items);
      const startIndex=(current -1)*items;
      const endIndex=startIndex+items;
      const DataPerPage=all?.slice(startIndex,endIndex)
      function handlePagination (event,page) {
        setCurrent(page)
      }     

      const dispatch=useDispatch()
      useEffect(() => {
        dispatch(findCommandeBylibrairie(12));
        if(all?.length===0 && librairieState!="failed") 
        {
          navigate(0)
        }
      }, []);



  return (
    <div className='liste-c'>
  <div>   <p className='txt-c'>Liste de Utilisateurs</p></div>
    <div className='box01-c'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab onClick={()=>{setAll(librairieData);setCurrent(1)}}  label={<p className="txttabs-c">Tout</p>} {...a11yProps(0)} />
          <Tab onClick={()=>{setAll(filteredDataNouveau);setCurrent(1)}} label={<p className="txttabs-c">Librairie</p>} {...a11yProps(1)} />
          <Tab  onClick={()=>{setAll(filteredEncours);setCurrent(1)}}label={<p className="txttabs-c">Fournesseur</p>} {...a11yProps(2)} />
          <Tab  onClick={()=>{setAll(filteredDataCompléter);setCurrent(1)}}label={<p className="txttabs-c">Entreprise</p>} {...a11yProps(3)} />
          <Tab  onClick={()=>{setAll(filteredDataRejeter);setCurrent(1)}}label={<p className="txttabs-c">Ecole</p>} {...a11yProps(4)} />
          <Tab  onClick={()=>{setAll(filteredDataRejeter);setCurrent(1)}}label={<p className="txttabs-c">Association</p>} {...a11yProps(5)} />
          <Tab  onClick={()=>{setAll(filteredDataRejeter);setCurrent(1)}}label={<p className="txttabs-c">Demandes</p>} {...a11yProps(6)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-c'>
      <Filterbar icon={  <Sort size="22" color="#222222"/> } nom="Trier par" />
        
<table>
<tr>

<th>#</th>
<th>Client</th>
<th>Type</th>
<th>Date factorisation</th>
<th>Date de création</th>
<th>Pack</th>
<th>Staut</th>
<th></th>
</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etatVender==="Nouveau"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'>{obj?.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj?.user?.avatar}style={{borderRadius:"50%"}} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.user?.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc?.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj?.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj?.createdAt}</td>
<td className='tdwidth1'>{obj?.createdAt}</td>
<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>Payer</p></button></>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Retard</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td className='tdwidth1'>
    
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      />
  </td>
</tr>

))}


</table>
      </div>

 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{filteredDataNouveau?.map((obj,index) => (

<tr onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar style={{borderRadius:"50%"}} src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etatVender}</p></button></>
:
<>
{obj?.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etatVender}</p></button>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etatVender}</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etatVender}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>
{DataPerPage?.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar style={{borderRadius:"50%"}} src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etatVender}</p></button></>
:
<>
{obj.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etatVender}</p></button>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etatVender}</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etatVender}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
        </div>
  
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>
{filteredDataCompléter?.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar style={{borderRadius:"50%"}} src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>Compléter</p></button></>
:
<>
{obj.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etatVender}</p></button>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etatVender}</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etatVender}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
</div>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar  style={{borderRadius:"50%"}} src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etatVender}</p></button></>
:
<>
{obj?.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etatVender}</p></button>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etatVender}</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etatVender}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
         </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar  style={{borderRadius:"50%"}} src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etatVender}</p></button></>
:
<>
{obj?.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etatVender}</p></button>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etatVender}</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etatVender}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
         </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar  style={{borderRadius:"50%"}} src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etatVender}</p></button></>
:
<>
{obj?.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etatVender}</p></button>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etatVender}</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etatVender}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
         </div>
        </TabPanel>
    </Box>
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
      
              <MenuItem className="menuitem-avis" onClick={handleClicke}>
                <Edit size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Modifier</p>
                </span>
              </MenuItem>
              <MenuItem
                className="menuitem-avis"
                onClick={() => {
                  setop2(true);
                }}
              >
                <Trash size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Supprimer</p>
                </span>
              </MenuItem>
            </Menu>
    <div className='page-c'>  
<div className="pagination1-c">

           <Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
                />

        </div>
        </div>

    </div>
  )
}

export default Listecommandes
