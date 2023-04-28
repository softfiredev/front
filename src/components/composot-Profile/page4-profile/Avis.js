import React from "react";
import "./Avis.css";
import { OutlinedInput } from "@mui/material";
import Rating from "@mui/material/Rating";
import { More, ArrowCircleRight2, Edit, Trash } from "iconsax-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import img1 from "../../../assets/prod2.png";

const Avis = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
          <table style={{ width: "105%", }}>
            <tr>
              <th>
                <div style={{ marginLeft: "-6%" }}>Articles</div>
              </th>
              <th>Date</th>
              <th>Score</th>
              <th>
                <div style={{ marginLeft: "10%" }}>Commentaire</div>
              </th>
            </tr>
            <br />
            
            {tabcomo.map((obj) => (
              <tr>
                <td>
                  <div className="row-avis">
                <img src={img1} className="img1-avis" />
                  <div style={{marginTop:"4%"}}>{obj.Articles}</div>
                  </div></td>
                <td>{obj.Date}</td>
                <td>{obj.Score}</td>
                <td className="tabcom-avis"><div > {obj.Commentaire} </div></td>
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
                <ArrowCircleRight2 size="22" color="#222222" />{" "}
                <span>
                  <p className="txtmenu-avis">Aller au produit</p>
                </span>{" "}
              </MenuItem>
              <MenuItem className="menuitem-avis" onClick={handleClose}>
                <Edit size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Modifier</p>
                </span>{" "}
              </MenuItem>
              <MenuItem className="menuitem-avis" onClick={handleClose}>
                <Trash size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Supprimer</p>
                </span>{" "}
              </MenuItem>
            </Menu>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Avis;
