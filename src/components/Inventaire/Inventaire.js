import React from 'react'
import './Inventaire.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InputAdornment, OutlinedInput } from "@mui/material";

import {    SearchNormal1,FilterAdd } from "iconsax-react";
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
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className='row-int'>
    <div><p className='txt-int'>Inventaire</p></div>
    <div className='box-int'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
         <Tab label="Liste de produits" {...a11yProps(0)} />
          <Tab label="Les avis" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
      </TabPanel>









      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    
    </Box>
    </div>
    </div>
  )
}

export default Inventaire
