import React, { useEffect,useState } from "react";
import { InputAdornment, OutlinedInput} from "@mui/material";
import {AddCircle, ArrowCircleLeft } from "iconsax-react";
import "./categorie.css";
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Pagination from "@mui/material/Pagination";
import { SearchNormal1} from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { getNbProduitlibBycategorie } from "../../../Store/Service/nbProduitLibByCategoorie";
import Ajouter from "../../ajoutprod-vender/Ajouter";
import Cardlisteprod from "../../card-produit/cardlisteprod/cardlisteprod";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import prod4 from '../../../assets/prod4.png'


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
const Categorie = (props) => {
  const theme = useTheme();
  const [state, setState] = React.useState({
    right: false,
  });  const [nextpage, setnextpage] =useState(true);
  const produitbycategorie = useSelector(
    (state) => state.NbproduitLib.Nbproduit
  );
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

              <div className="rowbox-int" style={{ cursor: "pointer" }}     onClick={toggleDrawer(anchor, false)} >
            <ArrowCircleLeft size="25" color="#9E9E9E" />
            <div>
              <p className="txtbox-int">Retourner</p>
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
</div>
<div><p className="txtliste-lit">Description:</p></div>
<div><p className="txtliste-lit3">Ce produit est livré avec 24 couleurs :
blanc, gris, noir, violet, bleu, bleu-ciel, vert, vert foncé, orange, rose, rouge, jaune....</p></div>
<br/>
<div className="center-cat"   >
<div>
<AddCircle
 size="42"
 color="#222"
 variant="Bold"
/>
</div>
  
</div>
             
             
              </div>


         
          
     
          </ListItem>
    
      </List>
    </Box>
  );
  return (
    <>
      {nextpage ? 
      
      <div className="pages-container1">
      <div className="header-page-categorie">
     <div>   <h1 className="title-page-categorie">Liste de produits</h1></div>
        <button className="btn-suggestion" onClick={()=>{setnextpage(false)}}>
          Faire une suggestion
        </button>

  
      </div>
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
  <div class="grid-item"  onClick={toggleDrawer('right', true)}><Cardlisteprod id={obj.id} titre={obj.nom}/>  </div>

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





    </div>
    :
    <>
            <div className="box2-int">
          <div
            className="rowbox-int"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setnextpage(true);

            }}
          >
            <ArrowCircleLeft size="25" color="#9E9E9E" />
            <div>
              <p className="txtbox-int">Retourner</p>
            </div>
          </div>

             <Ajouter titre="Faire une suggestion" id={props.user?.id}/>
        
        
        </div>
    </>
    }
  
    </>
  );
};
export default Categorie;
