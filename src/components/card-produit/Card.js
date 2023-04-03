import React from 'react'
import "./Card.css"
import Rating from '@mui/material/Rating';
import img from "../../assets/bg.png";

const Card = (props) => {
  return (
    <div className='card'>
        <div className="cont">
     
     <img src={"http://127.0.0.1:8080/uploads/"+props.image} className='img' />
     <div className='txt-card1'>{props.nom}</div>
     <Rating  className='stars' name="size-small" defaultValue={2} size="small" /><span></span>
     <div className='grb-card'><div className='txt-card2'>{props.prix}</div><button className='bnt-card'><p className='ajout-bnt'>Ajouter au panier</p></button></div>
     </div>
    </div>
  )
}

export default Card
