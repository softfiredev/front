import { Grid, OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import img from "../../assets/prod1.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
          <Grid container direction="row" className="items">
            <Grid item className="item Article">
              Article
            </Grid>
            <Grid item className="item Qte1">
              Qty
            </Grid>
            <Grid item className="item total1">
              Total HT
            </Grid>
            <Grid item className="item"></Grid>
          </Grid>
          <hr className="underline"></hr>
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
              <div className="supprime"> Supprime </div>
            </Grid>
            <hr className="underline"></hr>
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
              <div className="supprime"> Supprime </div>
            </Grid>
            <hr className="underline"></hr>
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
              <div className="supprime"> Supprime </div>
            </Grid>
            <hr className="underline"></hr>
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
              <div className="supprime"> Supprime </div>
            </Grid>
            <hr className="lin1"></hr>
          </div>
        </div>
        <div className="resume">
          <h1 className="titre2">Récapitulatif</h1>
          <hr className="line2" />
          <div className="container">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className="box3"
            >
                <p>Totale HT</p>
                <p>1371.00 dt</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className="box3"
            >
                <p>Frais de port</p>
                <p>7.50 dt</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className="box3"
            >
                <p>Remise</p>
                <p>-21.00 dt</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className="box3"
            >
                <p>Tax</p>
                <p>7%</p>
            </Grid>
          </div>
          <hr className="line2"></hr>
          <p className="reduction">Code de réduction</p>
          <div className="inpute_icon">
            <OutlinedInput placeholder="Entrer votre code" className="code" />
            <button className="btn_input">
              <ArrowForwardIosIcon
                style={{
                  width: "15px",
                  height: "12px",
                  color: "4B4B4B",
                  marginTop: "2px",
                  marginLeft: "-4px",
                }}
                className="icon_4"
              />
            </button>
          </div>
          <hr className="line2"></hr>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <p className="totalTTC">Total TTC</p>{" "}
            <p className="totalMontant">1452.50 dt</p>
          </Grid>
          <button className="btn-verifie" type="submit">
            Vérifier
          </button>
        </div>
      </Grid>
      <div className="Continuer">
        <ArrowBackIosNewIcon className="icon1" />
        <Link to="/Shop"> Continuer vos achats</Link>
      </div>
    </div>
  );
};
export default Cart;
