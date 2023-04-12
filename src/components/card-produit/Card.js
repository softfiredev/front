import React from "react";
import "./Card.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import img1 from "../../assets/prod2.png";
import img2 from "../../assets/logom.png";
import { ShoppingCart } from "iconsax-react";
import { useState } from "react";

const Card = (props) => {
  const [value, setValue] =useState(4);
  return (
    <div className="card">
       
      <div className="cont">
      <div className='back-cardprod'><p className='back-txt'>pack promo</p></div>
        <Link to={`/Detailproduit/${props.id}`}><img src={img1} className="img-cardprod"/></Link>
        
        <div>
          <div className="txt-card1">{props.nom} </div>
          <div>
            <div className="grb-card22">
              <div>
                
                <img src={img2} />
              </div>
              <div>
              
                <Link to={`/librairieProfile/${props.id}`}>
                  <p className="txt-nommaktba">{props.noml}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="grb-card2">
            <Rating
              name="read-only"
              value={value}
              readOnly
              defaultValue={2}
              size="small"
              className="stars"
            />

            <p className="txt-sp">(117)</p>
          </div>
          <div>
            {" "}
            <hr className="line-card"></hr>{" "}
          </div>
        </div>

        <div className="grb-card">
          <p className="txt-card2">{props.prix}</p>

          <div className="bnt-card">
            <div className="ShoppingCart-card">
              <ShoppingCart size="22" color="#FFffff" variant="Bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
