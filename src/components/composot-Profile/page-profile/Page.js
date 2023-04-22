import React from "react";
import "./page.css";
import { OutlinedInput } from "@mui/material";
import { RefreshSquare, AddCircle, ExportCurve } from "iconsax-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Avtr from "../../../assets/avtclient.png";
import { useState } from "react";
const Page = () => {
   const [openchangePassword , setopenchangePassword]=useState(false) ;
   const handleOpenchangePassword=()=>{
    setopenchangePassword(true)
   }
   const handleClosechangePassword=()=>{
    setopenchangePassword(false)
   }
  return (
    <div>
      <div className="carts2">
        <div className="col1-page1">
          <div className="txt1-carts2">Mon identité</div>
          <div>
            <div className="rowbnt-page">
              <div className="avatar-container">
                <img src={Avtr} className="avrt-page" />
                <div className="export-icon">
                  <ExportCurve size="22" color="#101010" style={{padding:"2px 2px 0px 2px"}} />
                </div>
              </div>
              <div className="col00-page1">
                <div>
                  <p className="txt0-profile3">Photo de profile</p>
                </div>
                <div>
                  <p className="txt1-profile3">300x300 et max 2 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Nom et Prénom</div>
            <OutlinedInput className="input-pro" />
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Email</div>
            <OutlinedInput className="input-pro" />
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Numéro de téléphone</div>
            <OutlinedInput className="input-pro" />
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Date de naissance</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="input-pro" />
            </LocalizationProvider>
          </div>
          <button className="bnt-pro3">
            <p className="txtbnt-pro2">Valider</p>
          </button>
          <br />
        </div>
      </div>
      <div className="box2-page">
        <h2>Mon mot de passe</h2>
        <div className={openchangePassword?"icon-none":"rowbnt-page"}>
          <RefreshSquare size="22" color="#E9B949 " variant="Bold" onClick={handleOpenchangePassword}  />
          <div>Changer le mot de passe</div>
        </div>
        <div className={openchangePassword?"changePasswordForm":"changePasswordFormNone"}>
              <div className="input-container">
                <label className="label-password-change">Mot de passe actuel</label>
                <OutlinedInput className="input-change-password" placeholder="Entrez votre mot de passe"/>
                <label className="label-password-change">Nouveau mot de passe</label>
                <OutlinedInput className="input-change-password" placeholder="Entrez votre mot de passe"/>
              </div>
              <div className="btn-form">
                  <button className="btn-Annuler">Annuler</button>
                  <button className="btn-Valider" onClick={handleClosechangePassword}>Valider</button>
              </div>
        </div>
      </div>
      <div className="box3-page">
        <h2>Mes adresses</h2>
        <div className="rowbnt-page">
          <AddCircle size="22" color="#E9B949" variant="Bold" />
          <div>Ajouter une nouvelle adresse</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
