import React from 'react'
import "./Card.css"
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import img1 from '../../assets/prod2.png'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="cont">
    <Link to="/Detailproduit"> <img src={img1} className='img-cardprod'/></Link>
    <div>
     <div className='txt-card1'>{props.nom}
     </div>
    <div className='grb-card2'><Rating  className='stars' name="size-small" defaultValue={2} size="small" /><p  className='txt-sp'>(117)</p ></div> 

     </div>
     <div className='grb-card'><div className='txt-card2'>{props.prix}</div><button className='bnt-card'><p className='ajout-bnt'>Ajouter au panier</p></button></div>

     </div>
    </div>
  )
}

export default Card
