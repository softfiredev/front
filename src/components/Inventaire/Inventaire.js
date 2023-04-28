import React from 'react'
import './Inventaire.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Listevender from '../vender-liste/Listevender';


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

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className='row-int'>
    <div><p className='txt-int'>Inventaire</p></div>
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
  )
}

export default Inventaire
