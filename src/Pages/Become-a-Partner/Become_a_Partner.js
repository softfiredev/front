import './Become_a_Partner.css'
import Part from '../../assest/part.jpg'
import { OutlinedInput, Grid } from '@mui/material'
import Card_become from '../../components/card-become/card-become'
import Cartcontact from '../../components/cart-contact/cart_contact';
import React from 'react'

const Become_a_Partner = () => {


  const onButtonClick = () => { }
  return (
 
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={6} >

      <Grid item>
        <div className='Become2'>

          <Grid container direction="column" justifyContent="center" alignItems="center" spacing={6} >
            <Grid item>   <p className='txt1-become'>Devenir partenaire</p> </Grid>
            <Grid item>   <p className='txt2-become'>Nous sommes ravis que vous soyez intéressé par un partenariat avec notre plateforme.</p> </Grid>
            <Grid item>


              <Grid container direction="row" justifyContent="space-between"  >
                <Grid item>
                  <p className='txt3-become'>Notre mission est de fournir des fournitures scolaires, des livres et des jouets éducatifs abordables et de haute qualité aux particuliers et aux organisations. </p>
                </Grid>
                <Grid item>
                  <p className='txt33-become'>En vous associant à nous, vous pouvez nous aider à réaliser notre mission tout en profitant à votre entreprise/organisation. Lisez la suite pour en savoir plus sur nos opportunités de partenariat.</p>
                </Grid>
              </Grid>

            </Grid>

          </Grid>

        </div>
      </Grid>

      <Grid item>
        <Grid container direction="row" alignItems="center" spacing={1}>


          <Grid item>
            <Grid container direction="column" justifyContent="flex-start"
              alignItems="flex-start" spacing={7} >
              <Grid item>   <p className='txt4-become'>Opportunités avec “Maktaba.tn”</p> </Grid>
              <Grid item>   <p className='txt44-become'>Chez Maktba.tn, nous sommes passionnés par l'amélioration de l'accès aux fournitures scolaires de qualité et par l'autonomisation des individus pour avoir un impact positif dans leurs communautés. C'est pourquoi nous avons développé une plateforme de pointe, alimentée par une technologie avancée d'IA et optimisée pour la commercialisation et la logistique dans les industries des fournitures éducatives, des livres et des jouets.<br /><br />

                Notre plateforme est conçue pour offrir des capacités de gestion de données en temps réel, permettant à nos partenaires de prendre des décisions éclairées qui peuvent stimuler leur entreprise. De plus, nous croyons que la collaboration est la clé du succès et notre plateforme encourage l'engagement communautaire en permettant aux individus d'initier et de gérer leurs propres projets.<br /><br />

                En devenant notre partenaire, vous aurez accès à des solutions innovantes qui peuvent bénéficier à la fois à votre entreprise et à votre communauté.<br /><br />

                Notre plateforme peut vous aider à rationaliser votre chaîne d'approvisionnement, à augmenter votre efficacité et à développer votre entreprise. De plus, en faisant partie de notre communauté, vous aurez des opportunités de collaborer avec des personnes partageant les mêmes idées et de faire un impact positif dans votre région.<br /><br />

                Chez Maktba.tn, nous nous engageons à créer un avenir plus brillant pour tous, et nous croyons que notre plateforme peut être un outil puissant pour atteindre cet objectif. Rejoignez-nous dès aujourd'hui et devenez partie de la solution.</p>
              </Grid>
            </Grid>


          </Grid>
          <Grid item> <img src={Part} className="img-become" /></Grid>

        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <div className='box-b'>
            <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={6}  >


              <Grid item><p className='txt7-become'> Envoyez-nous une demande si vous êtes intéressé. Vous serez bientôt contacté par notre équipe pour confirmer.</p> </Grid>
              <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}  >
                  <Grid item><div className='txt8-become'>Nom et prénom*</div>  </Grid>
                  <Grid item> <OutlinedInput className='inpt-becom' placeholder="Nom et prénom" />  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}  >
                  <Grid item><div className='txt8-become'>Numéro de téléphone*</div>  </Grid>
                  <Grid item> <OutlinedInput className='inpt-becom' placeholder="Numéro de téléphone" />  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}  >
                  <Grid item><div className='txt8-become'>E-mail*</div>  </Grid>
                  <Grid item> <OutlinedInput className='inpt-becom' placeholder="E-mail*" />  </Grid>
                </Grid>
              </Grid>
              <Grid item>

                <div className='txt8-become'>Ce que vous êtes?*</div><br />
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={2}  >
                  <Grid item>
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start"  >
                      <input type="Radio" className='radio-become' name="r1" />
                      <p className='txt9-become'>Fournisseur</p>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start"  >
                      <input type="Radio" className='radio-become' name="r1" />
                      <p className='txt9-become'>Librairie</p>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start"  >
                      <input type="Radio" className='radio-become' name="r1" />
                      <p className='txt9-become'>Entreprise</p>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start"  >
                      <input type="Radio" className='radio-become' name="r1" />
                      <p className='txt9-become'>École</p>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start"  >
                      <input type="Radio" className='radio-become' name="r1" />
                      <p className='txt9-become'>Association</p>
                    </Grid>
                  </Grid>

                </Grid>


              </Grid>
              <Grid item>

                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={8}  >
                  <Grid item>  <p className='txt8-become'>Votre choix de pack*</p></Grid>
                  <Grid item>  <Card_become />  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}  >
                  <Grid item>    <p className='txt8-become'>Nom de votre travail ?*</p></Grid>
                  <Grid item>  <OutlinedInput className='inpt-becom' placeholder="Nom de votre travail" /> </Grid>
                </Grid>
              </Grid>



              <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}  >
                  <Grid item>    <p className='txt8-become'>Soumettre un fichier</p></Grid>
                  <Grid item>  <button className='downlo' onClick={onButtonClick}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2WywqCQBSGv2wTtJNatImWLmodFPUE3agk2gkp5Pu/QAwcw6SmmUGnFv7wgzCe83kuotCq1R9qAKyBK5ABKXABlkDYBDCQ5Hcg/2B1tpJ7a4NuNMCqd3XB5xbQwqpyK02AvcwulWtde3VtD5usTOeFCXRcMzSXbf+qbQPgVAdU2xfJO/ktUQIMxYkhPAI6VWgPOBsmSCrLElrAz8J6VuoKdYUHSAtMZzUsgcpQ5Mw0T4RFtcqj0lwLFfMeWeQ5YbhM71zIJTZDVt03+IaU7Rt8VIGzH4CnKrALxB7BcflT2XeAu4BjYb0okBYcDRfOFJxKzmldPwXVB/CmvAX70kHspAegq6wprKfiuQAAAABJRU5ErkJggg==" /><p className='tele'> Télécharger un fichier</p>
                  </button> </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}  >
                  <Grid item>    <p className='txt8-become'>Avez vous un lien? (Site Internet, Page Facebook,...)</p></Grid>
                  <Grid item>  <OutlinedInput className='inpt-becom' placeholder="Lien" /> </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}  >
                  <Grid item>    <p className='txt8-become'>Vous pouvez fournir plus de détails ci-dessous.</p></Grid>
                  <Grid item> <OutlinedInput className='inpu-conn2' placeholder="Message" multiline rows={5} maxRows={80} /></Grid>
                </Grid>
              </Grid>
              <Grid item>  <button className='bntcom'>
                <div className='textbntpac'>Envoyer une demande</div></button>  </Grid>


            </Grid>

          </div>
        </Grid>
      </Grid>


      <Grid item>
        <div className='butt'>
          <div className='row32'>
            <p className='Coordonnées'> Coordonnées et assistance</p>
            <div> <Cartcontact /></div>
            <p>
              <button className='bntn1-bec' >
                <div className='textbntConnexionn'>Contactez-nous</div></button>
            </p>

          </div>
        </div>
      </Grid>

    </Grid>

  )
}

export default Become_a_Partner
