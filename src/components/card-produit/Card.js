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
  console.log("testtee",props.totalavis)
  return (
    <div className="card">
       
      <div className="cont">
      <div className='background-cardeprod'><p className='back-text1'>pack promo</p></div>

        <Link to={`/Detailproduit/${props.idp}`}><img src={"http://127.0.0.1:8080/uploads/"+props.imgp} className="img-cardprod"/></Link>
        
        <div>
          <div className="txt-card1">{props.titre} </div>
          <div>
            <div className="grb-card22">
              <div>
                
                <img src={"http://127.0.0.1:8080/uploads/"+props.logoL} className="logolib"/>
              </div>
              <div>
              
                <Link to={`/librairieProfile/${props.idl}`}>
                  <p className="txt-nommaktba">{props.noml}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="grb-card2">
            <Rating
              name="read-only"
              value={props.maxAvis}
              readOnly
              defaultValue={0}
              size="small"
              className="stars"
            />

            <p className="txt-sp">({props.totalavis===undefined?0:props.totalavis})</p>
          </div>
          <div>
            {" "}
            <hr className="line-card"></hr>{" "}
          </div>
        </div>

        <div className="grb-card">
          <p className="txt-card2">{props.prix}dt</p>
          <p className="txt2xard2">{props.prix}dt</p>
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
