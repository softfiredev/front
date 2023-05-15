import React, { useEffect,useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { TickSquare, More, FilterAdd, ArrowCircleRight2, Edit, Trash } from "iconsax-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Filterbar from "../filterbar/Filterbar";
import { useDispatch, useSelector } from "react-redux";
import { supprimerprod } from "../../Store/Service/supprimerprod";
import { toast } from "react-toastify";
import { AllListProduitLibe } from "../../Store/Service/AllistProduitLib";
import Pagination from "@mui/material/Pagination";
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
const Listevender = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [op, setop] = React.useState(false);
  const [op2, setop2] = React.useState(false);
  const [idp ,setIdp] = useState()
  const [idprod ,setidprod] = useState()
  const [titre ,settitre]=useState()
  const [prix,setprix]=useState()
  const [qnt,setqnt]=useState()
  const [categorieprod,setcategorie]=useState()
  const [ref,setref]=useState()

  const [img,setimg]=useState()
  const dispatch = useDispatch();
  const produit = useSelector((state) => state.AlllistProduitLib.listProduit);

  useEffect(() => {
    dispatch(AllListProduitLibe(3));
  }, [ref]);

  const handleClick = (event,idprod,titre,prix,cat,qnt,img) => {
    setAnchorEl(event.currentTarget);
    setidprod(idprod)
    setprix(prix)
    setqnt(qnt)
    settitre(titre)
    setcategorie(cat)
    setimg(img)
  };

  const items =8;
  const [current,setCurrent]=useState(1)
  const NbPage=Math.ceil(produit.length/items);
  const startIndex=(current -1)*items;
  const endIndex=startIndex+items;
  const DataPerPage=produit.slice(startIndex,endIndex)
  function handlePagination (event,page) {
    setCurrent(page)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClicke = () => {
    const data={titre:titre,prix:prix,qte:qnt,categorieId:categorieprod,idprod:idprod,op:true,imagelibrairies:img}
    props.onData(data)
    props.setnextpage()
  };
  const handleClos = () => {
    setop(false);
    setAnchorEl(null);
  };
  const handleClos2 = () => {
    setop2(false);
    setAnchorEl(null);
  };
  const stylee = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "284px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",
    p: 4,
  };
  const supprimerOneProd=()=>{
    supprimerprod(idprod).then((response)=>{
      if(response.success===true){
        toast.success("votre produit a ete supprimer avec success",{autoClose: 1000})
        setref(true)

    }
    })
    setop2(false);
    setAnchorEl(null);
    setref(false)

  }


  return (
    
    
    <TabPanel value={props.value} index={0}>
      <br />
      <Filterbar
        icon={<FilterAdd size="22" color="#222222" />}
        nom="Ajouter filtre"
      />
      <br />
      <br />

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

        {DataPerPage.map((obj, index) => (
          <tr>
            <td className="tdwidth0">
              {" "}
              <Checkbox style={{ color: " #E9B949" }} key={index} />
            </td>
            <td className="tdwidth">{obj.id}</td>
            <td className="tdwidth02">
              {" "}
              <div className="row-int01">
                <img src={"http://127.0.0.1:8080/uploads/"+obj.imagelibrairies?.[0]?.name_Image} className="img1-int" />
                <div style={{ marginTop: "3%" }}>
                  <p className="txt01-int">{obj.titre}</p>
                </div>
              </div>
            </td>
            <td className="tdwidth1">
              <p className="txt02-int">{obj?.prix}</p>
            </td>
            <td className="tdwidth1">{obj?.categorie?.name}</td>
            <td className="tdwidth1">{obj?.qte}</td>
            <td className="tdwidth1">{obj?.updatedAt}</td>
            <td>
              {" "}
              <div className="more-int">
              <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e)=>handleClick(e,obj?.id,obj?.titre,obj?.prix,obj?.categorie?.id,obj?.qte,obj?.imagelibrairies)}
                    />
              </div>
            </td>
          </tr>
        ))}
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
                   <Link to={"/Detailproduit/"+idp} className="txtmenu-avis">Aller au produit</Link>
                </span>
              </MenuItem>
              <MenuItem className="menuitem-listev" onClick={handleClicke}>
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


            <Modal
        open={op2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClos}
      >
        <Box sx={stylee}>
          <div className="container-modal">
            <div className="flex-end">
              {" "}
              <div>
              
                <i class="fa fa-close" onClick={handleClos2} style={{cursor:"pointer"}}></i>
              </div>
            </div>
     
            <div>
              <p className="txtmodal2-inv4">
                Etes-vous sûr de vouloir supprimer cette Produit?
              </p>
            </div>

            <div className="minirow2-inv4">
              <button onClick={handleClos2} className="bnt3-inv4">
                <p className="txtbnt3-inv4">Annuler</p>
              </button>
              <button className="bnt40-inv4" onClick={supprimerOneProd}>
                <p className="txtbnt40-inv4">Supprimer</p>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      </table>
      <br />
      <br />
              
      <Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
                />
    </TabPanel>
  );
};

export default Listevender;
