import React from 'react'
import './ListecomondeAdmin.css'
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
const ListecomondeAdmin = () => {
  const [value, setValue] = React.useState(0);
  const [action, setAction] = React.useState("Tout");
  const handleChange = (event, newValue) => {
    setValue(newValue);

  }
  const data = [{
    title: "Tout les commandes",
    nb: "21564"
  },
  {
    title: "Nouveau commandes",
    nb: "467",
    icon: <InfoCircle size="20" color="#E9B949" variant="Bulk" />
  },
  {
    title: "Commandes en cours",
    nb: "133",
    icon: <MoreCircle size="20" color="#2680C2" variant="Bulk" />
  },
  {
    title: "Commandes compléter",
    nb: "3096",
    icon: <TickCircle size="20" color="#3F9142" variant="Bulk" />
  },
  {
    title: "Commandes rejeter",
    nb: "78",
    icon: <CloseCircle size="20" color="#BA2525" variant="Bulk" />
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
      Staut: "Compléter"
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
    { label: 'Nouveau', action: 'Nouveau' },
    { label: 'En cours', action: 'En cours' },
    { label: 'Compléter', action: 'Compléter' },
    { label: 'Rejeter', action: 'Rejeter' },
  ];
  const tabPanelData = [0, 1, 2, 3, 4];
  const filteredData = action == "Tout" ? tab : tab.filter(item => item.Staut === action);
  return (
    <div className='ListecomondeAdmin'>
      <div> <p className='txt-ListecomondeAdmin'>Liste de commandes</p></div>
      <div className='row-ListecomondeAdmin'>
        {data.map((item, index) => (
          <div className='box-ListecomondeAdmin'>
            <div className={item?.icon ? 'minirow-ListecomondeAdmin' : ""}>
              {item?.icon}
              <p className='txt3-ListecomondeAdmin'>{item.title}</p>
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
export default ListecomondeAdmin
