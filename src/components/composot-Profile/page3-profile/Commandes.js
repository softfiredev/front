import React, { useEffect } from "react";
import "./Commandes.css";
import { OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { ArrowDown2, ArrowUp2, SearchNormal1 } from "iconsax-react";
import img1 from "../../../assets/prod2.png";
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { getAllcommandeByclient } from "../../../Store/Service/getAllcommandebyClient";
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
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const commandeArray = [
    {
      id: "#100194",
      nbArticle: 2,
      data: "16/04/2023",
      nameLib: "maktba el rahma",
      toatal: "200",
      Statut: "en cours",
    },
    {
      id: "#100194",
      nbArticle: 2,
      data: "16/04/2023",
      nameLib: "maktba el rahma",
      toatal: "200",
      Statut: "Livre",
    },
    {
      id: "#100194",
      nbArticle: 2,
      data: "16/04/2023",
      nameLib: "maktba el rahma",
      toatal: "200",
      Statut: "Annule",
    },
    {
      id: "#100194",
      nbArticle: 2,
      data: "16/04/2023",
      nameLib: "maktba el rahma",
      toatal: "200",
      Statut: "en cours",
    },
  ];

  const [dopdownAricle, setdropdowArticle] = useState(false);
  const [iDdropdownArticle, setiDdropdownArticle] = useState();
  const[idFilter,setidFilter]=useState()
  const dropDownOn = (id) => {
    setdropdowArticle(true);
    setiDdropdownArticle(id);
  };
  const dropDownOff = (id) => {
    setdropdowArticle(false);
    setiDdropdownArticle(id);
  };
  const commandes = useSelector((state)=> state.AllcommandeByclient.commandesClient)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllcommandeByclient(props?.user?.id))
  },[])

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const filteredDataLivré= commandes.filter((item) => {
      return item.etat.includes("Livre");
    });
    const filteredDataAnnulé = commandes.filter((item) => {
        return item.etat.includes("Annule");
      });
      const filteredEncours = commandes.filter((item) => {
        return item.etat.includes("en cours");
      });
      console.log(filteredEncours)
  return (
    <div className="commandes">
      <div className="com1">
      <h1 className="titrePageCommande">Commandes</h1>  <br/>
      <div className="box-container-commande">
      
  <Box sx={{ marginLeft:"2%"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab label={<p className="txttabs-c">Tout</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-c">Livré</p>} {...a11yProps(1)} />
          <Tab label={<p className="txttabs-c">En cours</p>} {...a11yProps(2)} />
          <Tab label={<p className="txttabs-c">Annulé</p>} {...a11yProps(3)} />

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
        <br/><br/>
        <div className="array-commandes">
          <div className="array-header">
            <p className="header-item"> ID</p>
            <p className="header-item"> Articles</p>
            <p className="header-item"> Date de livraison</p>
            <p className="header-item"> Vendeur</p>
            <p className="header-item"> Tarification</p>
            <p className="header-item"> Statut</p>
          </div>
          <hr className="sous-line-array" /><br/>
          <div className="array-data">
            {commandes?.map((e, key) => (  
               
              <div>
                <div className="commande-data" key={key}>
                  <p className="idcommande"> {e.id}</p>
                  <div className="articles">
                    <p className="nombreArticle">{e?.produitlabrairies.length}</p>
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
                    <img src={"http://127.0.0.1:8080/uploads/"+e?.labrairie?.imageStore} alt="maktba rahma"  style={{width:"20px" , height:"20px"}}/>
                    <p className="name_libraire"> {e?.labrairie?.nameLibrairie} </p>
                  </div>
                  <p className="Tarification"> {e.total_ttc} DT</p>
                  <p
                    className={
                      e.etat === "en cours"
                        ? "Statut"
                        : e.etat === "Annule"
                        ? "annule"
                        : "livre"
                    }
                  >
                    {e.etat}
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
                    {e?.produitlabrairies?.map((e)=>(<div className="article">
                      <p className="qte">{e?.produit_c_Detail?.Qte}X</p>
                      <img src={img1} alt="nameImage" />
                      <p className="titleProduit">{e.titre}</p>
                    </div>))}
                    
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
        
        <hr className="sous-line-array" /><br/>
        <div>
        <div className="row214-comn"  >
          <p className="nombre-page">1-10 sur 19 commandes</p>
          <div className="select-page"   >
            <p className="select-lable">La page sur laquelle vous êtes</p>
            <select className="Select-comn">
              <option value={1}>1</option>
            </select>
         
        </div>
        </div>
        </div><br/>
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
        <br/><br/>
        <div className="array-commandes">
          <div className="array-header">
            <p className="header-item"> ID</p>
            <p className="header-item"> Articles</p>
            <p className="header-item"> Date de livraison</p>
            <p className="header-item"> Vendeur</p>
            <p className="header-item"> Tarification</p>
            <p className="header-item"> Statut</p>
          </div>
          <hr className="sous-line-array" /><br/>
          <div className="array-data">
          {filteredDataLivré?.map((e, key) => (  
               
               <div>
                 <div className="commande-data" key={key}>
                   <p className="idcommande"> {e.id}</p>
                   <div className="articles">
                     <p className="nombreArticle">{e?.produitlabrairies.length}</p>
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
                     <img src={"http://127.0.0.1:8080/uploads/"+e?.labrairie?.imageStore} alt="maktba rahma"  style={{width:"20px" , height:"20px"}}/>
                     <p className="name_libraire"> {e?.labrairie?.nameLibrairie} </p>
                   </div>
                   <p className="Tarification"> {e.total_ttc} DT</p>
                   <p
                     className={
                       e.etat === "en cours"
                         ? "Statut"
                         : e.etat === "Annule"
                         ? "annule"
                         : "livre"
                     }
                   >
                     {e.etat}
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
                     {e?.produitlabrairies?.map((e)=>(<div className="article">
                       <p className="qte">{e?.produit_c_Detail?.Qte}X</p>
                       <img src={img1} alt="nameImage" />
                       <p className="titleProduit">{e.titre}</p>
                     </div>))}
                     
                   </div>
                 }
               </div>
             ))}
          </div>
        </div>
        
        <hr className="sous-line-array" /><br/>
        <div>
        <div className="row214-comn"  >
          <p className="nombre-page">1-10 sur 19 commandes</p>
          <div className="select-page"   >
            <p className="select-lable">La page sur laquelle vous êtes</p>
            <select className="Select-comn">
              <option value={1}>1</option>
            </select>
         
        </div>
        </div>
        </div><br/>
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
        <br/><br/>
        <div className="array-commandes">
          <div className="array-header">
            <p className="header-item"> ID</p>
            <p className="header-item"> Articles</p>
            <p className="header-item"> Date de livraison</p>
            <p className="header-item"> Vendeur</p>
            <p className="header-item"> Tarification</p>
            <p className="header-item"> Statut</p>
          </div>
          <hr className="sous-line-array" /><br/>
          <div className="array-data">
          {filteredEncours?.map((e, key) => (  
               
               <div>
                 <div className="commande-data" key={key}>
                   <p className="idcommande"> {e.id}</p>
                   <div className="articles">
                     <p className="nombreArticle">{e?.produitlabrairies.length}</p>
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
                     <img src={"http://127.0.0.1:8080/uploads/"+e?.labrairie?.imageStore} alt="maktba rahma"  style={{width:"20px" , height:"20px"}}/>
                     <p className="name_libraire"> {e?.labrairie?.nameLibrairie} </p>
                   </div>
                   <p className="Tarification"> {e.total_ttc} DT</p>
                   <p
                     className={
                       e.etat === "en cours"
                         ? "Statut"
                         : e.etat === "Annule"
                         ? "annule"
                         : "livre"
                     }
                   >
                     {e.etat}
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
                     {e?.produitlabrairies?.map((e)=>(<div className="article">
                       <p className="qte">{e?.produit_c_Detail?.Qte}X</p>
                       <img src={img1} alt="nameImage" />
                       <p className="titleProduit">{e.titre}</p>
                     </div>))}
                     
                   </div>
                 }
               </div>
             ))}
          </div>
        </div>
        
        <hr className="sous-line-array" /><br/>
        <div>
        <div className="row214-comn"  >
          <p className="nombre-page">1-10 sur 19 commandes</p>
          <div className="select-page"   >
            <p className="select-lable">La page sur laquelle vous êtes</p>
            <select className="Select-comn">
              <option value={1}>1</option>
            </select>
         
        </div>
        </div>
        </div><br/>
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
        <br/><br/>
        <div className="array-commandes">
          <div className="array-header">
            <p className="header-item"> ID</p>
            <p className="header-item"> Articles</p>
            <p className="header-item"> Date de livraison</p>
            <p className="header-item"> Vendeur</p>
            <p className="header-item"> Tarification</p>
            <p className="header-item"> Statut</p>
          </div>
          <hr className="sous-line-array" /><br/>
          <div className="array-data">
          {filteredDataAnnulé?.map((e, key) => (  
               
               <div>
                 <div className="commande-data" key={key}>
                   <p className="idcommande"> {e.id}</p>
                   <div className="articles">
                     <p className="nombreArticle">{e?.produitlabrairies.length}</p>
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
                     <img src={"http://127.0.0.1:8080/uploads/"+e?.labrairie?.imageStore} alt="maktba rahma"  style={{width:"20px" , height:"20px"}}/>
                     <p className="name_libraire"> {e?.labrairie?.nameLibrairie} </p>
                   </div>
                   <p className="Tarification"> {e.total_ttc} DT</p>
                   <p
                     className={
                       e.etat === "en cours"
                         ? "Statut"
                         : e.etat === "Annule"
                         ? "annule"
                         : "livre"
                     }
                   >
                     {e.etat}
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
                     {e?.produitlabrairies?.map((e)=>(<div className="article">
                       <p className="qte">{e?.produit_c_Detail?.Qte}X</p>
                       <img src={img1} alt="nameImage" />
                       <p className="titleProduit">{e.titre}</p>
                     </div>))}
                     
                   </div>
                 }
               </div>
             ))}
          </div>
        </div>
        
        <hr className="sous-line-array" /><br/>
        <div>
        <div className="row214-comn"  >
          <p className="nombre-page">1-10 sur 19 commandes</p>
          <div className="select-page"   >
            <p className="select-lable">La page sur laquelle vous êtes</p>
            <select className="Select-comn">
              <option value={1}>1</option>
            </select>
         
        </div>
        </div>
        </div><br/>
      </div>
        </TabPanel>
    </Box>
  
      
      </div>
        </div>
  
    </div>
  );
};

export default Commandes;
