import * as React from 'react';
import './AboutUs.css'
import { OutlinedInput } from '@mui/material';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import img_pro from '../../assets/apropo1.png'
import img2_pro from '../../assets/about3.jpg'
import img3_pro from '../../assets/about4.jpg'
import P from '../../assets/point.png'
import img4_pro from '../../assets/about5.jpg'
import { Grid } from '@mui/material'
import Cart from '../../components/cart-client/cart-client'
import Imgt from '../../assets/tni.png'
import Cart_contact from '../../components/cart-contact/cart_contact'
const AboutUs = () => {
  const  settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slickNext: true,
    slickPrevious: true,
    swipe: true

  }

  return (
    <div className='about'>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={5} >

        <Grid item>
          <div className='box-about'>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} >
              <Grid item>  <p className='txt1-about'>À propos de nous </p>  </Grid>
              <Grid item> <p className='txt2-about'>


                Notre plateforme facilite la vente,
                l'échange et le don de fournitures scolaires, livres et jouets éducatifs pour tous.



              </p></Grid>

            </Grid>
          </div>
        </Grid>

        <Grid item>
          <div className='box-about2'>
            <Grid container direction="row" spacing={10} >
              <Grid item>
                <Grid container direction="column" spacing={4} >
                  <Grid item>
                    <div className='txt3-about'> Avantages d'utiliser “Maktaba”</div>
                  </Grid>
                  <Grid item>
                    <p className='txt4-about'>

                      <ul>
                        <li>  Accès simplifié à des fournitures scolaires, des livres et des jouets éducatifs abordables et de haute qualité.</li>
                        <li>Plateforme en ligne pratique pour les particuliers et les professionnels pour vendre, échanger ou donner leurs articles.
                        </li>
                        <li>Option écologique pour réduire les déchets en prolongeant la durée de vie des produits grâce à la réutilisation et au don.
                        </li>
                      </ul>


                    </p>
                  </Grid>

                  <Grid item>
                    <img src={img3_pro} className="img-about2" />
                  </Grid>

                  <Grid item>
                    <div className='txt5-about'> Notre engagement envers la durabilité</div>
                  </Grid>

                  <Grid item >

                    <p className='txt6-about'>

                      <ul>
                        <li>  Encourager la réutilisation des fournitures scolaires, des livres et des jouets éducatifs pour réduire les déchets et l'empreinte carbone.
                        </li>
                        <li>Partenariat avec des organisations qui promeuvent l'éducation et la durabilité pour soutenir notre mission.

                        </li>
                        <li>Chercher constamment des moyens d'améliorer et de réduire notre impact sur l'environnement.</li>
                      </ul>
                    </p>


                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column" spacing={10} >

                  <Grid item> <img src={img4_pro} className="img-about3" />  </Grid>
                  <Grid item> <p className='txt7-about'> Comment fonctionne “Maktaba” :</p>
                    <Grid item><p className='txt8-about'>
                      Notre plateforme aide les fournisseurs à optimiser leurs activités et permet aux acheteurs de rationaliser la gestion marketing et logistique. Grâce à la gestion des données en temps réel et à l'information alimentée par l'IA, la prise de décision est simplifiée sur un marché dynamique, améliorant ainsi la gestion des données pour toutes les parties prenantes.<br /> <br />Maktaba encourage l'engagement communautaire en fournissant aux individus des outils pour lancer et gérer leurs propres initiatives culturelles, sociales ou économiques grâce aux bibliothèques numériques. Chaque bibliothèque devient un projet, permettant à chacun de gérer ses propres initiatives.</p> </Grid>
                 
                    <Grid item>         <img src={img2_pro} className="img-about4" /> </Grid>
                         <img className="img-aboutp" src={P} />
   
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid><br /><br />
        <Cart />

        <Grid item> <p className='txt12-about'>Notre Partenariats et collaborations</p></Grid>
        <Grid item>
<div className='e-point'>
          <Grid container direction="row" spacing={0} >
          <Grid container direction="row" spacing={0} >
          <Box sx={{ maxWidth: { xs:5000, sm: 500 }}}>
          <Slider {...settings}>
 
        <img src={Imgt} alt='s'className='img-tun' />
            
        <img src={Imgt} alt='s'className='img-tun'  />
                <img src={Imgt}  alt='s'  className='img-tun'  />
</Slider>
    </Box>
    </Grid>
    </Grid>
    </div>
   
 

        </Grid>

        <Grid item>
          <p className='txt13-about'>Coordonnées et assistance </p>  <br /> <br />
          <Cart_contact /><br /> <br />
          <button className='bntn-about' >
            <div className='textbntContactez-nous'>Contactez-nous</div></button>
        </Grid>

        <Grid item><div className='box3-about'>
          <Grid container direction="column" justifyContent="center" alignItems="center" spacing={8} >
            <Grid item> <p className='txt14-about'>Rejoignez notre newsletter pour des offres exclusives et des nouveautés.</p> </Grid>

            <Grid item>

              <Grid container direction="row" spacing={2} >
                <Grid item>  <OutlinedInput className='inpu-about' placeholder="Email" />     </Grid>

                <Grid item> <button className='bnt2-about'> <p className='txt-bntabout'>Abonnement</p></button>  </Grid>
              </Grid>
            </Grid>
            <img className="img-aboutp2" src={P} />
          </Grid>
        </div>     </Grid>

      </Grid>
    </div>
  )
}

export default AboutUs
