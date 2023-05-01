import "./Become_a_Partner.css";
import Part from "../../assets/part.jpg";
import { OutlinedInput, Grid } from "@mui/material";
import Cardbecome from "../../components/card-become/card-become";
import Cartcontact from "../../components/cart-contact/cart_contact";
import React from "react";
import Liste from "../../components/listefq/liste";
import { Link } from 'react-router-dom';
const Become_a_Partner = () => {
  const onButtonClick = () => {};

  return (
   <div className="partner">
 
      <div className="group-partner ">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4.5}
      >
        <Grid item>
          <div className="Become2">
            <div className="Become2-cont">
              <Grid container direction="column" spacing={6}>
                <Grid item>
                
                  <p className="txt1-become">Devenir partenaire</p> 
                </Grid>
                <Grid item>
                
                  <p className="txt2-become">
                    Nous sommes ravis que vous soyez intéressé par un
                    partenariat avec notre plateforme.
                  </p> 
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={6}
                  >
                    <Grid item>
                      <p className="txt3-become">
                        Notre mission est de fournir des fournitures scolaires,
                        des livres et des jouets éducatifs abordables et de
                        haute qualité aux particuliers et aux organisations. 
                      </p>
                    </Grid>
                    <Grid item>
                      <p className="txt33-become">
                        En vous associant à nous, vous pouvez nous aider à
                        réaliser notre mission tout en profitant à votre
                        entreprise/organisation. Lisez la suite pour en savoir
                        plus sur nos opportunités de partenariat.
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <div className="brr"></div>
        <Grid item>
          <div className="trans">
            <div>
              <div className="col5-becom">
                <div className="txt100-become">
                  Opportunités avec “Maktaba.tn”
                </div>
                <div className="txt101-become">
                  Chez Maktba.tn, notre plateforme avancée alimentée par l'IA
                  simplifie la commercialisation et la logistique des
                  fournitures éducatives, des livres et des jouets. En tant que
                  partenaire, vous bénéficiez de données en temps réel pour une
                  meilleure prise de décision et de la possibilité de gérer vos
                  propres projets. Joignez-vous à notre communauté pour
                  rationaliser votre chaîne d'approvisionnement, augmenter
                  l'efficacité et faire un impact positif dans votre région.
                  Rejoignez-nous dès aujourd'hui pour un avenir meilleur.
                </div>
              </div>
            </div>
            <div>
              <img src={Part} className="img-become" />
            </div>
          </div>
        </Grid>
        <div className="brr"></div>

        <Grid item>
          <div className="grbs">
            <div>
              <div className="txtp">
                Envoyez-nous une demande si vous êtes intéressé. Vous serez
                bientôt contacté par notre équipe pour confirmer.
              </div>
            </div>
            <Grid container direction="column" spacing={6}>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <div className="box-b">
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={5}
                    >
                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="flex-start"
                          spacing={3}
                        >
                          <Grid item>
                            <div className="txt8-become">Nom et prénom*</div> 
                          </Grid>
                          <Grid item>
                          
                            <OutlinedInput
                              className="inpt-becom"
                              placeholder="Nom et prénom"
                            /> 
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="flex-start"
                          spacing={3}
                        >
                          <Grid item>
                            <div className="txt8-become">
                              Numéro de téléphone*
                            </div> 
                          </Grid>
                          <Grid item>
                          
                            <OutlinedInput
                              className="inpt-becom"
                              placeholder="Numéro de téléphone"
                            /> 
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="flex-start"
                          spacing={3}
                        >
                          <Grid item>
                            <div className="txt8-become">E-mail*</div> 
                          </Grid>
                          <Grid item>
                          
                            <OutlinedInput
                              className="inpt-becom"
                              placeholder="E-mail*"
                            /> 
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <div className="txt8-become">Ce que vous êtes?*</div>
                        <br />
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="flex-start"
                          spacing={2}
                        >
                          <Grid item>
                            <div className="row300 ">
                              <input
                                type="Radio"
                                className="radio-become"
                                name="r1"
                              />
                              <p className="txt9-become">Fournisseur</p>
                            </div>
                          </Grid>
                          <Grid item>
                            <div className="row300">
                              <input
                                type="Radio"
                                className="radio-become"
                                name="r1"
                              />
                              <p className="txt9-become">Librairie</p>
                            </div>
                          </Grid>
                          <Grid item>
                            <div className="row300 ">
                              <input
                                type="Radio"
                                className="radio-become"
                                name="r1"
                              />
                              <p className="txt9-become">Entreprise</p>
                            </div>
                          </Grid>
                          <Grid item>
                            <div className="row300 ">
                              <input
                                type="Radio"
                                className="radio-become"
                                name="r1"
                              />
                              <p className="txt9-become">École</p>
                            </div>
                          </Grid>
                          <Grid item>
                            <div className="row300 ">
                              <div>
                                <input
                                  type="Radio"
                                  className="radio-become"
                                  name="r1"
                                />
                              </div>
                              <p className="txt9-become">Association</p>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item>
                      
                        <p className="txt8-become">Nom de votre travail ?*</p>
                      </Grid>
                      <Grid item>
                      
                        <OutlinedInput
                          className="inpt-becom"
                          placeholder="Nom de votre travail"
                        /> 
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <br />
                      <Grid item>
                      
                        <p className="txt8-become">Soumettre un fichier</p>
                      </Grid>
                      <Grid item>
                      
                        <button className="downlo" onClick={onButtonClick}>
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2WywqCQBSGv2wTtJNatImWLmodFPUE3agk2gkp5Pu/QAwcw6SmmUGnFv7wgzCe83kuotCq1R9qAKyBK5ABKXABlkDYBDCQ5Hcg/2B1tpJ7a4NuNMCqd3XB5xbQwqpyK02AvcwulWtde3VtD5usTOeFCXRcMzSXbf+qbQPgVAdU2xfJO/ktUQIMxYkhPAI6VWgPOBsmSCrLElrAz8J6VuoKdYUHSAtMZzUsgcpQ5Mw0T4RFtcqj0lwLFfMeWeQ5YbhM71zIJTZDVt03+IaU7Rt8VIGzH4CnKrALxB7BcflT2XeAu4BjYb0okBYcDRfOFJxKzmldPwXVB/CmvAX70kHspAegq6wprKfiuQAAAABJRU5ErkJggg=="
                            alt="ico"
                          />
                          <p className="tele"> Télécharger un fichier</p>
                        </button> 
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item>
                      
                        <p className="txt8-become">
                          Avez vous un lien? (Site Internet, Page Facebook,...)
                        </p>
                      </Grid>
                      <Grid item>
                      
                        <OutlinedInput
                          className="inpt-becom"
                          placeholder="Lien"
                        /> 
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item>
                      
                        <p className="txt8-become">
                          Vous pouvez fournir plus de détails ci-dessous.
                        </p>
                      </Grid>
                      <Grid item>
                      
                        <OutlinedInput
                          className="inpu-conn2"
                          placeholder="Message"
                          multiline
                          rows={5}
                          maxRows={80}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item>
                      
                        <div className="txt80-become">Votre choix de pack*</div>
                      </Grid>
                      <Grid item className="Cardbecome">
                      
                        <Cardbecome /> 
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <button className="bntn20-bec">
                  <div className="textbnt2Connexionn">Envoyer une demande</div>
                </button> 
              </Grid>
            </Grid>
          </div>
        </Grid>

        <br />
        <br />

        <Grid item>
          <div className="row4">
            <div className="col2-becam">
              <div className="desbecam1"> FAQs </div>
              <div className="desbecam2">
              
                Tout ce que vous devez savoir sur Maktaba et ses prestations.
                Vous ne trouvez pas la réponse que vous cherchez? Veuillez
                discuter avec notre équipe. 
                
              </div>
            </div>

            <Liste />
          </div>
        </Grid>
        <Grid item>
          <div className="butt">
            <div className="row32">
              <p className="Coordonnées"> Coordonnées et assistance</p>
              <div>
              
                <Cartcontact />
              </div>
              <p>
              <Link to="/Contact">
                <button className="bntn1-bec">
                  <div className="textbntConnexionn">Contactez-nous</div>
                </button>
                </Link>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  
   </div>
  );
};

export default Become_a_Partner;
