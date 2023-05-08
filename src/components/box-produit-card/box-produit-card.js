import React, { useEffect, useState } from "react";
import './box-produit-card.css'
import { Grid} from "@mui/material";
import { remove,add as changeQte} from "../../Store/panier/panierSlice";
import { useDispatch, useSelector } from "react-redux";
import { add, removeCommande } from "../../Store/panier/commandeSlice";
 
const Box_produit_Card = (props)=>{
  const [qte,setqte]=useState(props.qte)
  const total = props.prix*qte ; 
  const dispatch = useDispatch();
  const handleChangevalue=(e)=>{
    setqte(e.target.value)
  }
  const removeProduit=(index)=>{
    dispatch(remove(index))
    dispatch(removeCommande(index))
  }
  useEffect(()=>{
      dispatch(add({"qte":qte,"idlib":props.idl,"prix":total,"produitlabrairieId":props.idp}))
  
  },[qte])

 
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
                <div>        <p className="titreProd"> {props.titre}</p></div>
                <div>   <p className="prix">{props.prix} dt</p></div>
                    </div>
             </div>
              <input type="number" width="20px" className="qte" min={1} onChange={handleChangevalue}  defaultValue={qte}  />
              <p className="total">{total} dt</p>
              <div className="Supprimer" onClick={()=>removeProduit(props.index)}> Supprimer </div>
            </Grid>
            <hr className="underline"></hr>
        </>)
}
export default Box_produit_Card ;