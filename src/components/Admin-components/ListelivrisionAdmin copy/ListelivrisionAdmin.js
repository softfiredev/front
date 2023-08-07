import React from 'react'
import './ListelivrisionAdmin.css'
import { CloseCircle, InfoCircle, MoreCircle, TickCircle } from 'iconsax-react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tablee from './table/Table';

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
const ListelivraisonsAdmin = () => {
  const [value, setValue] = React.useState(0);
  const [action, setAction] = React.useState("Tout");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const data = [{
    title: "Tout les livraisons",
    nb: "21564"
  },
  {
    title: "Livraisons en cours",
    nb: "467",
    icon: <MoreCircle size="20" color="#2680C2" variant="Bulk" />
  },
  {
    title: "Livraisons livrées",
    nb: "3096",
    icon: <TickCircle size="20" color="#3F9142" variant="Bulk" />
  }

  ]
  const tab = [
    {
      id: "1561",
      Vendeur: "Dr. Ginger Spinka",
      Client: "Otis Hoppe",
      Montant: "150",
      Nbr_articles: "20",
      Datecréation: "20/03/2023",
      Staut: "Livré"
    },
    {
      id: "1561",
      Vendeur: "Dr. Ginger Spinka",
      Client: "Otis Hoppe",
      Montant: "150",
      Nbr_articles: "20",
      Datecréation: "20/03/2023",
      Staut: "Rejeter"
    },
    {
      id: "1561",
      Vendeur: "Dr. Ginger Spinka",
      Client: "Otis Hoppe",
      Montant: "150",
      Nbr_articles: "20",
      Datecréation: "20/03/2023",
      Staut: "En cours"
    }
    ,
    {
      id: "1561",
      Vendeur: "Dr. Ginger Spinka",
      Client: "Otis Hoppe",
      Montant: "150",
      Nbr_articles: "20",
      Datecréation: "20/03/2023",
      Staut: "Nouveau"
    }
  ]
  const tabData = [
    { label: 'Tout', action: 'Tout' },
    { label: 'En cours', action: 'En cours' },
    { label: 'Livré', action: 'Livré' },
  ];
  const tabPanelData = [0, 1, 2];
  const filteredData = action == "Tout" ? tab : tab.filter(item => item.Staut === action);
  return (
    <div className='ListecomondeAdmin'>
      <div> <p className='txt-ListecomondeAdmin'>Liste de livraisons</p></div>
      <div className='ListelivraisonsAdmin'>
        {data.map((item) => (
          <div className='box-ListelivAdmin'>
            <div className={item?.icon ? 'minirow-ListelivAdmin' : ""}>
              {item?.icon}
              <div><p className='txt3-ListecomondeAdmin'>{item.title}</p></div>
            </div>
            <div><p className='txt2-ListecomondeAdmin'>  {item?.nb}</p></div>
          </div>
        ))}
      </div>

      <div className='box2-ListecomondeAdmin'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#222" } }}>
            {
              tabData.map((tab, index) => (
                <Tab
                  key={index}
                  onClick={() => { setAction(tab.action) }}
                  label={<p className="txttabs-c">{tab.label}</p>}
                  {...a11yProps(index)}
                />
              ))}
          </Tabs>
        </Box>
        {
        tabPanelData.map((index) => (
          <TabPanel key={index} value={value} index={index}>
            <Tablee data={filteredData} />
          </TabPanel>
        ))
      }
      </div>
   
    </div>
  )
}

export default ListelivraisonsAdmin
