import React from "react";
import "./Card.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { ShoppingCart } from "iconsax-react";
import { add } from "../../Store/panier/panierSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Card = (props) => {
  const dispatch=useDispatch()
  const Addtopanier=(idp,imgp,prix,titre,qte,idl)=>{
    dispatch(add({idp,imgp,prix,titre,qte,idl}))
    toast.success("Vous avez ajouté un produit à votre panier",{autoClose: 1000})
  }
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
 const datenow=formattedDate=="2023-05-17"
  return (
    <div className="card">
       
      <div className="cont">
      {props.etat!==null &&  props.etat==="pack promo" ?
  <div className='background-cardeprod'><p className='back-text1'>{props.etat}</p></div>
  :
  props.etat!==null && props.etat==="Remise"?
  <div className='background-cardRes'><p className='back-text2' >{props.etat} 20%</p></div>
  :props.etat!==null && props.etat==="Meilleures vente"?
  <div className='background-cardRes'style={{background:"#E67635"}}><p className='back-text2' >{props.etat}</p></div>
  :props.etat!==null && props.etat==="Nouveautés" && datenow?
  <div className='background-cardRes'style={{background:"#4098D7"}}><p className='back-text2' >{props.etat}</p></div>
  :<></>
      }  
    

        <Link to={`/Detailproduit/${props.idp}`}><img src={"http://127.0.0.1:8080/uploads/"+props.imgp} className="img-cardprod"/></Link>
        
        <div>
          <div><p  className="txt-card1">{props.titre}</p> </div>
          <div>
            <div className="grb-card22">
              <div>
                
                <img src={"http://127.0.0.1:8080/uploads/"+props.logoL} className="logolib"/>
              </div>
              <div>
              
                <Link to={`/librairieProfile/${props?.idl}`}>
                  <p className="txt-nommaktba">{props.noml}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="grb-card2">
            <Rating
              name="read-only"
              value={props.maxAvis===undefined?0:props.maxAvis}
              readOnly
              defaultValue={0}
              size="small"
              className="stars"
              style={{marginTop:"14px"}}
            />

            <p className="txt-sp">({props.totalavis===undefined?0:props.totalavis})</p>
          </div>
          <div>
            {" "}
            <hr className="line-card"></hr>{" "}
          </div>
        </div>
   
     
          {props.prix_en_Solde!==null?
      
          <div className="grb-card">
          <div><p className="txt-card2">{props.prix_en_Solde}dt</p></div>
          <p className="txt2xard2">{props.prix}dt</p>
          <div className="bnt-card">
            <div className="ShoppingCart-card"  onClick={()=>Addtopanier(props.idp,props.imgp,props.prix,props.titre,1,props.idl)}>
              <ShoppingCart size="22" color="#FFffff" variant="Bold" />
            </div>
          </div>
        </div>
          :   <div className="grb-card">
          <div><p className="txt-card2">{props.prix}dt</p></div>
          <p className="txt2xard2"></p>
          <div className="bnt-card">
            <div className="ShoppingCart-card"  onClick={()=>Addtopanier(props.idp,props.imgp,props.prix,props.titre,1,props.idl)}>
              <ShoppingCart size="22" color="#FFffff" variant="Bold" />
            </div>
          </div>
        </div>

           }
         
      </div>
    </div>
  );
};

export default Card;
