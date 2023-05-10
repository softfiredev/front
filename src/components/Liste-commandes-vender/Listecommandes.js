import React, { useEffect, useState } from "react";
import './Listecommandes.css'
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import img1 from "../../assets/Ellipse 503.png"
import Typography from '@mui/material/Typography';
import Filterbar from '../filterbar/Filterbar';
import {ArrowLeft2,ArrowRight2,Sort} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findCommandeBylibrairie } from "../../Store/Service/findCommandeBylibrairie";
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
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const data=[
        {id:"45645645",nom:"Otis Hoppe",prix:"8.500",Nbr:"20",date:"31/03/2023",Staut:"Compléter"},
        {id:"2000254",nom:"Otis Hoppe",prix:"8.500",Nbr:"5",date:"05/03/2023",Staut:"En cours"},
        {id:"45468",nom:"Otis Hoppe",prix:"8.500",Nbr:"10",date:"01/03/2023",Staut:"Nouveau"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},
        {id:"456456456",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},
        {id:"33773732",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"En cours"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},
        {id:"5533223",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Nouveau"},
        {id:"999999955",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Nouveau"},
        {id:"232323232",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},

 
    ]
    const librairieData = useSelector(
      (state) => state.findCommandeBylibrairie.commandeslibrairie
    );
    console.log(librairieData)
const dispatch=useDispatch()
    useEffect(() => {
      dispatch(findCommandeBylibrairie(2));
    },[]);
    

    const navigat=(id)=>{
        navigate(`/Vender/Détails_de_commande/${id}`)
    }
    const filteredDataNouveau = librairieData.filter((item) => {
      return item.etat.includes("Nouveau");
    });
    const filteredDataRejeter = librairieData.filter((item) => {
        return item.etat.includes("Rejeter");
      });
      const filteredEncours = librairieData.filter((item) => {
        return item.etat.includes("en cours");
      });
      const filteredDataCompleter = librairieData.filter((item) => {
        return item.etat.includes("Completer");
      });
  return (
    <div className='liste-c'>
  <div>   <p className='txt-c'>Liste de commandes</p></div>
    <div className='box01-c'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab label={<p className="txttabs-c">Tout</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-c">Nouveau</p>} {...a11yProps(1)} />
          <Tab label={<p className="txttabs-c">En cours</p>} {...a11yProps(2)} />
          <Tab label={<p className="txttabs-c">Compléter</p>} {...a11yProps(3)} />
          <Tab label={<p className="txttabs-c">Rejeter</p>} {...a11yProps(4)} />
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
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{librairieData.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0].nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etat}</p></button></>
:
<>
{obj.etat==="en cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etat}</p></button>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etat}</p></button>:
<>{obj.etat==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etat}</p></button>:<></>}</>}</>}</>}

  
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

{filteredDataNouveau.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0].nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etat}</p></button></>
:
<>
{obj.etat==="en cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etat}</p></button>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etat}</p></button>:
<>{obj.etat==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etat}</p></button>:<></>}</>}</>}</>}

  
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
{filteredEncours.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0].nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etat}</p></button></>
:
<>
{obj.etat==="en cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etat}</p></button>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etat}</p></button>:
<>{obj.etat==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etat}</p></button>:<></>}</>}</>}</>}

  
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
{filteredDataCompleter.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0].nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etat}</p></button></>
:
<>
{obj.etat==="en cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etat}</p></button>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etat}</p></button>:
<>{obj.etat==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etat}</p></button>:<></>}</>}</>}</>}

  
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

{filteredDataRejeter.map((obj,index) => (

<tr className={obj.Staut==="Nouveau"?"backnovo-c":"backnovo-c0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc}</p></td>
<td className='tdwidth1'>{obj.produitlabrairies[0].nb_Article}</td>
<td className='tdwidth1'>{obj.createdAt}</td>

<td className='tdwidth1'>
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>{obj.etat}</p></button></>
:
<>
{obj.etat==="en cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etat}</p></button>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etat}</p></button>:
<>{obj.etat==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etat}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
</div>
        </TabPanel>
    </Box>
    </div>
    <div className='page-c'>  
<div className="pagination1-c">
          <ArrowLeft2 size="22" color="#626262" style={{cursor:"pointer"}} />
          <p>Page 1 sur 1</p>
          <ArrowRight2 size="22" color="#626262" style={{cursor:"pointer"}} />
        </div></div>

    </div>
  )
}

export default Listecommandes
