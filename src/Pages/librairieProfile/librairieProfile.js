import React from "react";
import img from "../../assets/Ellipse 150.png";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./librairieProfile.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Card from "../../components/card-produit/Card";
import Filter from "../../components/filter/Filter";
import Trifilter from "../../components/tri-filter/Trifilter";
import Pagination from "@mui/material/Pagination";
import NavBar from "../../components/NavBar/NavBar";

const LibrairieProfile = () => {
  const prod = [{id:"000011110",nom:"PACK LIVRE SCOLAIRE 1éME",prix:"8.1dt",noml:"ali Library"},
    {id:"0707275211110",nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"5.1dt",noml:"ali Library"},
    {id:"278200011110",nom:"COMPAS AVEC CRAYON 2506 INV",prix:"4.1dt",noml:"Errahma Library"},
    {id:"00ssds011110",nom:"PACK LIVRE SCOLAIRE 1éME",prix:"8.1dt",noml:"Errahma Library"},
    {id:"0aaa0011110",nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"1.1dt",noml:"Errahma Library"}];
  return (
    <>
      <NavBar/>
      <div className="profile">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
        className="ProfileData"
      >
        <img src={img} className="imageProfile" />
        <Grid
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          className="profileInfo"
        >
          <h1 className="nomLibrairie">Errahma Library</h1>
          <p className="addresse">
            Teboulba, Al Munastir, Tunisia, Monastir, béja Tunisie - 9000
          </p>
          <p className="telephone">+216 55 555 555</p>
          <p className="email">errahmalibrary@gmail.com</p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
            className="reseaux_sociaux"
          >
            <button>Poser une question</button>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="facebook"
            >
              <Link to={"#"} className="LinkText">
                Facebook
              </Link>
              <OpenInNewIcon className="iconLink" />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="facebook"
            >
              <Link to={"#"} className="LinkText">
                Instagram
              </Link>
              <OpenInNewIcon className="iconLink" />
            </Grid>
          </Box>
        </Grid>
      </Box>
      <div className="liste_des_Articles">
        <div className="titre1">
          <h1>Liste des articles</h1>
        </div>
        <Grid container direction="row" style={{ height: "auto" }}>
          <div className="filter">
            <Filter />
          </div>
          <div className="section_Produit">
            <div className="triFilter">
              <Trifilter />
            </div>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className="produitsLab"
            >
                 {prod.map((obj) =>
              
                           <div className="container">
                               <Card prix={obj.prix} nom={obj.nom} noml={obj.noml} id={obj.id}/>  
                           </div> 

               
            )}
            </Grid>
            <div className="Pagination">
             <Pagination count={16} shape="rounded" className='pagination-shop'  /> 
            </div>
          </div>
        </Grid>
      </div>
    </div>
    </>
    
  );
};

export default LibrairieProfile;
