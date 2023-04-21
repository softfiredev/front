import React from "react";
import { CloseCircle, ShoppingCart, Trash } from "iconsax-react";
import img1 from "../../assets/prod2.png";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import img2 from "../../assets/logom.png";
import { Grid } from "@mui/material";
const Box_FavoirsProduit_Card = (props) => {
  return (
    <>
      <div className="row6-favo">
        <div className="row2-favo">
          <div className="closebnt-favo">
            <CloseCircle size="22" color="#B1B1B1" />
          </div>
          <div>
            <img src={img1} className="img1-favo" />
          </div>
          <div className="col2-favo">
            <div className="txt3-favo">
              <p>{props.nom}</p>
            </div>
            <div className="row4-favo">
              <div>
                <img src={img2} />
              </div>
              <div>
                <Link to={`/librairieProfile/${props.idl}`}>
                  <p className="txtlink-favo">{props.nomoflibriarie}</p>
                </Link>
              </div>
            </div>
            <div className="stars-favo">
              <Rating
                name="read-only"
                value={props.nbstart}
                readOnly
                defaultValue={2}
                size="small"
                className="stars"
              />
            </div>
          </div>
        </div>

        <div className="row7-favo">
          <div className="prix-favo">
            <p className="prix-favo">{props.prix} dt</p>
          </div>
          <Grid container direction="row">
          <div className="shop-favo">
            <div className="shopcont-favo">
              <ShoppingCart size="22" color="#222222" variant="Bold" />
            </div>
          </div>
          <div className="delete-favo">
              <Trash size="22" color="#E66A6A" className="icondelete" />
          </div>
          </Grid>
          
        </div>
      </div>
      <hr className="lin-favo2" />
    </>
  );
};
export default Box_FavoirsProduit_Card;
