import React from "react";
import { CloseCircle, ShoppingCart, Trash } from "iconsax-react";
import img1 from "../../assets/prod2.png";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import img2 from "../../assets/logom.png";
const Box_FavoirsProduit_Card = (props) => {
  return (
<div>
<div className="colline-box">
      <div className="row6-favo">
        <div className="row2-favo">
      
          <div>
            <img src={"http://127.0.0.1:8080/uploads/"+props.imgp}className="img1-favo" />
          </div>
          <div className="col2-favo">
            <div className="txt3-favo">
              <p>{props.titre}</p>
            </div>
            <div className="row4-favo">
              <div className="logolib">
                <img src={"http://127.0.0.1:8080/uploads/"+props.imgl}  style={{width:"20px" , height:"20px"}} />
              </div>
              <div>
                <Link to={`/librairieProfile/${props.idl}`}>
                  <p className="txtlink-favo">{props.namelibriarie}</p>
                </Link>
              </div>
            </div>
            <div className="stars-favo">
              <Rating name="read-only" value={props.nbstart} readOnly
                defaultValue={0}
                size="small"
                className="stars"
              />      <div className="total-avis">({props.nbstart===undefined?0:props.nbstart})</div>
            </div>
          </div>
        </div>

       
          
         <div>   <p className="prix-favo">{props.prix} dt</p></div>
       
          <div className="rowboxfavo-page2">
          <div className="shop-favo">
            <div className="shopcont-favo">
              <ShoppingCart size="22" color="#222222" variant="Bold" />
            </div>
          </div>
          <div className="delete-favo">
              <Trash size="22" color="#E66A6A" className="icondelete" variant="Bold" />
          </div>
          </div>
          

      </div>

    </div>
          <div className="lin-favo2" />
</div>
  );
};
export default Box_FavoirsProduit_Card;
