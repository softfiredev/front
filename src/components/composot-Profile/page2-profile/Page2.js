import React from "react";
import "./Page2.css";
import { OutlinedInput } from "@mui/material";
import Box_FavoirsProduit_Card from './../../box-favorisProduit-card/box-favorisProduit-card';

const Page2 = () => {
  const [value, setValue] = React.useState(4);
  const faivorisProduit = [
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    { nom: "produit1", prix: 2000, nomoflibriarie: "elrahma", nbstart: 5 , "idlibrairie":1},
    
  ];
  return (
    <div className="favorie">
      <div className="col1-favo">
        <div>
          <p className="txt1-favo">Favoris</p>
        </div>
        <div>
          <OutlinedInput className="input-pro" placeholder="Nom de produit" />
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
