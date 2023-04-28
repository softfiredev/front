import React from 'react'
import './Inventaire.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Listevender from '../vender-liste/Listevender';

import {Trash,ExportCircle,ArrowCircleLeft} from "iconsax-react";
import Ajouter from '../ajoutprod-vender/Ajouter';

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

const Inventaire = () => {
    const [value, setValue] = React.useState(0);
    const [nextpage, setnextpage] = React.useState(true);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const changepage=()=>{
    setnextpage(false)
    }
  return (
<>
{nextpage?
    <div className='row-int'>
    <div className='row3-int'>
      <div><p className='txt-int'>Inventaire</p></div>
    <div className='row4-int'>
  
      <div style={{cursor:"pointer"}}>  <Trash size="24" color="#E66A6A"/><p className='txt3-int'>Supprimer</p></div>
  <div style={{cursor:"pointer"}}><ExportCircle size="24" color="#515151"/><p className='txt20-int'>Exporter</p></div>
  <div><button className='bnt01-int' onClick={changepage}><p className='txt1-int'>Nouveau produit</p></button></div>

 
    </div>
    </div>
    <div className='box-int'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
         <Tab label="Liste de produits" {...a11yProps(0)} />
          <Tab label="Les avis" {...a11yProps(1)} />
        </Tabs>
      </Box>
<Listevender value={value}/>
      <TabPanel value={value} index={1}>

      </TabPanel>
    
    </Box>
    </div>
    </div>
    :
    <div className='box2-int' >
    <div className='rowbox-int'  style={{cursor:"pointer"}} onClick={()=>{setnextpage(true)}}><ArrowCircleLeft size="25" color="#9E9E9E"/>
    <div><p className='txtbox-int'>Retourner</p></div>
    </div>
    <div><p className='txt-int'>Ajouter produit</p></div>
    <Ajouter/>
    </div>
 
}
</>
  )
}

export default Inventaire
