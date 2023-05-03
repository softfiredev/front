import React, { useState } from "react";
import img from "../../assets/prod1.png";
import './box-produit-card.css'
import { Grid} from "@mui/material";
import { remove } from "../../Store/panier/panierSlice";
import { useDispatch } from "react-redux";
const Box_produit_Card = (props)=>{
  const [qte,setqte]=useState(props.qte)
  const dispatch = useDispatch();
  const handleChangevalue=(e)=>{
    setqte(e.target.value)
  }
  const removeProduit=(index)=>{
    dispatch(remove(index))
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
                    <img src={"http://127.0.0.1:8080/uploads/"+props.imgp} className="image" />
                    <div className="prod-description">
                        <p className="titreProd"> {props.titre}</p>
                        <p className="prix">{props.prix} dt</p>
                    </div>
             </div>
              <input type="number" width="20px" className="qte" min={1} onChange={handleChangevalue} value={qte}  />
              <p className="total">{props.prix*qte} dt</p>
              <div className="Supprimer" onClick={()=>removeProduit(props.index)}> Supprimer </div>
            </Grid>
            <hr className="underline"></hr>
        </>)
}
export default Box_produit_Card ;