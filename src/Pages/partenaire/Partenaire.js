import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import'./partenaire.css'
import minilogo from '../../assets/Ellipse 150.png'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";


import {
  Send2,
  Element4,
  Shop,
  TruckFast,
  Profile,
  Logout,
   Box1,
   Flag,
   ReceiptDisscount,
   MessageText1,
   MedalStar,
   Heart,
   HomeHashtag,
} from "iconsax-react";

import { Link, Outlet, useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Logo from "../../assets/logo2.png"
const Item = ({ title, to, icon, selected, setSelected,box }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
    <p> {title}</p>
    {box?
     <div
     style={{
       background: "#FAC0A9",
       borderRadius: "4px",
       width: "24px",
       height: "24px",
       marginTop:"12%",
       color:"#F26129",
       display:"flex",
       justifyContent:"center",
       alignContent:"center"
     }}
   >
 {box}
   </div>
   :""
  
  }   
  </div>      
        </Typography>
      <a  href={to} />
    </MenuItem>
  );
};

const Partenaire = () => {
  const navigate = useNavigate();
  const Lsogout = () => {
    localStorage.removeItem("persist:root");
    navigate("/login");
    navigate(0);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedSmall, setSelectedSmall] = useState("home");

  return (
    <Box>
      {!isSmallScreen ? (
        <Box style={{display:"flex",gap:"2em",background:"#F5F5F5"}}
          sx={{
            "& .pro-menu-item":{
                color:"#9AA5B1 !important",
                display:"flex",
                justifyContent:"left",
                paddingLeft:"10%"
            },
            "& .pro-sidebar-inner": {
              background:" #FFFFFF !important",
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .css-mhe6fp": {
                paddingLeft: "0 !important",
               
              },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
              height:"65px"
              
            },
            "& .pro-inner-item:hover ": {
              color: "#C99A2E !important",
            },
       
            "& .pro-menu-item.active .pro-item-content":{
              color: "#1F2933 !important",
              display:"flex",
              justifyContent:"left"
            },
            "& .pro-menu-item.active .pro-icon-wrapper":{
              color: "#C99A2E !important",
            },
            "& .pro-menu-item.active": {
                borderLeft:" 4px solid var(--yellow-300, #C99A2E)",
              background: "#FCEFC7"
            },
            "& .css-17w9904-MuiTypography-root": {
              fontSize: "14px",
              fontFamily: "Manrope",
              fontWeight: "500",
              lineHeight: "200%",
              textAlign: "center",
          }
          }}
        >
          <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "30px 0px 50px 0",
                  color: colors.grey[100],
               
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    ml="10px"
                  >

                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <img src={Logo} />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>


              <Box paddingLeft={isCollapsed ? undefined : "8%"}>
                <Item
                  title="Mes commandes"
                  to="/partenaire/commandes"
                  icon={<Box1
                    size="22"
                     variant="Bold"
                   />}
                  selected={selected}
                  setSelected={setSelected}
                >
      
           </Item>
                <Item
                  title="Avis/Commentaires"
                  to="/partenaire/Avis"
                  icon={<MessageText1 size="22" variant="Bold"   />}
                  selected={selected}
                  setSelected={setSelected}
                />
            <Item
                  title="Mes points"
                  to="/partenaire/Mes_points"
                  icon={<MedalStar
                    size="22"
                    variant="Bulk"
                   />}
                  selected={selected}
                  setSelected={setSelected}
                />   
                
                <Item
                title="Mes Favoris"
                to="/partenaire/Mes_Favoris"
                icon={<Heart
                    size="22"
                   variant="Bulk"
                   />}
                selected={selected}
                setSelected={setSelected}
              />
                  <Item
                  title="Profile"
                  to="/partenaire/Profile"
                  icon={<Avatar src="" style={{width: "24px", height: "24px",borderRadius:"24px"}}/>}
                  selected={selected}
                  setSelected={setSelected}
                />
                      <Item
                  title="Home"
                  to="/Home"
                  icon={<HomeHashtag size="22"  variant="Bulk" />}
                  selected={selected}
                  setSelected={setSelected}
                />
               <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                   {isCollapsed ?
         <Logout size="22"variant="Bulk"  style={{width:"116px",marginTop:"20%",cursor:"pointer"}}/>
        :  <Button style={{background:"#FFFFFF",borderRadius:"8px",color:"#E0574E",width:"216px",marginTop:"65%",marginLeft:"7%"}} onClick={Lsogout}>
                Se déconnecter
                </Button> }
              
                 </Box>
              </Box>
            </Menu>
          </ProSidebar>

          <main className="contente"> 
        <Outlet/>
        </main>

         
        </Box>
      ) : (
        <Box
          style={{
            position: "fixed",
            width: "100%",
            left: "0px",
            bottom: "0px",
            display: "flex",
            justifyContent: "center",
            padding: "5px",
            backgroundColor: "white",
          }}
          sx={{ 
            background: `${colors.primary[400]} !important`}}
         
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            style={{ width: "100%", overflowX: "auto" }}
          >
            <Link to="/">
              <IconButton
                onClick={() => setSelectedSmall("home")}
                style={{color: selectedSmall === "home" ? "#ff8f26" : "grey"}}
              >
          <Element4 size="22" variant="Bulk" />
              </IconButton>
            </Link>
            <Link to="/restaurants">
              <IconButton
                onClick={() => setSelectedSmall("restaurant")}
                // style={{ color: selectedSmall == "restaurant" ? "primary" : "default"  }}
                style={{color: selectedSmall ==="restaurant" ? "#ff8f26" : "grey"}}
              >
              <Shop size="22" variant="Bulk" />
              </IconButton>
            </Link>

            <Link to="/clients">
              <IconButton
                onClick={() => setSelectedSmall("clients")}
                style={{color: selectedSmall === "clients" ? "#ff8f26" : "grey"}}
              >
              <Send2  size="22" variant="Bold" />
              </IconButton>
            </Link>

            <Link to="/categories">
              <IconButton
                onClick={() => setSelectedSmall("categories")}
                style={{color: selectedSmall === "categories" ? "#ff8f26" : "grey"}}
              >
      <TruckFast size="22" variant="Bulk" />            
   </IconButton>
              
              
            </Link>
            <Link to="/profile">  
            <IconButton
                onClick={() => setSelectedSmall("profile")}
                style={{color: selectedSmall === "profile" ? "#ff8f26" : "grey"}}
              >
        <Profile size="22"   variant="Bulk"    />
              </IconButton>
            </Link>
            <Link to="/profile">  
            <IconButton
                onClick={() => setSelectedSmall("profile")}
                style={{color: selectedSmall === "profile" ? "#ff8f26" : "grey"}}
              >
             <Box1 size="22"  variant="Bulk"  />
              </IconButton>
            </Link>
            <Link to="/profile">  
            <IconButton
                onClick={() => setSelectedSmall("profile")}
                style={{color: selectedSmall === "profile" ? "#ff8f26" : "grey"}}
              >
     <Flag size="22" variant="Bulk"/>
              </IconButton>
            </Link>
            <Link to="/profile">  
            <IconButton
                onClick={() => setSelectedSmall("profile")}
                style={{color: selectedSmall === "profile" ? "#ff8f26" : "grey"}}
              >
         <ReceiptDisscount size="22" variant="Bulk"/>
              </IconButton>
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Partenaire;
