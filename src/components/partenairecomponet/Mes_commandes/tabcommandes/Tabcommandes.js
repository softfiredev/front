import React,{useState} from 'react'
import Filterbar from '../../../filterbar/Filterbar'
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { Menu, MenuItem, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ArrowDown2, ArrowUp2, More, Sort, Trash } from 'iconsax-react';
import { Table } from 'react-bootstrap';
const styles = {
    tableCell: {
        color: '#7B8794',
    },
  };
const Tabcommandes = (props) => {
    const [collapsedRows, setCollapsedRows] = useState([]);

    const toggleCollapse = (rowIndex) => {
      setCollapsedRows((prevCollapsedRows) => {
        const updatedCollapsedRows = [...prevCollapsedRows];
        updatedCollapsedRows[rowIndex] = !updatedCollapsedRows[rowIndex];
        return updatedCollapsedRows;
      });
    };

    
  return (
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
      
      {props.commandes.map((row,rowIndex) => (
        

          <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
              <p className='tb-tp'> #{row.id}  </p>  
              </TableCell>
            
              <TableCell component="th" scope="row">
           
           <div  >
 
             <div style={{display:"flex",gap:"1em"}}>
<div > <p className='tb-tp'>
{row.produitlabrairies?.length}
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
<div style={{display:"flex", flexDirection:"column",gap:"1em"}}>
{row?.produitlabrairies?.map((e)=>(
                        <div style={{display:"flex",gap:"0.5em"}}> 
                             
                          <div>
                            <p className="qte33">
                              {e?.produit_c_Detail?.Qte}X
                            </p>
                          </div>
                          <img
                            src={
                              "http://127.0.0.1:8080/uploads/" +
                              e.imagelibrairies?.[0]?.name_Image
                            }
                            alt="nameImage"
                            className='imgcollapsedRows'
                          />
                          <div>
                            <p className="titleProduit">{e.titre}</p>{" "}
                          </div>
                        </div>
                      ))}
</div>
)}
            
    
           </div>
      
              </TableCell>                 
                 <TableCell component="th" scope="row">
              <p className='tb-tp'> {row.createdAt}  </p>  
              </TableCell>                   
               <TableCell component="th" scope="row">
               <div className='vend-com'>
               <img     src={"http://127.0.0.1:8080/uploads/" +row?.labrairie?.imageStore                             } className='img-com'/>
              <div><p className='tb-tp'> {row?.labrairie?.nameLibrairie}  </p> </div>
               </div>
             
              </TableCell>
<TableCell component="th" scope="row"style={{borderRight: "none" }}> {row.total_ttc}Dt </TableCell>
<TableCell component="th" scope="row"style={{borderRight: "none" }}> 
<div
                      className={
                        row.etatClient === "en cours"
                          ? "Statut"
                          : row.etatClient === "Annule"
                          ? "annule"
                          : "livre"
                      }
                    >
                      {row.etatClient}
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
  )
}

export default Tabcommandes
