import React from "react";
import "./Page2.css";
import {SearchNormal1} from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Box_FavoirsProduit_Card from "./../../box-favorisProduit-card/box-favorisProduit-card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduitFavorie } from "../../../Store/Service/AllProduitFavorieByclient";
const Page2 = (props) => {
  const dispatch = useDispatch();
  const produitFavorie = useSelector(
    (state) => state.produiFavorie.produiFavorieClient
  );
  useEffect(() => {
    dispatch(getAllProduitFavorie(props.user?.id));
  }, []);
  console.log(produitFavorie);

  return (
    <div className="favorie">
      <div className="col1-favo">
        <div>
          <p className="txt1-favo">Favoris</p>
        </div>
        <div>
          <OutlinedInput
            className="input-pro"
            placeholder={"Rechercher..."}
            endAdornment={
              <InputAdornment position="end">
                <SearchNormal1 size="19" color="#B1B1B1" />
              </InputAdornment>
            }
          />
        </div>

        <div className="row-favo">
          <div>
            <p className="txt2-favo">Article</p>
          </div>
          <div>
            <p className="txt2-favo">Total HT</p>
          </div>
        </div>
        <div><div className="lin-favo" /></div>
      <div>
      <div className="scroll-container">
          {faivorisProduit.map((produit) => (
           <Box_FavoirsProduit_Card nom={produit.nom} prix={produit.prix} nbstart={produit.nbstart} nomoflibriarie={produit.nomoflibriarie} idl={produit.idlibrairie}/>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page2;



