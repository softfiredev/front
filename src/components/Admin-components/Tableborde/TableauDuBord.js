import React, { useEffect, useState } from "react";
import "./TableauDuBord.css";
import Rating from "@mui/material/Rating";
import "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { nb_commande_par_jour } from "../../../Store/Service/nb_commande_par_jour";
import { findCommandeBylibrairie } from "../../../Store/Service/findCommandeBylibrairie";
import { prodplusvendus } from "../../../Store/Service/prodplusvendus";
import moment from "moment";
import { nb_commande } from "../../../Store/Service/nb_commande";
import { ProduitMieuxNote } from "../../../Store/Service/produitMieuxNote";
import { Box1, Building, Grid1, Grid2, MedalStar, Profile, Shop } from "iconsax-react";
const TableauDuBordAdmin = (props) => {
  const op = ["1", "2", "3", "4", "5", "6", "7"];

  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const librairieData = useSelector(
    (state) => state.findCommandeBylibrairie.commandeslibrairie
  );
  const produit_mieux_note=useSelector((state)=>state?.ProduitMieuxNote.ProduitMieuxNote)
  const prodplusvende = useSelector((state) => state.prodplusvende.produit);
  const nbcommande = useSelector((state) => state.nb_commande.produit);
  const nbcommandeparjour = useSelector(
    (state) => state.nbcommandeparjoure.produit
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findCommandeBylibrairie(props?.user.id));
    dispatch(prodplusvendus(props?.user.id));
    dispatch(nb_commande_par_jour(props?.user.id));
    dispatch(nb_commande(props?.user.id));
    dispatch(ProduitMieuxNote(props?.user.id))
  }, []);

  const currentDate = moment().format("YYYY-MM-DD");
  const filteredData = librairieData.filter((item) => {
    const parsedDate = moment(item.createdAt, "YYYY-MM-DD");
    const threeDaysAgo = moment().subtract(10, "days");
    return parsedDate.isBetween(threeDaysAgo, currentDate, null, "[]");
  });

  const dat = {
    labels: [],
    datasets: [
      {
        label: "Nombre de commandes",
        data: [],
        backgroundColor: ["#F7D070"],
        hoverBackgroundColor: ["#F7D070"],
        borderRadius: 8,
        borderWidth: 1,
        barThickness: 40,
      },
    ],
  };
  const filteredData2 = nbcommandeparjour.filter((item) => {
    const parsedDate = moment(item.createdAt, "YYYY-MM-DD");
    const threeDaysAgo = moment().subtract(selectedValue, "days");
    return parsedDate.isBetween(threeDaysAgo, currentDate, null, "[]");
  });
  dat.labels.push(filteredData2.createdAt);
  dat.datasets[0].data.push(filteredData2.nombre_commandes);
  filteredData2.forEach((value) => {
    dat.labels.push(value.createdAt);
    dat.datasets[0].data.push(value.nombre_commandes);
  });
  const optionss = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };


  return (
    <div className="Tb">
      <div>
        <p className="txt1-Tb">Salut, Admin! 👋</p>
        <p className="txt2-Tb">Consultez votre tableau de bord aujourd'hui. Voici un aperçu de vos statistiques.</p>
      </div>

     <div className="boxrow-Tbb">
     <div className="miniboxrow-Tbb">
<div className="circuleboxrow-Tbb">
<Profile
 size="20"
 color="#513C06"
 variant="Bold"
/>
</div>
<div>
  <p className="txtxminiboxrow">22106</p>
  <p className="txt2xminiboxrow">Clients</p>
</div>
</div>
<div className="miniboxrow-Tbb">
<div className="circuleboxrow-Tbb">
<MedalStar
 size="20"
 color="#513C06"
 variant="Bold"
/>
</div>
<div>
  <p className="txtxminiboxrow">22106</p>
  <p className="txt2xminiboxrow">Partenaires</p>
</div>
</div>
<div className="miniboxrow-Tbb">
<div className="circuleboxrow-Tbb">
<Shop
 size="20"
 color="#513C06"
 variant="Bold"
/>
</div>
<div>
  <p className="txtxminiboxrow">22106</p>
  <p className="txt2xminiboxrow">Vendeurs</p>
</div>
</div>
<div className="miniboxrow-Tbb">
<div className="circuleboxrow-Tbb">
<Building
 size="20"
 color="#513C06"
 variant="Bold"
/>
</div>
<div>
  <p className="txtxminiboxrow">22106</p>
  <p className="txt2xminiboxrow">Fournisseurs</p>
</div>
</div>
<div className="miniboxrow-Tbb">
<div className="circuleboxrow-Tbb">
<Grid2
 size="20"
 color="#513C06"
 variant="Bold"
/>
</div>
<div>
  <p className="txtxminiboxrow">22106</p>
  <p className="txt2xminiboxrow">Catégories</p>
</div>
</div>
<div className="miniboxrow-Tbb">
<div className="circuleboxrow-Tbb">
<Grid1
 size="20"
 color="#513C06"
 variant="Bold"
/>
</div>
<div>
  <p className="txtxminiboxrow">22106</p>
  <p className="txt2xminiboxrow">SousCatégories</p>
</div>
</div>
<div className="miniboxrow-Tbb">
<div className="circuleboxrow-Tbb">
<Box1
 size="20"
 color="#513C06"
 variant="Bold"
/>
</div>
<div>
  <p className="txtxminiboxrow">22106</p>
  <p className="txt2xminiboxrow">Produits</p>
</div>
</div>

     </div>
     <div className="roxblq3-Tb">
     
     <div style={{display:"flex",flexDirection:"column",gap:"2em",width:"664px"}}>

     <div className="blq3-Tb">
        <div className="row3-tb">
          <div>
            <p className="txt9-tb">Nombre de commandes/Visiteurs</p>
          </div>
        </div>
        <Bar data={dat} options={optionss} style={{width:"164px",height:"22px"}} />
      </div>


     <div className="blq4-Tb">
        <div>
          <p className="txt9-tb">Dernières commandes</p>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Client</th>
            <th>Montant</th>
            <th>Nbr d’articles</th>
            <th>Date de création</th>
            <th>Staut</th>
          </tr>

          {filteredData?.map((obj, index) => (
            <tr
              className={
                obj?.etatVender === "Nouveau" ? "backnovo-c" : "backnovo-c0"
              }
            >
              <td className="tdwidth">{obj?.id}</td>
              <td className="tdwidth02">
         
                <div className="row-c">
                  <Avatar
                    src={"http://localhost:8080/uploads/" + obj?.user?.avatar}
                    style={{ borderRadius: "50%" }}
                    className="img1-c"
                  />
                  <div style={{ marginTop: "3%" }}>
                    <p className="txt01-c">{obj?.user?.fullname}</p>
                  </div>
                </div>
              </td>
              <td className="tdwidth1">
                <p className="txt02-c">{obj.total_ttc?.toFixed(2)}</p>
              </td>
              <td className="tdwidth1">
                {obj?.produitlabrairies[0]?.nb_Article}
              </td>
              <td className="tdwidth1">{obj?.createdAt}</td>

              <td className="tdwidth1">
                {obj.etatVender === "Compléter" ? (
                  <>
                    <button className="bnt01-c">
                      <p className="txtbnt01-c">Compléter</p>
                    </button>
                  </>
                ) : (
                  <>
                    {obj.etatVender === "En cours" ? (
                      <button className="bnt02-c">
                        <p className="txtbnt02-c">{obj.etatVender}</p>
                      </button>
                    ) : (
                      <>
                        {obj.etatVender === "Rejeter" ? (
                          <button
                            className="bnt02-c"
                            style={{ background: "#FACDCD" }}
                          >
                            <p className="txtbnt02-c">{obj.etatVender}</p>
                          </button>
                        ) : (
                          <>
                            {obj.etatVender === "Nouveau" ? (
                              <button
                                className="bnt02-c"
                                style={{ background: "#FCEFC7" }}
                              >
                                <p
                                  className="txtbnt02-c"
                                  style={{ color: "#513C06" }}
                                >
                                  {obj.etatVender}
                                </p>
                              </button>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
     </div>
     

      <div className="colblq3-Tb">
       <div className="txtxminiboxrow"><p>Produits populaires<span className="txtxminiboxrow2"> (30 derniers jours)</span></p></div>
     <div className="colblq33-Tb">
     <div style={{display:"flex",gap:"1em"}}>
        <img  className="imgtab"/>
        <div>
          <div><p className="txtsous">Carnet spiral 9*13cm 80p 5/5 YAMa.</p></div>
<div><p className="txt2152-tb">1,700 DT</p></div>
        </div>
  
           </div>
           <div style={{display:"flex",gap:"1em"}}>
        <img  className="imgtab"/>
        <div>
          <div><p className="txtsous">Carnet spiral 9*13cm 80p 5/5 YAMa.</p></div>
<div><p className="txt2152-tb">1,700 DT</p></div>
        </div>
  
           </div>
           <div style={{display:"flex",gap:"1em"}}>
        <img  className="imgtab"/>
        <div>
          <div><p className="txtsous">Carnet spiral 9*13cm 80p 5/5 YAMa.</p></div>
<div><p className="txt2152-tb">1,700 DT</p></div>
        </div>
  
           </div>

     </div>

         
        
         

      </div>
      </div>

    </div>
  );
};
export default TableauDuBordAdmin;

