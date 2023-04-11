import React, { useState } from "react";
import img from "../../assets/prod1.png";
import './box-produit-card.css'
import { Grid} from "@mui/material";
import Box from "@mui/material/Box";
const Box_produit_Card = (props)=>{
  const [qte,setqte]=useState(1)
  const handleChangevalue=(e)=>{
    setqte(e.target.value)
  }
        return (
        <>
             <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
             <div className="prod-container">
                    <img src={img} className="image" />
                    <div className="prod-description">
                        <p className="titreProd"> {props.titre}</p>
                        <p className="prix">{props.prix} dt</p>
                    </div>
             </div>
              <input type="number" width="20px" className="qte" min={1} onChange={handleChangevalue} value={qte}  />
              <p className="total">{props.total} dt</p>
              <div className="Supprimer"> Supprimer </div>
            </Grid>
            <hr className="underline"></hr>
        </>)
}
export default Box_produit_Card ;