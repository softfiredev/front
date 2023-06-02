import React, { useEffect,useState } from "react";
import { InputAdornment, OutlinedInput} from "@mui/material";
import { ArrowCircleLeft,Trash} from "iconsax-react";
import "./listpro.css";
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pagination from "@mui/material/Pagination";
import Typography from '@mui/material/Typography';
import { SearchNormal1} from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { getNbProduitlibBycategorie } from "../../../Store/Service/nbProduitLibByCategoorie";
import Cardlisteprod from "../../card-produit/cardlisteprod/cardlisteprod";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import prod4 from '../../../assets/prod4.png'
import { Link, useNavigate } from "react-router-dom";
import { TickSquare, More, FilterAdd, ArrowCircleRight2, Edit } from "iconsax-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const data=[
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
  {id:"#0123456",nom:"COMPAS AVEC CRAYON 2506 INV"},
]
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

const Listpro = (props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [op, setop] = React.useState(false);
    const [op2, setop2] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const [state, setState] = React.useState({
    right: false,
  });  const [nextpage, setnextpage] =useState(true);
  const produitbycategorie = useSelector(
    (state) => state.NbproduitLib.Nbproduit
  );

const [Visible, setVisible] =useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNbProduitlibBycategorie(props.user?.id));
  }, []);
  const items =8;
  const [current,setCurrent]=useState(1)
  const NbPage=Math.ceil(produitbycategorie.length/items);
  const startIndex=(current -1)*items;
  const endIndex=startIndex+items;
  const DataPerPage=produitbycategorie.slice(startIndex,endIndex)
  function handlePagination (event,page) {
    setCurrent(page)
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
 
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
    
          <ListItem >
                   <div className="col5487-lst">

        <div className="row-lispr">
        <div className="rowbox-int" style={{ cursor: "pointer" }}   onClick={toggleDrawer(anchor, false)} >
            <ArrowCircleLeft size="25" color="#9E9E9E" />
            <div>
              <p className="txtbox-int">Retourner</p>
            </div>
          </div>  

<div style={{display:"flex",gap:"1em"}}>
<button className="bntlist-pro">
<Trash
 size="22"
 color="#222"
/>
</button>
<button className="bntlist-pro2" onClick={()=>{navigate('/Admin/Modifier_produit/2')}}>
Modifier
</button>
</div>


        </div>

          <div><p className="txtliste-lit">COMPAS AVEC CRAYON 2506 INV</p></div>
          <div><p className="txtliste-lit2">#0123456</p></div>
<div>

<Swiper
      spaceBetween={50}
      slidesPerView={3}

    >

<img src={prod4}  className="imglist-lst2"/>

    </Swiper>
    <br/>
</div>
<div><p className="txtliste-lit">Description:</p></div>
<div><p className="txtliste-lit3">Ce produit est livré avec 24 couleurs :
blanc, gris, noir, violet, bleu, bleu-ciel, vert, vert foncé, orange, rose, rouge, jaune....</p></div>
<br/>

             
             
              </div>


         
          
     
          </ListItem>
    
      </List>
    </Box>
  );
  return (
    <>

      <div className="pages-container1">

      <div className="header-page-categorie">
     <div>   <h1 className="title-page-categorie">Liste de produits</h1></div>
        <button className="btn-suggestion" onClick={()=>navigate("/Admin/Ajouter_un_produit")}>
          Ajouter produit
        </button>

  
      </div>


      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#222" } }}>
         <Tab label={<p className="txttabs-c">Liste de produits</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-c">Suggestions</p>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>  
      <div className="box1-categorie">
        <div className="header-box1">
          <OutlinedInput
            className="search-inpute2"
            placeholder={"Rechercher l'ID de commande, l'article"}
            endAdornment={
              <InputAdornment position="end">
                <SearchNormal1 size="19" color="#B1B1B1" />
              </InputAdornment>
            }
          />
          <div className="pagination-VenderCategorie">
   
        <div className="rowlisteprod">
        <select className="select-1-0">
              <option value={10}> Catégories</option>
            </select>

            <select className="select-1-0">
              <option value={10}>Sous-catégories</option>
            </select>
          </div>
          </div>
        </div>



    
      </div>

 <div class="grid-container">
{data?.map((obj) => (
  <div class="grid-item"  ><Cardlisteprod setVisible={(data)=>{setVisible(data)}} toggleDrawer={toggleDrawer} id={obj.id} titre={obj.nom} Role={'admin'}/>  </div>

))}

<div>
     <React.Fragment>
      
          <Drawer
            anchor={'right'}
            open={state['right']}
            width="150"
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
 
    </div>

  </div>
      <div className="page-listev">
      <Pagination
                count={NbPage}
                shape="rounded"
                className="pagination-shop"
                page={current}
                onChange={handlePagination}
              />
      </div>
      </TabPanel>

      <TabPanel value={value} index={1}>  
      <table>
        <tr>
          <th>
            <TickSquare
              size="22"
              color="#7E7E7E"
              style={{ marginLeft: "15%" }}
            />
          </th>
          <th>#</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Catégorie</th>
          <th>Qté</th>
          <th>Mise à jour</th>
        </tr>
      


     
        
               <Menu
              id="basic-menu"
              className="menu-listev"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem className="menuitem-listev" onClick={handleClose}>
                <ArrowCircleRight2 size="22" color="#222222" />
                <span>
                   <Link to={"/Detailproduit/"} className="txtmenu-avis">Aller au produit</Link>
                </span>
              </MenuItem>
              <MenuItem className="menuitem-listev">
                <Edit size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Modifier</p>
                </span>
              </MenuItem>
              <MenuItem
                className="menuitem-listev"
                onClick={() => {
                  setop2(true);
                }}
              >
                <Trash size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Supprimer</p>
                </span>
              </MenuItem>
            </Menu>


      </table>

     
      </TabPanel>
      </Box>



    </div>

  
    </>
  );
};
export default Listpro;

