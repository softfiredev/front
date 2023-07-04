import React,{useState} from 'react'
import './commandes.css'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { Menu, MenuItem, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ArrowDown2, ArrowUp2, More, Sort, Trash } from 'iconsax-react';
import Filterbar from '../../filterbar/Filterbar';
import { Table } from 'react-bootstrap';
import Tabs from '@mui/material/Tabs';
import im from '../../../assets/avt2.png'
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
const Commandespartenaire = () => {
  const [value, setValue] = React.useState(0);
 
const [collapsedRows, setCollapsedRows] = useState([]);

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
const toggleCollapse = (rowIndex) => {
  setCollapsedRows((prevCollapsedRows) => {
    const updatedCollapsedRows = [...prevCollapsedRows];
    updatedCollapsedRows[rowIndex] = !updatedCollapsedRows[rowIndex];
    return updatedCollapsedRows;
  });
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
const styles = {
  tableCell: {
      color: '#7B8794',
  },
};
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
          <div className='row-c3'>
          <Filterbar icon={<Sort size="22" color="#222222" />}  nom="Trier par" />
   
     
          <TableContainer component={Paper} style={{
    boxShadow: "none", borderWidth: " 1px 0px",
    borderStyle: "solid",
    borderColor: "#EEEDF2",
    overflow: "hidden"
}}>
    <Table style={{ width: "95%" }} aria-label="simple table" >
        <TableHead >
            <TableRow >
                <TableCell style={styles.tableCell}>ID</TableCell>
                <TableCell style={styles.tableCell} align="left">Articles</TableCell>
                <TableCell style={styles.tableCell} align="left">Date d’ajout</TableCell>
                <TableCell style={styles.tableCell} align="left">Vendeur</TableCell>
                <TableCell style={styles.tableCell} align="left">Tarification</TableCell>
                <TableCell style={styles.tableCell} align="left">Statut</TableCell>
            
            </TableRow>
        </TableHead>
        <TableBody >
            
            {rows.map((row,rowIndex) => (
              

                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                    <p className='tb-tp'> {row.id}  </p>  
                    </TableCell>
                  
                    <TableCell component="th" scope="row">
                 
                 <div  >
       
                   <div style={{display:"flex",gap:"1em"}}>
      <div > <p className='tb-tp'>
    {row.Articles}
  </p>      </div>
  <div>
  {collapsedRows[rowIndex] && (
  <ArrowUp2
 size="22"
 color="#222"
 onClick={() => toggleCollapse(rowIndex)} style={{ cursor: 'pointer' }}
/>

)}
  {!collapsedRows[rowIndex] && (
  <ArrowDown2
 size="22"
 color="#222"
 onClick={() => toggleCollapse(rowIndex)} style={{ cursor: 'pointer' }}
/>

)}

  </div>
             </div>     

  {collapsedRows[rowIndex] && (
<div style={{display:"flex",gap:"0.5em"}}>
<div><p>1x</p></div>
<div><img src={im} className='imgcollapsedRows'/></div>
<div><p  className='txtcollapsedRows'>GOUACHE 9T METAL...</p></div>
</div>
)}
                  
                  
                 </div>
            
                    </TableCell>                 
                       <TableCell component="th" scope="row">
                    <p className='tb-tp'> {row.Dateajout}  </p>  
                    </TableCell>                   
                     <TableCell component="th" scope="row">
                     <div className='vend-com'>
                     <img src={im} className='img-com'/>
                    <div><p className='tb-tp'> {row.Vendeur}  </p> </div>
                     </div>
                   
                    </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> {row.Tarification} </TableCell>
 <TableCell component="th" scope="row"style={{borderRight: "none" }}> 
 <div
                            className={
                              row.Statut === "en cours"
                                ? "Statut"
                                : row.Statut === "Annule"
                                ? "annule"
                                : "livre"
                            }
                          >
                            {row.Statut}
                          </div>
 </TableCell>
                  
                </TableRow>
  
                    
            ))}
        </TableBody>
    </Table>
</TableContainer>

<hr className="sous-line-array" />
                <br />
                <div>
                  <div className="row214-comn">
                  <div>  <p className="nombre-page">1-10 sur 19 commandes</p></div>
                    <div className="select-page">
                     <div> <p className="select-lable">
                        La page sur laquelle vous êtes
                      </p></div>
                      <select className="Select-comn">
                        <option value={1}>1</option>
                      </select>
                    </div>
                  </div>
                </div>






        
        </div>    
        </TabPanel>
      </div>
      </div>

    </div>
  )
}

export default Commandespartenaire
