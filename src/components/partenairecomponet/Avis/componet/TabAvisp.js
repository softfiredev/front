import { ArrowCircleRight2, More, Sort, Trash } from 'iconsax-react'
import React,{useState} from 'react'
import Filterbar from '../../../filterbar/Filterbar'
import { Table } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import prod from '../../../../assets/prod4.png'
import { Menu, MenuItem, Rating, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
const TabAvisp = () => {
    const [id, setid] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const rows = [
        {
            Promocode: "18938",
            Montantcoupon: "100",
            Montantutilisé: "16",
            Expiration: "20/03/2023",
       
        },
        {
            Promocode: "18938",
            Montantcoupon: "100",
            Montantutilisé: "16",
            Expiration: "20/03/2023",
       
        },
        {
            Promocode: "18938",
            Montantcoupon: "100",
            Montantutilisé: "16",
            Expiration: "20/03/2023",
       
        },
        {
            Promocode: "18938",
            Montantcoupon: "100",
            Montantutilisé: "16",
            Expiration: "20/03/2023",
       
        },
    
    ];
      const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      }
    const styles = {
        tableCell: {
            color: '#7B8794',
       
            
        },
    };
    return (
        <div className='TabAvisp'>
            <Filterbar icon={<Sort size="22" color="#222222" />} nom="Trier par" titre="TabAvisp" />



            <TableContainer component={Paper} style={{
                boxShadow: "none", 
                borderWidth: " 1px 0px",
                borderStyle: "solid",
                borderColor: "#EEEDF2",
                overflow: "hidden",
                borderTop: "none",
                borderBottom:"none"
            }}>
                <Table style={{ width: "95%" }} aria-label="simple table" >
                    <TableBody >
                    {rows.map((row) => (
   <TableRow >


   <TableCell >


       <div className='row-TabAvisp'>
           <img src={prod} style={{marginLeft:"-20%"}} className='imgprod-TabAvisp' />

           <div className='col-TabAvisp'>
               <div> <p className='txt210-TabAvisp'>Jovicolor</p></div>
               <div>                    <p className='txt21-TabAvisp'>Total d’avis: <span className='txt211-TabAvisp'> 117</span></p>
               </div>
               <div>
                   <p className='txt21-TabAvisp'>Le prix : <span className='txt211-TabAvisp'>8.950 DT</span></p>
               </div>
               <div>
                   <p className='txt21-TabAvisp'>Vendeur : <span className='txt211-TabAvisp'> Errahma Library</span></p>
               </div>
           </div>
       </div>

   </TableCell>
   <TableCell style={styles.tableCell} align="left">
       
<div className='col-TabAvisp' style={{marginLeft:"-10%"}}>
<div className='row-TabAvisp'>
   <Rating  
    name="read-only"
  value={2}
 readOnly
size='small'
className="stars"
/>
<div><p className='txt211-TabAvisp'>06-02-2022</p></div>
   </div>
     <div>
     <p className='txt212-TabAvisp'>Enfin un lot qui correspond à la consomnation des enfants Variété, qualité, tout est là.
      </p>
     </div>
       
</div>
       
       
       </TableCell>
   <TableCell style={styles.tableCell} align="left">
       
   <div className='col-TabAvisp' style={{marginLeft:"-100%"}}>   
<More
size="22"
color="#222222"
aria-controls={open ? "basic-menu" : undefined}
aria-haspopup="true"
aria-expanded={open ? "true" : undefined}
onClick={(e) => {handleClick(e); }}
className="more-avis"
/>
</div>
       
       
       </TableCell>
</TableRow>
                    ))}
                     
                    </TableBody>




                </Table>
            </TableContainer>
            <Menu

id="basic-menu"
className="menu-avis"
anchorEl={anchorEl}
open={open}
onClose={handleClose}
MenuListProps={{
    "aria-labelledby": "basic-button",
}}
>
<MenuItem className="menuitem-avis" onClick={handleClose}>
<ArrowCircleRight2 size="20" color="#222"/>
<div>Aller au produit</div>

</MenuItem>
<MenuItem className="menuitem-avis" onClick={handleClose}>
<Trash size="20" color="red"/>
<div>
    
<p style={{color:"red"}}>
Supprimer
</p>
</div>
</MenuItem>

</Menu>
        </div>
    )
}

export default TabAvisp
