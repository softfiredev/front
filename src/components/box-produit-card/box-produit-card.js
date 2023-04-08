import React from "react";
import img from "../../assets/prod1.png";
import './box-produit-card.css'
import { Grid} from "@mui/material";
import Box from "@mui/material/Box";
const Box_produit_Card = (props)=>{
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
             {/*<Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
               
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <p className="titreProd">{props.titre}</p>
                  <p className="prix">{props.prix}</p>
                </Grid>
            </Box>*/}
              <input type="number" width="20px" className="qte" value={1} />
              <p className="total">{props.total} dt</p>
              <div className="Supprimer"> Supprimer </div>
            </Grid>
            <hr className="underline"></hr>
        </>)
}
export default Box_produit_Card ;