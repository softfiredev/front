import { Grid} from "@mui/material";
import * as React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Cart.css";
import { Link } from "react-router-dom";
import Box_produit_Card from "../../components/box-produit-card/box-produit-card";
import Recapitulatif from "../../components/Recapitulatif.js/Recapitulatif";
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
            <Box_produit_Card titre={"stiloazeaze..."} prix={"1100"} total={"1100"}/>
            <Box_produit_Card titre={"stiloazeaze..."} prix={"1100"} total={"1100"}/>
            <Box_produit_Card titre={"stiloazeaze..."} prix={"1100"} total={"1100"}/>
            <Box_produit_Card titre={"stiloazeaze..."} prix={"1100"} total={"1100"}/>
            <Box_produit_Card titre={"stiloazeaze..."} prix={"1100"} total={"1100"}/>
           
          </div>
        </div>
        <Recapitulatif Totale={"1371.00"} Frais={"7.50"} Remise={"21.00"} Tax={7}/>
      </Grid>
      <div className="Continuer">
        <ArrowBackIosNewIcon className="icon1" />
        <Link to="/Shop"> Continuer vos achats</Link>
      </div>
    </div>
  );
};
export default Cart;
