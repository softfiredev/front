import React, { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, OutlinedInput } from "@mui/material";
import "./Recapitulatif.css";
import { useDispatch, useSelector } from "react-redux";
import { AjouteCommande } from "../../Store/Service/AjouteCommande";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Recapitulatif = (props) => {
  const [totalHT, settotalHT] = React.useState(0);
  const commande = useSelector((state) => state.Commande.commande);
  const dispatch = useDispatch();
  const calculTotalHT = () => {
    let total = 0;
    commande?.map((obj) => {
      total += obj.prix;
    });
    settotalHT(total);
  };
  React.useEffect(() => {
    calculTotalHT();
  }, [commande]);

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
          <p>{totalHT.toFixed(2)} dt</p>
          <p>{0} dt</p>
          <p>-{0} dt</p>
          <p>{7}%</p>
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
        <p className="totalMontant">{(totalHT * 1.07).toFixed(2)} dt</p>
      </Grid>
      
      {commande.length!=0?
  <Link to={"/Faire_une_commande"}> <button className="btn-verifie">
        Vérifier
      </button>
      </Link>
      :
    <button className="btn-verifie" onClick={()=>{ toast.error("ne pasdes produit dans votre card !!",{autoClose: 1000})}}>
      Vérifier
    </button>
}
     
    </div>
  );
};
export default Recapitulatif;
