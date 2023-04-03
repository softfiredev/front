import { Grid, OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import img from "../../assets/bg.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  
  return (
    <div className="Cart">
      <Grid item>
        <h1 className="titre">Panier</h1>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <div className="produit">
          <Grid
            container
            spacing={10}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            className="items"
          >
            <Grid item className="item">
              Article
            </Grid>
            <Grid item className="item">
              Qty
            </Grid>
            <Grid item className="item">
              Total HT
            </Grid>
            <Grid item className="item"></Grid>
          </Grid>
          <hr className="lin1"></hr>
          <div className="scroll">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={img} className="image" />
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <p className="titreProd">GOUACHE 9T METAL...</p>
                <p className="prix">356DT</p>
              </Grid>
            </Box>
            <input type="number" width="20px" className="qte" />
            <p className="total">1000DT</p>
            <div className="supprime"> X </div>
          </Grid>
          <hr className="lin1"></hr>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
           
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={img} className="image" />
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <p className="titreProd">GOUACHE 9T METAL...</p>
                <p className="prix">356DT</p>
              </Grid>
            </Box>
            <input type="number" width="20px" className="qte" />
            <p className="total">1000DT</p>
            <div className="supprime"> X </div>
          </Grid>
          <hr className="lin1"></hr>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={img} className="image" />
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <p className="titreProd">GOUACHE 9T METAL...</p>
                <p className="prix">356DT</p>
              </Grid>
            </Box>
            <input type="number" width="20px" className="qte" />
            <p className="total">1000DT</p>
            <div className="supprime"> X </div>
          </Grid>
          <hr className="lin1"></hr>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={img} className="image" />
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <p className="titreProd">GOUACHE 9T METAL...</p>
                <p className="prix">356DT</p>
              </Grid>
            </Box>
            <input type="number" width="20px" className="qte" />
            <p className="total">1000DT</p>
            <div className="supprime"> X </div>
          </Grid>
          <hr className="lin1"></hr>
          </div>   
        </div>
        <div className="resume">
          <h1 className="titre2">Résumé</h1>
          <hr className="line2" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
            className="container"
          >
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              className="titre3"
            >
              <p> Total HT </p>
              <p> Frais de port </p>
              <p> Remise </p>
              <p> Tax </p>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              className="chiffer"
            >
              <p> 1371.00 dt </p>
              <p> 7.50 dt </p>
              <p> -21.00 dt </p>
              <p> 7% </p>
            </Grid>
          </Box>
          <hr className="line2"></hr>
          <p className="reduction">Code de réduction</p>
          <div className="inpute_icon" > 
          <OutlinedInput placeholder="Entrer votre code" className="code" />
          <button className="btn_input"><ArrowForwardIosIcon style={{width:"15px",height:"12px",color:"4B4B4B",marginTop:"2px",marginLeft:"-4px"}} className="icon_4"/></button>
          </div>
          <hr className="line2"></hr>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <p className="totalTTC">Total TTC</p> <p className="totalMontant">1452.50 dt</p>
          </Grid>
          <button className="btn-verifie" type="submit">Vérifier</button>
        </div>
      </Grid>
      <div className="Continuer">
      <ArrowBackIosNewIcon className="icon1"/><Link to="/Shop"> Continuer vos achats</Link>
      </div>
    </div>
  );
};
export default Cart;
