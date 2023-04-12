import React, { useState } from "react";
import "./Profile.css";
import { LogoutCurve, Profile, Heart,MessageText,Box } from "iconsax-react";
import { Outlet } from "react-router-dom";
const Profilee = () => {
  return (
      <div className="profile-client">
            <h1 className="titre-profile">Bonjour, Amine!</h1>
            <div className="container-box-profile">
                <div className="container-link">
                          <div> <Profile/><p>profile</p></div>
                          <div><Heart/><p>Favoris</p></div>
                          <div> <Box/><p>Commandes</p></div>
                          <div> <MessageText/> <p>Mes avis</p></div>
                          <div><LogoutCurve/> <p>Déconnection</p> </div>
                </div>
                <div className="pages-container">
                <Outlet  />
                </div>
            </div>
      </div>
  );
};

export default Profilee;
