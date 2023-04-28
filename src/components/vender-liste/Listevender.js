import React from 'react'
import { InputAdornment, OutlinedInput } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {SearchNormal1,FilterAdd,TickSquare,More,ArrowLeft2,ArrowRight2} from "iconsax-react";
import img1 from "../../assets/prod2.png";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
const Listevender = (props) => {
    const data=[{id:"103429",nom:"GOUACHE 9T METAL",prix:"8.500",cat:"Scolaire",Qté:"20",Mise:"20/03/2023"},{id:"103429",nom:"GOUACHE 9T METAL",prix:"8.500",cat:"Scolaire",Qté:"20",Mise:"20/03/2023"},{id:"103429",nom:"GOUACHE 9T METAL",prix:"8.500",cat:"Scolaire",Qté:"20",Mise:"20/03/2023"},{id:"103429",nom:"GOUACHE 9T METAL",prix:"8.500",cat:"Scolaire",Qté:"20",Mise:"20/03/2023"}]
  return (
    <TabPanel value={props.value} index={0}>
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
    <FilterAdd size="22" color="#222222"/>
    <div><p  className='txt0-int'>Ajouter filtre</p></div>
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
<th><TickSquare size="22" color="#7E7E7E"style={{ marginLeft:"15%"}}/></th>
<th>#</th>
<th>Nom</th>
<th>Prix</th>
<th>Catégorie</th>
<th>Qté</th>
<th>Mise à jour</th>

</tr>

{data.map((obj,index) => (
<tr>
<td className='tdwidth0'> <Checkbox style={{ color: " #E9B949" }} key={index}/></td>
<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-int01">
            <img src={img1} className="img1-int" />
              <div style={{marginTop:"3%"}}><p className='txt01-int'>{obj.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-int'>{obj.prix}</p></td>
<td className='tdwidth1'>{obj.cat}</td>
<td className='tdwidth1'>{obj.Qté}</td>
<td className='tdwidth1'>{obj.Mise}</td>
<td >      <div className="more-int">
                <More size="22"  color="#222222"                
                />
              </div></td>
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

export default Listevender