import { Avatar } from '@material-ui/core';
import { ArrowCircleLeft } from 'iconsax-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./details_client.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Profil from './Profile/Profile';
import Liste_commandes from './Liste_commandes/Liste_commandes';
import Commentaires from './Commentaires/Commentaires';
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
const Details_client = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const [img, setimg] = React.useState("");
    const [name, setname] = React.useState("");
    const handelchang=(img,name)=>{
      setimg(img)
      setname(name)
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
      }

  return (
    <div className='Details_client'>
 <div className='mcol-Details_client'>
     
 <div
        className="rowbox-dc"
        style={{ cursor: "pointer" }}
        onClick={()=>{navigate('/Admin/ListeClients')}}
      >
        <ArrowCircleLeft size="25" color="#9E9E9E" />
        <div>
          <p className="txtbox-dc">Retourner</p>
        </div>
      </div>

      <div className='mrow-Details_client'>
        <Avatar src={img} className='avtar-Details_client'/>
        <div><p className='txt-Details_client'>{name}</p></div>
      </div>
 </div>


<div className='box-Details_client'>

<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#222", } }}>
         <Tab  label={<p className="txttabs-Details_client">Profile</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-Details_client">Liste de commandes</p>} {...a11yProps(1)} />
          <Tab  label={<p className="txttabs-Details_client">Commentaires</p>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
    <Profil handelchang={handelchang}/>
  </TabPanel>
  <TabPanel value={value} index={1}>
  <Liste_commandes/>
  </TabPanel>
  <TabPanel value={value} index={2}>
  <Commentaires/>
  </TabPanel>
</div>


    </div>
  )
}

export default Details_client
