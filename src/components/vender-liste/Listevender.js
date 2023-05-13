import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { TickSquare, More, FilterAdd } from "iconsax-react";
import img1 from "../../assets/prod2.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Filterbar from "../filterbar/Filterbar";
import { useDispatch, useSelector } from "react-redux";
import { AllListProduitLibe } from "../../Store/Service/AllistProduitLib";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Listevender = (props) => {
  const data = [
    {
      id: "103429",
      nom: "GOUACHE 9T METAL",
      prix: "8.500",
      cat: "Scolaire",
      Qté: "20",
      Mise: "20/03/2023",
    },
    {
      id: "103429",
      nom: "GOUACHE 9T METAL",
      prix: "8.500",
      cat: "Scolaire",
      Qté: "20",
      Mise: "20/03/2023",
    },
    {
      id: "103429",
      nom: "GOUACHE 9T METAL",
      prix: "8.500",
      cat: "Scolaire",
      Qté: "20",
      Mise: "20/03/2023",
    },
    {
      id: "103429",
      nom: "GOUACHE 9T METAL",
      prix: "8.500",
      cat: "Scolaire",
      Qté: "20",
      Mise: "20/03/2023",
    },
  ];
  const dispatch = useDispatch();
  const produit = useSelector((state) => state.AlllistProduitLib.listProduit);
  useEffect(() => {
    dispatch(AllListProduitLibe(2));
  }, []);
  return (
    <TabPanel value={props.value} index={0}>
      <br />
      <Filterbar
        icon={<FilterAdd size="22" color="#222222" />}
        nom="Ajouter filtre"
      />
      <br />
      <br />

      <table>
        <tr>
          <th>
            <TickSquare
              size="22"
              color="#7E7E7E"
              style={{ marginLeft: "15%" }}
            />
          </th>
          <th>#</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Catégorie</th>
          <th>Qté</th>
          <th>Mise à jour</th>
        </tr>

        {produit.map((obj, index) => (
          <tr>
            <td className="tdwidth0">
              {" "}
              <Checkbox style={{ color: " #E9B949" }} key={index} />
            </td>
            <td className="tdwidth">{obj.id}</td>
            <td className="tdwidth02">
              {" "}
              <div className="row-int01">
                <img src={"http://127.0.0.1:8080/uploads/"+obj.imagelibrairies?.[0]?.name_Image} className="img1-int" />
                <div style={{ marginTop: "3%" }}>
                  <p className="txt01-int">{obj.titre}</p>
                </div>
              </div>
            </td>
            <td className="tdwidth1">
              <p className="txt02-int">{obj?.prix}</p>
            </td>
            <td className="tdwidth1">{obj?.categorie?.name}</td>
            <td className="tdwidth1">{obj?.qte}</td>
            <td className="tdwidth1">{obj?.updatedAt}</td>
            <td>
              {" "}
              <div className="more-int">
                <More size="22" color="#222222" />
              </div>
            </td>
          </tr>
        ))}
      </table>
      <br />
      <br />
    </TabPanel>
  );
};

export default Listevender;
