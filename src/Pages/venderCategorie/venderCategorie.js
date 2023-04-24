import React, { useState } from "react";
import logo from "../../assets/logo10.png";
import img from "../../assets/Ellipse 503.png";
import {
  Chart2,
  Element4,
  Shop,
  Box,
  TruckFast,
  ShoppingCart,
  Graph,
  Receipt1,
  LogoutCurve,
  SearchNormal1,
  ArrowRight2,
  ArrowLeft2,
} from "iconsax-react";
import "./venderCategorie.css";
import { InputAdornment, OutlinedInput } from "@mui/material";
const VenderCategorie = () => {
  const linkarray = [
    {
      linkname: "Tableau du bord",
      icon: <Chart2 size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
      linkname: "Catégories",
      icon: <Element4 size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
      linkname: "Inventaire",
      icon: <Shop size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
      linkname: "Liste de commandes",
      icon: <Box size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
      linkname: "Liste de livraisons",
      icon: <TruckFast size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
      linkname: "Approvisionner",
      icon: <ShoppingCart size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
      linkname: "Gestion de points",
      icon: <Graph size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
      linkname: "Factorisation",
      icon: <Receipt1 size="32" color="#7E7E7E" variant="Bulk" />,
    },
  ];
  const [linkStyle, setLinkStyle] = useState(false);
  const [linkId, setLinkId] = useState(0);
  const handleChangeStyleLink = (id) => {
    setLinkStyle(true);
    setLinkId(id);
  };
  console.log();
  return (
    <div className="categoriePage">
      <div className="side-bar">
        <img src={logo} alt="maktba" className="logo-side" />
        <div className="link-side-bar">
          {linkarray.map((e, key) => (
            <div
              onClick={() => handleChangeStyleLink(key)}
              className={
                linkId === key && linkStyle
                  ? "link"
                  : key === 0 && !linkStyle
                  ? "link"
                  : "linknone"
              }
            >
              {e.icon}
              <p>{e.linkname}</p>
            </div>
          ))}
        </div>
        <div className="profile-container1">
          <img src={img} alt="profil" className="profil" />
          <p className="titreProfile">Profile</p>
        </div>
        <div className="deconnecter-box">
          <LogoutCurve
            size="22"
            color="#E66A6A"
            variant="Bulk"
            className="iconOut"
          />
          <p className="outText">Se déconnecter</p>
        </div>
      </div>
      <div className="pages-container1">
        <div className="header-page-categorie">
          <h1 className="title-page-categorie">Catégories</h1>
          <button className="btn-suggestion">Faire une suggestion</button>
        </div>
        <div className="box1-categorie">
          <div className="header-box1">
            <OutlinedInput
              className="search-inpute2"
              placeholder={"Rechercher l'ID de commande, l'article"}
              endAdornment={
                <InputAdornment position="end">
                  <SearchNormal1 size="19" color="#B1B1B1" />
                </InputAdornment>
              }
            />
            <div className="pagination-VenderCategorie">
              <p className="text-1-0">Affichage</p>
              <select className="select-1-0">
                <option value={10}> 10</option>
              </select>
              <p className="text-1-0">résultats sur 50</p>
            </div>
          </div>
          <table className="table">
            <tr>
              <th style={{ width: "184px" }}>Catégorie</th>
              <th style={{ width: "504px" }}>Description</th>
              <th style={{ width: "180px" }}>Nbr de produits</th>
              <th>Dernière mise à jour</th>
            </tr>
            <tr>
              <td className="categorie-title1">Scolaire</td>
              <td className="categorie-description">
                Ensemble des instruments, cahiers, manuels, crayons, etc. dont
                un étudiant/écolier a besoin afin de suivre une formation.
              </td>
              <td className="nb-prod-table">20</td>
              <td className="data-update">20/03/2023</td>
            </tr>
            <tr>
              <td className="categorie-title1">Para-scolaires</td>
              <td className="categorie-description">
                Ensemble de para-scolaires pour les enfants, école, collège,
                lycée, privée, etc.
              </td>
              <td className="nb-prod-table">20</td>
              <td className="data-update">20/03/2023</td>
            </tr>
            <tr>
              <td className="categorie-title1">Outils informatiques</td>
              <td className="categorie-description">
                Ensemble de para-scolaires pour les enfants, école, collège,
                lycée, privée, etc.
              </td>
              <td className="nb-prod-table">20</td>
              <td className="data-update">20/03/2023</td>
            </tr>
            <tr>
              <td className="categorie-title1">Divers</td>
              <td className="categorie-description">
                Ensemble de para-scolaires pour les enfants, école, collège,
                lycée, privée, etc.
              </td>
              <td className="nb-prod-table">20</td>
              <td className="data-update">20/03/2023</td>
            </tr>
            <tr>
              <td className="categorie-title1">Jeux educatifs</td>
              <td className="categorie-description">
                Ensemble de para-scolaires pour les enfants, école, collège,
                lycée, privée, etc.
              </td>
              <td className="nb-prod-table">20</td>
              <td className="data-update">20/03/2023</td>
            </tr>
          </table>
        </div>
        <div className="pagination1-categorie">
          <ArrowLeft2 size="22" color="#626262" />
          <p>Page 1 sur 1</p>
          <ArrowRight2 size="22" color="#626262" />
        </div>
      </div>
    </div>
  );
};
export default VenderCategorie;
