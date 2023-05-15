import React, { useEffect,useState } from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import logo from "../../../assets/logo10.png";
import "./categorie.css";
import Pagination from "@mui/material/Pagination";
import { SearchNormal1} from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { getNbProduitlibBycategorie } from "../../../Store/Service/nbProduitLibByCategoorie";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  p: 4,
  width: 544,
  height: 690,
  borderRadius: "8px",
};
const Categorie = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const produitbycategorie = useSelector(
    (state) => state.NbproduitLib.Nbproduit
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNbProduitlibBycategorie(2));
  }, []);
  const items =8;
  const [current,setCurrent]=useState(1)
  const NbPage=Math.ceil(produitbycategorie.length/items);
  const startIndex=(current -1)*items;
  const endIndex=startIndex+items;
  const DataPerPage=produitbycategorie.slice(startIndex,endIndex)
  function handlePagination (event,page) {
    setCurrent(page)
  }
  return (
    <>
      <div className="pages-container1">
        <div className="header-page-categorie">
          <h1 className="title-page-categorie">Catégories</h1>
          <button className="btn-suggestion" onClick={handleOpen}>
            Faire une suggestion
          </button>

          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
          >
            <Box sx={style}>
              <div className="boxmodal-c">
                <div className="flex-end-c">
                  {" "}
                  <div>
                    {" "}
                    <i
                      class="fa fa-close"
                      onClick={handleClose}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
                <div className="logo2-c">
                  {" "}
                  <img src={logo} />
                </div>
                <div className="col4-cv">
                  <div>
                    {" "}
                    <p className="txt7-cv">Suggestion de catégorie</p>
                  </div>
                  <div>
                    <p className="txt1-cv">
                      Vous avez une catégorie que vous souhaitez ajouter ?
                      Envoyez-nous votre suggestion et nous l'examinerons.
                    </p>
                  </div>
                  <div className="col20-cv">
                    <p className="txtmodal-cv">Nom de catégorie</p>
                    <OutlinedInput
                      className="input-cv"
                      placeholder="Nom de catégorie"
                    />
                  </div>

                  <div className="col20-cv">
                    <p className="txtmodal-cv">Description</p>
                    <OutlinedInput
                      className="input-cv2"
                      placeholder="Votre description de cet catégorie..."
                      multiline
                      rows={5}
                      maxRows={80}
                    />
                  </div>
                  <div className="col21-cv">
                    <button className="bntmodal-cv" onClick={handleClose}>
                      <p className="txtbntmodal-cv">Annuler</p>
                    </button>
                    <button className="bntmodal2-cv">
                      <p className="txtbntmodal2-cv">Envoyer</p>
                    </button>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
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
              <th style={{ width: "484px" }}>Description</th>
              <th style={{ width: "160px" }}>Nbr de produits</th>
              <th>Dernière mise à jour</th>
            </tr>
            {DataPerPage.map((e)=>( <tr>
              <td className="categorie-title1">{e.name}</td>
              <td className="categorie-description">
                      {e.Description}
              </td>
              <td className="nb-prod-table">{e.produitlabrairies?.[0].nb_Produit}</td>
              <td className="data-update">{e.produitlabrairies?.[0].updatedAt}</td>
            </tr>))}
           
           
          </table>
        </div>
        <br /> <br />
        <div className="page-listev">
        <Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
                />
        </div>
      </div>
    </>
  );
};
export default Categorie;
