import React,{useEffect, useState} from 'react'
import './commandes.css'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllcommandeByclient } from '../../../Store/Service/getAllcommandebyClient';
import Tabcommandes from './tabcommandes/Tabcommandes';

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Commandespartenaire = (props) => {
  const [value, setValue] = React.useState(0);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [id, setid] = useState();
  const [Modelopen, setModelopen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
};

const rows = [
  {
      id: "#100194",
      Articles: "2",
      Dateajout: "06/02/2022",
      Vendeur: "Errahma Library",
      Tarification: "120 dt",
      Statut: "en cours",
  
  },
  {
    id: "#100194",
    Articles: "2",
    Dateajout: "06/02/2022",
    Vendeur: "Errahma Library",
    Tarification: "120 dt",
    Statut: "Livre",

},  {
  id: "#100194",
  Articles: "2",
  Dateajout: "06/02/2022",
  Vendeur: "Errahma Library",
  Tarification: "120 dt",
  Statut: "Annule",

},  {
  id: "#100194",
  Articles: "2",
  Dateajout: "06/02/2022",
  Vendeur: "Errahma Library",
  Tarification: "120 dt",
  Statut: "Active",

},
];

const commandes = useSelector(
  (state) => state.AllcommandeByclient.commandesClient
);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAllcommandeByclient(props?.user?.id));
}, []);
const filteredDataLivré = commandes?.filter((item) => {
  return item?.etatClient?.includes("livre");
});
const filteredDataAnnulé = commandes?.filter((item) => {
  return item?.etatClient?.includes("Annule");
});
const filteredEncours = commandes?.filter((item) => {
  return item?.etatClient?.includes("en cours");
});

  return (
    <div style={{background:"#F5F5F5",padding:"2%"}}>
      <div  className='cp'>
    <div>  <p className='txt1-cp'>Mes commandes</p></div>
      <div  className='cp2'>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { background: "#F7D070" } }}
              >
                <Tab
                  label={<p className="txttabs-c">Tout</p>}
                  {...a11yProps(0)}
                />
                <Tab
                  label={<p className="txttabs-c">Livré</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className="txttabs-c">En cours</p>}
                  {...a11yProps(2)}
                />
                <Tab
                  label={<p className="txttabs-c">Annulé</p>}
                  {...a11yProps(3)}
                />
              </Tabs>
              
      
            </Box>
            
            <TabPanel value={value} index={0}>
         <Tabcommandes commandes={commandes} />
        </TabPanel>
        <TabPanel value={value} index={1}>
         <Tabcommandes commandes={filteredDataLivré} />
        </TabPanel>
        <TabPanel value={value} index={2}>
         <Tabcommandes commandes={filteredEncours} />
        </TabPanel>
        <TabPanel value={value} index={3}>
         <Tabcommandes commandes={filteredDataAnnulé} />
        </TabPanel>
      </div>
      </div>

    </div>
  )
}

export default Commandespartenaire
