import React from 'react'
import "./Avis.css"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {SearchNormal1,Sort,ArrowLeft2,ArrowRight2} from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import img1 from "../../assets/prod2.png";
import Rating from "@mui/material/Rating";
import img from "../../assets/Ellipse 503.png"

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
const Avis = (props) => {
    const data=[{id:"103429",nom:"GOUACHE 9T METAL",
    nomcl:"Otis Hoppe",
    cat:"Scolaire",
    date:"20/03/2023",
    Commentaire:"La peinture Gouache offre des couleurs vives et une consistance lisse à un prix abordable."}
    ,
    {id:"103429",nom:"GOUACHE 9T METAL",
    nomcl:"Otis Hoppe",
    cat:"Scolaire",
    date:"20/03/2023",
    Commentaire:"La peinture Gouache offre des couleurs vives et une consistance lisse à un prix abordable."}
    ,{id:"103429",nom:"GOUACHE 9T METAL",
    nomcl:"Otis Hoppe",
    cat:"Scolaire",
    date:"20/03/2023",
    Commentaire:"La peinture Gouache offre des couleurs vives et une consistance lisse à un prix abordable."}
]
  return (
    <TabPanel value={props.value} index={1} >

<br/>
 <div className='row1-int'>
    <div className='row2-int'> 
    <OutlinedInput
          className="input-int"
          placeholder={"Rechercher..."}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />
    <button className='bnt0-int'>
    <Sort size="22" color="#222222"/>
    <div><p  className='txt0-int'>Trier par</p></div>
    </button>
    </div>

    <div className='row2-int'> 
    <p>Affichage</p>
    <select className="select-int">
            <option value={10}> 10</option>
          </select>
          <p className='txt2-int'>résultats sur 50</p>
    </div>

 </div>
<br/><br/>

 <table>
<tr>

<th>Produit</th>
<th>Score</th>
<th>Client</th>
<th>Date</th>
<th>Commentaire</th>


</tr>

{data.map((obj,index) => (
<tr>

<td className='tdwidth2-aviss'> <div className="row-int01">
            <img src={img1} className="img1-int" />
              <div style={{marginTop:"3%"}}><p className='txt01-int'>{obj.nom}</p></div>
              </div>
            </td>
<td className='tdwidth02-aviss'>
<p className='txt02-int'><Rating name="read-only" value={props.nbstart} readOnly
                defaultValue={2}
                size="small"
                className="stars"
              /></p>
              </td>
<td className='tdwidth10-aviss'>
    <div className='tdwidth3-aviss'>
    <div> <img src={img} alt="maktba"  className="img-aviss"/></div>
<div><p className='txt0014-aviss'>{obj.nomcl}</p></div>
    </div>

</td>
<td className='tdwidth10-aviss'>{obj.date}</td>
<td className='tdwidth10-aviss'><p className='comm-aviss'>{obj.Commentaire}</p></td>


</tr>
))}


</table>
<br/><br/>
<div className='page-listev'>  
<div className="pagination1-listev">
          <ArrowLeft2 size="22" color="#626262" style={{cursor:"pointer"}} />
          <p>Page 1 sur 1</p>
          <ArrowRight2 size="22" color="#626262" style={{cursor:"pointer"}} />
        </div></div>
  </TabPanel>
  )
}

export default Avis
