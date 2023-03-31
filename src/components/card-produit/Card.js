import React from 'react'
import "./Card.css"
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


const Card = (props) => {
  return (
    <div className='card'>
        <div className="cont">
    <Link to="/Detailproduit"> <div className='img-cardprod'></div></Link>
     <div className='txt-card1'>{props.nom}</div>
     <Rating  className='stars' name="size-small" defaultValue={2} size="small" /><span></span>
     <div className='grb-card'><div className='txt-card2'>{props.prix}</div><button className='bnt-card'><p className='ajout-bnt'>Ajouter au panier</p></button></div>
     </div>
    </div>
  )
}

export default Card
