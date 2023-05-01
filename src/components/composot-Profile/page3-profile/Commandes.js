import React from "react";
import "./Commandes.css";
import { OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { ArrowDown2, ArrowUp2, SearchNormal1 } from "iconsax-react";
import img2 from "../../../assets/logom.png";
import img1 from "../../../assets/prod2.png";
import { Grid } from "@material-ui/core";
import { useState } from "react";
const Commandes = () => {
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
  const filterCommande = [
    {
      id: "tous",
      name: "Tous",
    },
    {
      id: "livre",
      name: "Livre",
    },
    {
      id: "enCours",
      name: "En cours",
    },
    {
      id: "Annuler",
      name: "Annuler",
    },
  ];
  const [dopdownAricle, setdropdowArticle] = useState(false);
  const [iDdropdownArticle, setiDdropdownArticle] = useState();
  const [filter,setfilter]=useState(false);
  const[idFilter,setidFilter]=useState()
  const dropDownOn = (id) => {
    setdropdowArticle(true);
    setiDdropdownArticle(id);
  };
  const dropDownOff = (id) => {
    setdropdowArticle(false);
    setiDdropdownArticle(id);
  };
  const changeStyleFilter=(id)=>{
    setfilter(true);
    setidFilter(id)
  }
  return (
    <div className="commandes">
      <h1 className="titrePageCommande">Commandes</h1>
      <div className="box-container-commande">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className="filter-commande"
        >
          {filterCommande.map((e,key) => (
            <Grid item className={e.id==="tous" && !filter?"filter-commande-items1":idFilter===e.id && filter ?"filter-commande-items1":"filter-commande-items"} onClick={()=>{changeStyleFilter(e.id)}}>
              {e.name}
            </Grid>
          ))}
        </Grid>

        <hr className="sous-line-array" />
        <OutlinedInput
          className="search-inpute"
          defaultValue={"Rechercher l'ID de commande, l'article"}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />
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
          <div className="array-data">
            {commandeArray.filter((data)=>{
              return  idFilter==="livre"? data.Statut==="Livre" :idFilter==="Annuler"? data.Statut==="Annule":idFilter==="enCours"? data.Statut==="en cours":data  
            }).map((e, key) => (  
               
              <div>
                <div className="commande-data" key={key}>
                  <p className="idcommande"> {e.id}</p>
                  <div className="articles">
                    <p className="nombreArticle">{e.nbArticle}</p>
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
                  <p className="datecommande">{e.data}</p>
                  <div className="vendeur-data">
                    <img src={img2} alt="maktba rahma" />
                    <p className="name_libraire"> {e.nameLib} </p>
                  </div>
                  <p className="Tarification"> {e.toatal} DT</p>
                  <p
                    className={
                      e.Statut === "en cours"
                        ? "Statut"
                        : e.Statut === "Annule"
                        ? "annule"
                        : "livre"
                    }
                  >
                    {e.Statut}
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
                    <div className="article">
                      <p className="qte">1X</p>
                      <img src={img1} alt="nameImage" />
                      <p className="titleProduit">GOUACHE 9T METAL...</p>
                    </div>
                    <div className="article">
                      <p className="qte">1X</p>
                      <img src={img1} alt="nameImage" />
                      <p className="titleProduit">GOUACHE 9T METAL...</p>
                    </div>
                    <div className="article">
                      <p className="qte">1X</p>
                      <img src={img1} alt="nameImage" />
                      <p className="titleProduit">GOUACHE 9T METAL...</p>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
        <hr className="sous-line-array" />
        <div>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="pagination2"
        >
          <p className="nombre-page">1-10 sur 19 commandes</p>
          <Grid
            container
            direction="row"
            style={{ width: "42%", marginTop: "20px" }}
            className="select-page"
          >
            <p className="select-lable">La page sur laquelle vous êtes</p>
            <select className="Select">
              <option value={1}>1</option>
            </select>
          </Grid>
        </Grid>
        </div><br/>
      </div>
    </div>
  );
};

export default Commandes;
