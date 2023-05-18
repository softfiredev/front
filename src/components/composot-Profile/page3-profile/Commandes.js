import React, { useEffect } from "react";
import "./Commandes.css";
import { Menu, MenuItem, Modal, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { AddCircle, ArrowCircleRight2, ArrowDown2, ArrowUp2, Edit, Link, More, SearchNormal1, Trash } from "iconsax-react";
import img1 from "../../../assets/prod2.png";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getAllcommandeByclient } from "../../../Store/Service/getAllcommandebyClient";
import { addProduitCommande } from "../../../Store/Service/addProduitCommande";
import { toast } from "react-toastify";
import { AnnulerCommande } from "../../../Store/Service/AccepterCommandeDetail";
const Commandes = (props) => {
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
  const style = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "500px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",
    p: 4,
  };
  const produitShope=useSelector(state=> state.AllProduitShope.produitShope)
  const [dopdownAricle, setdropdowArticle] = useState(false);
  const [iDdropdownArticle, setiDdropdownArticle] = useState();
  const [Modelopen, setModelopen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClicke = () => {
    setModelopen(true)
    setAnchorEl(null);
  };
  const [op, setop] = React.useState(false);
  const [op2, setop2] = React.useState(false);
  const [idCommande ,setidCommande] = useState()
  const [refresh ,setrefresh] = useState(0)
  const dropDownOn = (id) => {
    setdropdowArticle(true);
    setiDdropdownArticle(id);
  };
  const dropDownOff = (id) => {
    setdropdowArticle(false);
    setiDdropdownArticle(id);
  };
  const commandes = useSelector(
    (state) => state.AllcommandeByclient.commandesClient
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllcommandeByclient(props?.user?.id));
  }, [refresh]);
  console.log(
    commandes
  );
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filteredDataLivré = commandes?.filter((item) => {
    return item?.etatClient?.includes("Livre");
  });
  const filteredDataAnnulé = commandes?.filter((item) => {
    return item?.etatClient?.includes("Annule");
  });
  const filteredEncours = commandes?.filter((item) => {
    return item?.etatClient?.includes("en cours");
  });
  const addProd =(Qte,produitlabrairieId,commandeEnDetailId,prix)=>{
    const data={
      Qte:Qte,produitlabrairieId:produitlabrairieId,commandeEnDetailId:commandeEnDetailId,prix,prix
    }
    addProduitCommande(data).then((response)=>{
      if(response.success===true){
        setrefresh(refresh+1)
        toast.success("Article bien Ajoute")
      }
    })
  }
  const handleClick=(id)=>{
      setidCommande(id)
      setAnchorEl(true)
  }
  const Annuler=()=>{
    AnnulerCommande(idCommande).then((response)=>{
        if(response.success==true){
         toast.error("commande Annuler",{autoClose: 1000})
         setrefresh(refresh+1)
        }
        

     })
  }
  return (
    <div className="commandes">
      <div className="com1">
        <h1 className="titrePageCommande">Commandes</h1> <br />
        <div className="box-container-commande">
          <Box sx={{ marginLeft: "2%" }}>
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
              <div className="boxtabl-com">
                <OutlinedInput
                  className="search-inpute"
                  placeholder="Rechercher l'ID de commande, l'article"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchNormal1 size="19" color="#B1B1B1" />
                    </InputAdornment>
                  }
                />
                <br />
                <br />
                <div className="array-commandes">
                  <div className="array-header">
                    <p className="header-item"> ID</p>
                    <p className="header-item"> Articles</p>
                    <p className="header-item"> Date de livraison</p>
                    <p className="header-item"> Vendeur</p>
                    <p className="header-item"> Tarification</p>
                    <p className="header-item"> Statut</p>
                    <p className="header-item"> </p>
                  </div>
                  <hr className="sous-line-array" />
                  <br />
                  <div className="array-data">
                    {commandes?.map((e, key) => (
                      <div>
                        <div className="commande-data" key={key}>
                          <p className="idcommande"> {e.id}</p>
                          <div className="articles">
                            <div>
                              {" "}
                              <p className="nombreArticle-clm">
                                {e?.produitlabrairies?.length}
                              </p>
                            </div>
                            <div>
                              {!dopdownAricle && (
                                <ArrowDown2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => dropDownOn(key)}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                              {dopdownAricle && (
                                <ArrowUp2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => {
                                    dropDownOff(key);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                            </div>
                          </div>
                          <p className="datecommande">{e.createdAt}</p>
                          <div className="vendeur-data">
                            <img
                              src={
                                "http://127.0.0.1:8080/uploads/" +
                                e?.labrairie?.imageStore
                              }
                              alt="maktba rahma"
                              style={{ width: "20px", height: "20px" }}
                            />
                            <p className="name_libraire">
                              {" "}
                              {e?.labrairie?.nameLibrairie}{" "}
                            </p>
                          </div>
                          <p className="Tarification"> {e.total_ttc} DT</p>
                          <p
                            className={
                              e.etatClient === "en cours"
                                ? "Statut"
                                : e.etatClient === "Annule"
                                ? "annule"
                                : "livre"
                            }
                          >
                            {e.etatClient}
                          </p>
                          <div className="more-cmd">
                            <More
                              size="22"
                              aria-haspopup="true"
                              aria-controls={open ? "basic-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              onClick={()=>handleClick(e.id)}
                            />
                           
                          </div>
                        </div>
                        {
                          <div
                            className={
                              dopdownAricle && iDdropdownArticle === key
                                ? "Article-data"
                                : "Article-data-none"
                            }
                          >
                            {e?.produitlabrairies?.map((e) => (
                              <div className="article">
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
                                />
                                <div>
                                  {" "}
                                  <p className="titleProduit">{e.titre}</p>{" "}
                                </div>
                              </div>
                            ))}
                          </div>
                        }
                          <div className=" menu">
                            <Menu
                              id="basic-menu"
                              className="menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem
                                className="menuitem-avis"
                                onClick={handleClicke}
                              >
                                <Edit size="22" color="#222222" />
                                <span>
                                  <p className="txtmenu-avis">Ajoute un article</p>
                                </span>
                              </MenuItem>
                              <MenuItem
                                className="menuitem-avis"
                                onClick={Annuler}
                              >
                                <Trash size="22" color="#222222" />
                                <span>
                                  <p className="txtmenu-avis">Annule </p>
                                </span>
                              </MenuItem>
                            </Menu>
                            </div>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="sous-line-array" />
                <br />
                <div>
                  <div className="row214-comn">
                    <p className="nombre-page">1-10 sur 19 commandes</p>
                    <div className="select-page">
                      <p className="select-lable">
                        La page sur laquelle vous êtes
                      </p>
                      <select className="Select-comn">
                        <option value={1}>1</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
               
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="boxtabl-com">
                <OutlinedInput
                  className="search-inpute"
                  placeholder="Rechercher l'ID de commande, l'article"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchNormal1 size="19" color="#B1B1B1" />
                    </InputAdornment>
                  }
                />
                <br />
                <br />
                <div className="array-commandes">
                  <div className="array-header">
                    <p className="header-item"> ID</p>
                    <p className="header-item"> Articles</p>
                    <p className="header-item"> Date de livraison</p>
                    <p className="header-item"> Vendeur</p>
                    <p className="header-item"> Tarification</p>
                    <p className="header-item"> Statut</p>
                  </div>
                  <hr className="sous-line-array" />
                  <br />
                  <div className="array-data">
                    {filteredDataLivré?.map((e, key) => (
                      <div>
                        <div className="commande-data" key={key}>
                          <p className="idcommande"> {e.id}</p>
                          <div className="articles">
                            <div>
                              {" "}
                              <p className="nombreArticle-clm">
                                {e?.produitlabrairies?.length}
                              </p>
                            </div>
                            <div>
                              {!dopdownAricle && (
                                <ArrowDown2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => dropDownOn(key)}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                              {dopdownAricle && (
                                <ArrowUp2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => {
                                    dropDownOff(key);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                            </div>
                          </div>
                          <p className="datecommande">{e.createdAt}</p>
                          <div className="vendeur-data">
                            <img
                              src={
                                "http://127.0.0.1:8080/uploads/" +
                                e?.labrairie?.imageStore
                              }
                              alt="maktba rahma"
                              style={{ width: "20px", height: "20px" }}
                            />
                            <p className="name_libraire">
                              {" "}
                              {e?.labrairie?.nameLibrairie}{" "}
                            </p>
                          </div>
                          <p className="Tarification"> {e.total_ttc} DT</p>
                          <p
                            className={
                              e.etatClient === "en cours"
                                ? "Statut"
                                : e.etatClient === "Annule"
                                ? "annule"
                                : "livre"
                            }
                          >
                            {e.etatClient}
                          </p>
                        </div>
                        {
                          <div
                            className={
                              dopdownAricle && iDdropdownArticle === key
                                ? "Article-data"
                                : "Article-data-none"
                            }
                          >
                            {e?.produitlabrairies?.map((e) => (
                              <div className="article">
                                <div>
                                  <p className="qte33">
                                    {e?.produit_c_Detail?.Qte}X
                                  </p>
                                </div>
                                <img src={img1} alt="nameImage" />
                                <div>
                                  {" "}
                                  <p className="titleProduit">{e.titre}</p>{" "}
                                </div>
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="sous-line-array" />
                <br />
                <div>
                  <div className="row214-comn">
                    <p className="nombre-page">1-10 sur 19 commandes</p>
                    <div className="select-page">
                      <p className="select-lable">
                        La page sur laquelle vous êtes
                      </p>
                      <select className="Select-comn">
                        <option value={1}>1</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="boxtabl-com">
                <OutlinedInput
                  className="search-inpute"
                  placeholder="Rechercher l'ID de commande, l'article"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchNormal1 size="19" color="#B1B1B1" />
                    </InputAdornment>
                  }
                />
                <br />
                <br />
                <div className="array-commandes">
                  <div className="array-header">
                    <p className="header-item"> ID</p>
                    <p className="header-item"> Articles</p>
                    <p className="header-item"> Date de livraison</p>
                    <p className="header-item"> Vendeur</p>
                    <p className="header-item"> Tarification</p>
                    <p className="header-item"> Statut</p>
                  </div>
                  <hr className="sous-line-array" />
                  <br />
                  <div className="array-data">
                    {filteredEncours?.map((e, key) => (
                      <div>
                        <div className="commande-data" key={key}>
                          <p className="idcommande"> {e.id}</p>
                          <div className="articles">
                            <div>
                              {" "}
                              <p className="nombreArticle-clm">
                                {e?.produitlabrairies?.length}
                              </p>
                            </div>
                            <div>
                              {!dopdownAricle && (
                                <ArrowDown2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => dropDownOn(key)}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                              {dopdownAricle && (
                                <ArrowUp2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => {
                                    dropDownOff(key);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                            </div>
                          </div>
                          <p className="datecommande">{e.createdAt}</p>
                          <div className="vendeur-data">
                            <img
                              src={
                                "http://127.0.0.1:8080/uploads/" +
                                e?.labrairie?.imageStore
                              }
                              alt="maktba rahma"
                              style={{ width: "20px", height: "20px" }}
                            />
                            <p className="name_libraire">
                              {" "}
                              {e?.labrairie?.nameLibrairie}{" "}
                            </p>
                          </div>
                          <p className="Tarification"> {e.total_ttc} DT</p>
                          <p
                            className={
                              e.etatClient === "en cours"
                                ? "Statut"
                                : e.etatClient === "Annule"
                                ? "annule"
                                : "livre"
                            }
                          >
                            {e.etatClient}
                          </p>
                        </div>
                        {
                          <div
                            className={
                              dopdownAricle && iDdropdownArticle === key
                                ? "Article-data"
                                : "Article-data-none"
                            }
                          >
                            {e?.produitlabrairies?.map((e) => (
                              <div className="article">
                                <div>
                                  <p className="qte33">
                                    {e?.produit_c_Detail?.Qte}X
                                  </p>
                                </div>
                                <img src={img1} alt="nameImage" />
                                <div>
                                  {" "}
                                  <p className="titleProduit">{e.titre}</p>{" "}
                                </div>
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="sous-line-array" />
                <br />
                <div>
                  <div className="row214-comn">
                    <p className="nombre-page">1-10 sur 19 commandes</p>
                    <div className="select-page">
                      <p className="select-lable">
                        La page sur laquelle vous êtes
                      </p>
                      <select className="Select-comn">
                        <option value={1}>1</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="boxtabl-com">
                <OutlinedInput
                  className="search-inpute"
                  placeholder="Rechercher l'ID de commande, l'article"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchNormal1 size="19" color="#B1B1B1" />
                    </InputAdornment>
                  }
                />
                <br />
                <br />
                <div className="array-commandes">
                  <div className="array-header">
                    <p className="header-item"> ID</p>
                    <p className="header-item"> Articles</p>
                    <p className="header-item"> Date de livraison</p>
                    <p className="header-item"> Vendeur</p>
                    <p className="header-item"> Tarification</p>
                    <p className="header-item"> Statut</p>
                  </div>
                  <hr className="sous-line-array" />
                  <br />
                  <div className="array-data">
                    {filteredDataAnnulé?.map((e, key) => (
                      <div>
                        <div className="commande-data" key={key}>
                          <p className="idcommande"> {e.id}</p>
                          <div className="articles">
                            <div>
                              {" "}
                              <p className="nombreArticle-clm">
                                {e?.produitlabrairies?.length}
                              </p>
                            </div>
                            <div>
                              {!dopdownAricle && (
                                <ArrowDown2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => dropDownOn(key)}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                              {dopdownAricle && (
                                <ArrowUp2
                                  size="17"
                                  color="#626262"
                                  className="icondown"
                                  onClick={(e) => {
                                    dropDownOff(key);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                            </div>
                          </div>
                          <p className="datecommande">{e.createdAt}</p>
                          <div className="vendeur-data">
                            <img
                              src={
                                "http://127.0.0.1:8080/uploads/" +
                                e?.labrairie?.imageStore
                              }
                              alt="maktba rahma"
                              style={{ width: "20px", height: "20px" }}
                            />
                            <p className="name_libraire">
                              {" "}
                              {e?.labrairie?.nameLibrairie}{" "}
                            </p>
                          </div>
                          <p className="Tarification"> {e.total_ttc} DT</p>
                          <p
                            className={
                              e.etatClient === "en cours"
                                ? "Statut"
                                : e.etatClient === "Annule"
                                ? "annule"
                                : "livre"
                            }
                          >
                            {e.etatClient}
                          </p>
                        </div>
                        {
                          <div
                            className={
                              dopdownAricle && iDdropdownArticle === key
                                ? "Article-data"
                                : "Article-data-none"
                            }
                          >
                            {e?.produitlabrairies?.map((e) => (
                              <div className="article">
                                <div>
                                  <p className="qte33">
                                    {e?.produit_c_Detail?.Qte}X
                                  </p>
                                </div>
                                <img src={img1} alt="nameImage" />
                                <div>
                                  {" "}
                                  <p className="titleProduit">{e.titre}</p>{" "}
                                </div>
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="sous-line-array" />
                <br />
                <div>
                  <div className="row214-comn">
                    <p className="nombre-page">1-10 sur 19 commandes</p>
                    <div className="select-page">
                      <p className="select-lable">
                        La page sur laquelle vous êtes
                      </p>
                      <select className="Select-comn">
                        <option value={1}>1</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </TabPanel>
          </Box>
          <Modal
            open={Modelopen}
            onClose={()=>setModelopen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <div className="close">
                  <i class="fa fa-close" onClick={()=>setModelopen(false)}></i>
                </div>
                <p className="Model-titre">Ajoute un Article</p>
                <div className="scroll">
                  {produitShope.map((e)=>(<div className="prod" >
                            <img src={"http://127.0.0.1:8080/uploads/"+e.imagelibrairies?.[0]?.name_Image} />
                            <p className="titre-model-box"> {e.titre}</p>
                            <p> {e.prix}</p>
                            <AddCircle size="22" color="#222222" style={{marginTop:"14px", cursor:"pointer"}} onClick={()=>addProd(1,e.id,idCommande,e.prix)}/>
                      </div>  ))}
                        
                </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Commandes;
