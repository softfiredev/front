import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, OutlinedInput } from "@mui/material";
import './Recapitulatif.css'
const Recapitulatif = (props) =>{
    return (
        <div className="resume">
          <h1 className="titre2">Récapitulatif</h1>
          <hr className="line2" />
          <div className="container">
                <div className="itemText">
                      <p>Totale HT</p>
                      <p>Frais de port</p>
                      <p>Remise</p>
                      <p>Tax</p>
                </div>
                <div className="itemchiffer">
                      <p>{props.Totale} dt</p>
                      <p>{props.Frais} dt</p>
                      <p>-{props.Remise} dt</p>
                      <p>{props.Tax}%</p>
                </div>
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
            <p className="totalTTC">Total TTC</p>
            <p className="totalMontant">1452.50 dt</p>
          </Grid>
          <button className="btn-verifie" type="submit">
            Vérifier
          </button>
        </div>
    )
}
export default Recapitulatif ;