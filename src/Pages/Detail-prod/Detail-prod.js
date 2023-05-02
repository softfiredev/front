import "./Detail-prod.css";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import Card from "../../components/card-produit/Card";
import { Grid } from "@mui/material";
import im1 from "../../assets/prod1.png";
import im2 from "../../assets/prod2.png";
import im3 from "../../assets/prod3.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { OutlinedInput } from "@mui/material";
import Description from "../../components/description-detail/Description";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { getProduitDetail } from "../../Store/Service/ProduitDetail";
import { useParams } from "react-router-dom";
import { getAllAvisProduitDeatil } from "../../Store/Service/AllavisProduitDetail";

const Detailprod = () => {
  const prod = [
    {
      id: "000011110",
      nom: "PACK LIVRE SCOLAIRE 1éME",
      prix: "8.1dt",
      noml: "ali Library",
    },
    {
      id: "0707275211110",
      nom: "PACK LIVRE SCOLAIRE 1 EME",
      prix: "5.1dt",
      noml: "ali Library",
    },
    {
      id: "278200011110",
      nom: "COMPAS AVEC CRAYON 2506 INV",
      prix: "4.1dt",
      noml: "Errahma Library",
    },
    {
      id: "00ssds011110",
      nom: "PACK LIVRE SCOLAIRE 1éME",
      prix: "8.1dt",
      noml: "Errahma Library",
    },
    {
      id: "0aaa0011110",
      nom: "PACK LIVRE SCOLAIRE 1 EME",
      prix: "1.1dt",
      noml: "Errahma Library",
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "550px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",

    p: 4,
  };

  const [value, setValue] = useState(3);
  const [imgclick, setimgclick] = useState("");
  const [value2, setValue2] = useState(3);
  const [pls, setpls] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const produitDetail = useSelector(
    (state) => state.ProduitDetailLibrairie.detailProd
  );
  const avisProduitDtail = useSelector(
    (state) => state.AllAvisProduitDeatil.avisDetailProd
  );
  useEffect(() => {
    dispatch(getProduitDetail(id));
    dispatch(getAllAvisProduitDeatil(id));
  }, [dispatch]);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Shop">
      <p className="txtlink1"> Shop</p>
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="Scolaire">
      <p className="txtlink1"> Scolaire </p>
    </Link>,
    <Typography key="3" color="text.primary">
      <p className="txtlink"> {produitDetail.titre}</p>
    </Typography>,
  ];
  const imagesProduit = produitDetail.imagelibrairies;

  return (
    <>
      <div className="detail">
        <div>
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </div>

        <div>
          <div>
            <div className="row-detail">
              <div className="swiper_container">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "##9E9E9E",
                    "--swiper-pagination-color": "##9E9E9E",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                  onClick={() => {
                    setimgclick("");
                  }}
                >
                  {imagesProduit.map((obj) => (
                    <SwiperSlide>
                      {imgclick == "" ? (
                        <>
                          <img
                            src={
                              "http://127.0.0.1:8080/uploads/" + obj.name_Image
                            }
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={"http://127.0.0.1:8080/uploads/" + imgclick}
                          />
                        </>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={7}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper1"
                  onClick={() => {
                    setimgclick("");
                  }}
                >
                  {imagesProduit.map((obj) => (
                    <>
                      <SwiperSlide>
                        <img
                          src={
                            "http://127.0.0.1:8080/uploads/" + obj.name_Image
                          }
                          onClick={() => {
                            setimgclick(obj.name_Image);
                          }}
                        />
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
              </div>
              <div className=" description">
                <Description
                  titre={produitDetail.titre}
                  maxAvis={produitDetail?.avisProduitlibraires[0]?.max_nb}
                  totalAvis={produitDetail?.avisProduitlibraires[0]?.total_avis}
                  prix={produitDetail.prix}
                  discription={produitDetail.description}
                  idl={produitDetail.labrairie.id}
                  noml={produitDetail.labrairie.nameLibrairie}
                  imgl={produitDetail.labrairie.imageStore}
                />
              </div>
            </div>
          </div>

          <div className="row10-detail">
            <div>
              <div className="col4-detail">
                <div>
                  <p className="txt20-detail">Les avis:</p>
                </div>

                <div>
                  <div className="row6-detail">
                    <div>
                      <div className="col3-deatil">
                        <div>
                          <p className="nbr-deatail">
                            {produitDetail?.avisProduitlibraires[0]?.max_nb ===
                            undefined
                              ? 0
                              : produitDetail?.avisProduitlibraires[0]
                                  ?.max_nb}{" "}
                          </p>
                        </div>
                        <div className="row6-detail">
                          <Rating
                            name="read-only"
                            value={
                              produitDetail?.avisProduitlibraires[0]?.max_nb ===
                              undefined
                                ? 0
                                : produitDetail?.avisProduitlibraires[0]?.max_nb
                            }
                            readOnly
                          />
                          <p className="txt12-detail">
                            (
                            {produitDetail?.avisProduitlibraires[0]
                              ?.total_avis === undefined
                              ? 0
                              : produitDetail?.avisProduitlibraires[0]
                                  ?.total_avis}
                            )
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="coll33-detail">
                      <div className="row6-detail">
                        <div>
                          <p className="">5</p>
                        </div>
                        <div>
                          <div className="progressbar">
                            <div
                              className="indicator"
                              style={{ width: "205px" }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p className="txt12-detail">(90)</p>
                        </div>
                      </div>

                      <div className="row6-detail">
                        <div>
                          <p className="">5</p>
                        </div>
                        <div>
                          <div className="progressbar">
                            <div className="indicator"></div>
                          </div>
                        </div>
                        <div>
                          <p className="txt12-detail">(90)</p>
                        </div>
                      </div>

                      <div className="row6-detail">
                        <div>
                          <p className="">5</p>
                        </div>
                        <div>
                          <div className="progressbar">
                            <div className="indicator"></div>
                          </div>
                        </div>
                        <div>
                          <p className="txt12-detail">(90)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="txt7-detail" onClick={handleOpen}>
                    Donnez votre avis
                  </p>

                  <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClose={handleClose}
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <div className="flex-end">
                          {" "}
                          <div>
                            {" "}
                            <i class="fa fa-close" onClick={handleClose}></i>
                          </div>
                        </div>

                        <p className="txtmodal-detail">Ajouter votre avis</p>
                        <br />
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="col3-deatil">
                          <Rating
                            className="reting1"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                          <p className="txtmodal3">Votre avis</p>
                          <OutlinedInput
                            className="inpu-conn2-modal"
                            placeholder="Message"
                            multiline
                            rows={5}
                            maxRows={80}
                          />
                          <div className="row-detail">
                            <button
                              className="bnt-modala1"
                              onClick={handleClose}
                            >
                              <p className="txt-modalbnt1">Annuler</p>
                            </button>
                            <button className="bnt-modala2">
                              <p className="txt-modalbnt2">Envoyer</p>
                            </button>
                          </div>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>

            <div className="coll3-detail">
              <div>
                <div className="Grob1-detail">
                  <div>
                    <p className="txt20-detail">Les commentaires:</p>
                  </div>
                  <div>
                    <div className="select-detail">
                      <Select
                        className="txt-select-detail"
                        defaultValue="Le plus ancien"
                        style={{
                          width: "145.5px",
                          height: " 39px",
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="Le plus ancien">
                          <em className="txt-select-detail">Le plus récent</em>
                        </MenuItem>
                        <ListSubheader> </ListSubheader>
                        <MenuItem value={1} className="txt-select-detail">
                          Option 1
                        </MenuItem>
                        <ListSubheader></ListSubheader>
                        <MenuItem value={2} className="txt-select-detail">
                          Option 2
                        </MenuItem>
                      </Select>
                    </div>

                    <span></span>
                  </div>
                </div>
              </div>

              {avisProduitDtail?.map((obj, key) => (
                <div className="coll4-detail" key={key}>
                  <div className="row6-detail">
                    <div>
                      <img
                        src={
                          "http://127.0.0.1:8080/uploads/" +
                          obj.client.user?.avatar
                        }
                        style={{ height: "18px", width: "18px" ,borderRadius:"23px" }}
                      />
                    </div>
                    <div className="fullnameAvis">{obj.client.user.fullname} </div>
                  </div>
                  <div>
                    <Rating name="read-only" value={obj.nbStart} readOnly />
                  </div>
                  <div className="txt60-detail">{obj.commenter}</div>
                </div>
              ))}

              <div className="pagination-detail">
                <Pagination
                  count={16}
                  shape="rounded"
                  className="pagination-shop"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="col303-detail">
            <div className="txt202-detail">Découvrez aussi</div>
            <div>
              <div className="row-row6card"></div>
            </div>
            <Grid item style={{ marginLeft: "10px" }}>
              <div style={{ width: "1000px" }}>
                <Swiper
                  freeMode={true}
                  grabCursor={true}
                  spaceBetween={-1200}
                  modules={[FreeMode]}
                  style={{ width: "1500px" }}
                >
                  {prod.map((obj, key) => (
                    <SwiperSlide>
                      <Grid item key={key}>
                        <Card
                          prix={obj.prix}
                          nom={obj.nom}
                          noml={obj.noml}
                          id={obj.id}
                        />
                      </Grid>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailprod;
