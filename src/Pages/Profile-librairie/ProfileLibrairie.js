import React, { useEffect, useState, lazy } from "react";
import Box from "@mui/material/Box";
import { Grid, OutlinedInput, MenuItem, ListSubheader } from "@mui/material";
import "./ProfileLibrairie.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Select from "@mui/material/Select";
import axios from "axios";
import {findProfileLibrairie} from "../../Store/Service/findProfileLibrairie"
const Card = lazy(() => import("../../components/card-produit/Card"));
const ProfileLibrairie = () => {
    const [produit, setproduit] = useState();
    const [nomlib, setnomlib] = useState();
    const [email, setemail] = useState();
    const [tel, settel] = useState();
    const [addresse, setaddresse] = useState();
    const [avatar, setavatar] = useState();
    useEffect(() => {
      axios.get("http://127.0.0.1:8080/labrairie/findProfile/1",{headers: {"Content-Type": "application/json"}})
      .then((response)=>{
          console.log(response)
          if(response.data.success===true){
            setnomlib(response.data.profile.fullname)
            setavatar(response.data.profile.avatar)
            setemail(response.data.profile.email)
            settel(response.data.profile.labrairie.telephone)
            setaddresse(response.data.profile.labrairie.addresse)
            setproduit(response.data.profile.labrairie.produitlabrairies)
          }
        
      })
      .catch(err=>{console.log("err",err)})
    }, []);
  return (
    <div className="profile">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
        className="ProfileData"
      >
        <img src={"http://127.0.0.1:8080/uploads/"+avatar} className="imageProfile" />
        <Grid
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          className="profileInfo"
        >
          <h1 className="nomLibrairie">{nomlib}</h1>
          <p className="addresse">
            Teboulba, Al Munastir, Tunisia, Monastir, béja Tunisie - 9000
          </p>
          <p className="telephone">+216 55 555 555</p>
          <p className="email">{email}</p>

          <Grid container className="icons">
            <Grid
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="insta-wrapper "
              style={{ marginLeft: "24px" }}
            >
              <Link to="#">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </Grid>
            <Grid
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="insta-wrapper "
              style={{ marginLeft: "24px" }}
            >
              <Link to="#" className="icon-insta">
                <InstagramIcon />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        className="box-filter"
      >
        <div className="group-Recherche">
          <OutlinedInput placeholder="Recherche" className="Recherche" />
          <button className="btn-Recherche">Recherche</button>
        </div>
        <div className="group-Tri">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <p className="Tri">Tri par :</p>
            <Select defaultValue="Categories" className="select">
              <MenuItem value="Categories">
                <em className="txt-select">Categories</em>
              </MenuItem>
              <ListSubheader> </ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <ListSubheader></ListSubheader>
              <MenuItem value={2}>Option 2</MenuItem>
            </Select>
          </Grid>
        </div>
      </Grid>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          bgcolor: 'background.paper',
          maxWidth: 1300,
          borderRadius: 1,
        }}
        className="ProdLib"
      >
        {produit?.map((e)=>( <Card prix={e.prix} nom={e.titre} image={e.image}/> ))}
      </Box>
    </div>
  );
};
export default ProfileLibrairie;
