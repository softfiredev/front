import React from 'react'
import './Approvisionner.css'
import {ReceiptText,ShoppingCart} from "iconsax-react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import img2 from "../../assets/Ellipse 503.png"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img1 from "../../assets/prod2.png";
import Filterbar from '../filterbar/Filterbar';
import {ArrowLeft2,ArrowRight2,Sort} from "iconsax-react";
const Approvisionner = () => {
    const [value, setValue] = React.useState(0);
    const data=[
        {id:"45645645",nom:"Otis Hoppe",prix:"8.500",Nbr:"20",date:"(+216) 20 222 222",Staut:"Compléter"},
        {id:"2000254",nom:"Otis Hoppe",prix:"8.500",Nbr:"5",date:"(+216) 20 222 222",Staut:"Compléter"},
        {id:"45468",nom:"Otis Hoppe",prix:"8.500",Nbr:"10",date:"(+216) 20 222 222",Staut:"Compléter"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"(+216) 20 222 222",Staut:"En attente"},
        {id:"456456456",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"(+216) 20 222 222",Staut:"En attente"},
        {id:"33773732",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"(+216) 20 222 222",Staut:"Compléter"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"(+216) 20 222 222",Staut:"En attente"},
        {id:"5533223",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"(+216) 20 222 222",Staut:"En attente"},
        {id:"999999955",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"(+216) 20 222 222",Staut:"Compléter"},
        {id:"232323232",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"(+216) 20 222 222",Staut:"En attente"},

 
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
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
    
    
  return (
    <div className='Approvisionner'>
      <div className='row1-Appr'>
        <div><p className='txt1-Appr'>Approvisionner</p></div>
        <div className='row2-Appr'>
            <button className='bnt1-appr'><div className='rowbnt-appr'><ReceiptText size="24" color="#222" variant="Bold"/><div><p>Transactions</p></div></div></button>
            <button className='bnt2-appr'><ShoppingCart size="24" color="#fff" variant="Bold" style={{marginTop:"20%"}}/><p className='patch-appr'><p className='patchtxt-appr'>+3</p></p></button>

            </div>
    
      </div>
      <div className='box01-Appr'>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab label={<p className="txttabs-Appr">Articles</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-Appr">Fournisseurs</p>} {...a11yProps(1)} />
     
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-Appr'>
      <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>

<table>
<tr>

<th>#</th>
<th>Produit</th>
<th>Prix</th>
<th>Qté</th>
<th>Fournisseur</th>
<th>Téléphone</th>
<th></th>
</tr>

{data.map((obj,index) => (

<tr  className='backnovo-Appr'>

<td className='tdwidth-Appr'>{obj.id}</td>
<td className='tdwidth02-Appr'> 
         
<div className="row-Appr01">
            <img src={img1} className="img2-Appr" />
              <div style={{marginTop:"3%"}}><p className='txt010-Appr'>{obj.nom}</p></div>
              </div>
      
        
              </td>
<td className='tdwidth1-Appr'><p className='txt020-Appr'>{obj.prix}</p></td>
<td className='tdwidth1-Appr'>{obj.Nbr}</td>
<td className='tdwidth02-Appr'>
<div className="row-Appr01">
            <img src={img2} className="img3-Appr" />
              <div style={{marginTop:"3%"}}><p className='txt010-Appr'>{obj.nom}</p></div>
              </div></td>
<td className='tdwidth101-Appr'>{obj.date}</td>

<td className='tdwidth1-Appr'>
  <div className="bntshoop-appr">
  <ShoppingCart size="24" color="#222" variant="Bold" style={{marginTop:"14%",marginLeft:"13%"}}/>
    </div>
  </td>

</tr>

))}


</table>
      </div>

 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
    
</div>
        </TabPanel>
     
    </Box>
    </div>

    </div>
  )
}

export default Approvisionner
