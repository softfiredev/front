import React, { useEffect } from "react";import "./Avis.css";
import { OutlinedInput } from "@mui/material";
import { More, ArrowCircleRight2, Edit, Trash } from "iconsax-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import img1 from "../../../assets/prod2.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllAvisClient } from "../../../Store/Service/getAllAvisClient";

const Avis = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [op, setop] = React.useState(false);
  const [op2, setop2] = React.useState(false);
  const Avis = useSelector((state)=> state.AvisClient.AvisClient)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllAvisClient(props?.user?.id))
  },[])

console.log(Avis)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClicke=()=>{
    setop(true)
  }
  const handleClos = () => {
    setop(false);
    setAnchorEl(null);
  };
  const handleClos2 = () => {
    setop2(false);
    setAnchorEl(null);
  };

  const tabcomo = [
    {
      id: "#107570194",
      Articles: "GOUACHE 9T...",
      Date: "06 février 2022",
      Score: (
        <Rating
          name="read-only"
          value="2"
          readOnly
          defaultValue={2}
          size="small"
          className="stars"
        />
      ),
      Commentaire:
        "Enfin un lot qui correspond à la consomnation des enfants Variété, qualité, tout est là.",
    },
    {
      id: "#105750194",
      Articles: "GOUACHE 9T...",
      Date: "06 février 2023",
      Score: (
        <Rating
          name="read-only"
          value="2"
          readOnly
          defaultValue={2}
          size="small"
          className="stars"
        />
      ),
      Commentaire:
        "Enfin un lot qui correspond à la consomnation des enfants Variété, qualité, tout est là.",
    },
    {
      id: "#1040194",
      Articles: "GOUACHE 9T...",
      Date: "06 février 2027",
      Score: (
        <Rating
          name="read-only"
          value="2"
          readOnly
          defaultValue={2}
          size="small"
          className="stars"
        />
      ),
      Commentaire:
        "Enfin un lot qui correspond à la consomnation des enfants Variété, qualité, tout est là.Enfin un lot qui correspond à la consomnation des enfants Variété, qualité, tout est là.",
    },
    {
      id: "#1005194",
      Articles: "GOUACHE 9T...",
      Date: "06 février 2021",
      Score: (
        <Rating
          name="read-only"
          value="2"
          readOnly
          defaultValue={2}
          size="small"
          className="stars"
        />
      ),
      Commentaire:
        "Enfin un lot qui correspond à la consomnation des enfants Variété, qualité, tout est là.",
    },
    {
      id: "#10014594",
      Articles: "GOUACHE 9T...",
      Date: "06 février 2020",
      Score: (
        <Rating
          name="read-only"
          value="2"
          readOnly
          defaultValue={2}
          size="small"
          className="stars"
        />
      ),
      Commentaire:
        "Enfin un lot qui correspond à la consomnation des enfants Variété, qualité, tout est là.",
    },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "563px",
    boxShadow: "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",
    p: 4,
  };
  const stylee = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "284px",
    boxShadow: "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",
    p: 4,
  };
  return (
    <div className="avis">
  
    <div className="col1-avis">
        <div>
          <p className="txt1-avis">Mes avis</p>
        </div>
        <div>
          <OutlinedInput
            className="input-avis"
            placeholder="Rechercher l ID de commande, larticle"
          />
        </div>
        <div>
          <table >
            <tr >
              <th>
                <div style={{ marginLeft: "-6%" }}>Articles</div>
              </th>
              <th>Date</th>
              <th>Score</th>
              <th>
                <div style={{ marginLeft: "10%" }}>Commentaire</div>
              </th>
            </tr>
      
            
            {Avis?.map((obj) => (
              <tr className="tr-avis">
                <td>
                  <div className="row-avis">
                <img src={img1} className="img1-avis" />
                  <div style={{marginTop:"4%"}}>{obj.produitlabrairie.titre}</div>
                  </div></td>
                <td>06 février 2022</td>
                <td>    <Rating   name="read-only"
          value="2"
          readOnly
          defaultValue={obj.nbStart}
          size="small"
          className="stars"
        /></td>
                <td className="tabcom-avis"><p className="commtxt-avis"> {obj.commenter} </p></td>
                <br />
                <br />
                <td>
                  <div className="more-avis">
                    <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    />
                  </div>
                </td>
              </tr>
            ))}

            <Menu
              id="basic-menu"
              className="menu-avis"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem className="menuitem-avis" onClick={handleClose}>
                <ArrowCircleRight2 size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Aller au produit</p>
                </span>
              </MenuItem>
              <MenuItem className="menuitem-avis" onClick={handleClicke}>
                <Edit size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Modifier</p>
                </span>
              </MenuItem>
              <MenuItem className="menuitem-avis" onClick={()=>{setop2(true)}}>
                <Trash size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Supprimer</p>
                </span>
              </MenuItem>
            </Menu>
          </table>
        </div>
      </div>
  <Modal
                    open={op}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClose={handleClos}
                  >
                    <Box sx={style}>
                    <div className='container-modal'>
                    <div className="flex-end">
                          {" "}
                          <div>
                            {" "}
                            <i class="fa fa-close" onClick={handleClos}></i>
                          </div>
                        </div>

                    <div><h2 style={{textAlign:"center"}}>Modifier votre avis</h2></div>
                  <div className="boxavis-pro">
                <div>
                      
                <Rating
                            className="reting1"
                            value="2"
                           style={{fontSize:"4.5em"}}
                          />
                </div>
                <div>
               <p className="txtmodalavis-pro2"> Commentaire:</p>
                </div>
                <div>
               <p className="txtmodalavis-pro">Vos cours où que vous alliez. Grâce à ce carnet, vous pourrez conserver vos leçons en toute situation grâce au QR code qui apparaît sur chaque page, il vous permettra de sauvegarder n'importe quelle leçon.</p>
                </div>
                <div className="minirow-page4">
                <button onClick={handleClos} className="bnt3-page">
                  <p className="txtbnt3-page">Annuler</p>
                </button>
                <button className="bnt4-page">
                  <p className="txtbnt4-page">Confirmer</p>
                </button>
              </div>
                    </div>

                    </div>
                  
                    </Box>
                  </Modal>
                  <Modal
                    open={op2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClose={handleClos}
                  >
                    <Box sx={stylee}>
                    <div className='container-modal'>
                    <div className="flex-end">
                          {" "}
                          <div>
                            {" "}
                            <i class="fa fa-close" onClick={handleClos2}></i>
                          </div>
                        </div>
<br/>
                    <div><p className="txtmodal2-page4">Etes-vous sûr de vouloir supprimer cette avis?</p></div>
 
                
                <div className="minirow2-page4">
                <button onClick={handleClos2} className="bnt3-page">
                  <p className="txtbnt3-page4">Annuler</p>
                </button>
                <button className="bnt40-page4">
                  <p className="txtbnt40-page">Supprimer</p>
                </button>
              </div>
                    </div>

         
                  
                    </Box>
                  </Modal>
    </div>
  );
};

export default Avis;
