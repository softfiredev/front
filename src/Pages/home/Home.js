import React from 'react'
import './Home.css'
import { Grid } from '@mui/material'
import { Headphone,TruckFast,TicketDiscount,ShieldTick,ShoppingCart,Lovely,SearchNormal,Profile2User,FavoriteChart,Shop} from 'iconsax-react';
import img1 from '../../assets/img1-home.png'
import img2 from '../../assets/img2-home.png'
import img3 from '../../assets/img3-home.png'
import img4 from '../../assets/img4-home.png'
import img5 from '../../assets/img5-home.png'
import img6 from '../../assets/img6-home.png'
import img7 from '../../assets/img7-home.png'
import imgp1 from '../../assets/imgp1.png'
import imgp2 from '../../assets/imgp2.png'
import imgp3 from '../../assets/imgp3.png'
import imgp4 from '../../assets/imgp4.png'
import imgp5 from '../../assets/imgp5.png'
import imgp6 from '../../assets/imgp.png'
import imgp7 from '../../assets/imgp8.png'
import Card from "../../components/card-produit/Card";

import Cartclient from '../../components/cartclient-home/Cartclient';
import { InputGroup } from 'reactstrap';
import Cart_client from '../../components/cart-client/cart-client';
import Cart_contact from '../../components/cart-contact/cart_contact';
import Boxabout from '../../components/box-about/Boxabout';
const Home = () => {
  const tab=[{icon: <Headphone size="22" color="#222222" variant="Bold"/>,desc:"24/7 Support"}
  ,
  {icon:<TruckFast size="22" color="#222222" variant="Bold"/>,desc:"Livraison express"}
  ,  {icon: <TicketDiscount size="22" color="#222222" variant="Bold"/>,desc:"Prix exclusif"}
  ,{icon: <ShieldTick size="22" color="#222222" variant="Bold"/>,desc:"Paiement sécurisé"}
]
const prod = [

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
const cat=[{img:img1,nom:"Scolaire"},
{img:img2,nom:"Para-scolaires"},
{img:img3,nom:"Outils informatiques"},
{img:img4,nom:"Divers"},
{img:img5,nom:"Jeux educatifs"},]

const clients=[{nom:"Cooper Ekstrom Bothman",des:"J'ai été agréablement surprise par la qualité de la peinture Gouache pour les projets scolaires de mon fils."}]


  return (
    <div>
      <div className="group-home ">
        <Grid          container          direction="column"          justifyContent="center"          alignItems="center"          gap="3em"
        >
   


    

          <Grid item>
            <div className="home">
              <div className="home-cont">
                <Grid container direction="column" spacing={6}>
                  <Grid item>
                    <p className="txt1-home">
                      L'univers de fournitures scolaires
                    </p>
                  </Grid>
                  <Grid item>
                    <p className="txt2-home">
                      Découvrez ce qui peut tenir dans votre trousse !
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
                        <div className="box2-home">
                          {tab.map((obj) => (
                            <div>
                              <div className="col-home">
                                <div className="circule">
                                  <div className="cont-circule">
                                    {" "}
                                    {obj.icon}
                                  </div>
                                </div>
                                <p className="txt3-home">{obj.desc}</p>
                                <p className="txt4-home">Contactez-nous</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
    
        </Grid>
        <div className="brr-home"></div>
        <div className='grp3-home'>
        <Grid item>   
        <div >
<div className='col3-hom' >
  <div > <p className='txt5-home'>Catégories</p>    </div>
  <div >   <div className='row2-hom'> 
   
  {cat.map((obj) =>
         <div > <div className='col4-hom'><img src={obj.img} className='img-home'/> <div><p className='txt8-home'>{obj.nom}</p></div> </div> </div>

            )}

  </div>  
  
  </div>
</div>


   </div>  
        </Grid>

          <Grid item>
            <div>
              <div className="col3-hom">
                <div>
                  {" "}
                  <p className="txt5-home">Actualités</p>{" "}
                </div>
                <div>
                  <div className="row3-hom">
                    <div>
                      <img src={img6} className="img2-home" />
                    </div>

    <div > 
          <img src={img7} className='img2-home'/> 
    </div>



  </div>  
  
  
  </div>
</div>


   </div>  
        </Grid>
        <Grid item>   
        <div >
<div className='col3-hom' >
  

  <div>  <div > <p className='txt5-home'>Equipez-vous d'indispensables</p>    </div></div>
  <div className='row2-hom'>
    
  {prod.map((obj) => (
           
           <Grid item>
             <Card
               prix={obj.prix}
               nom={obj.nom}
               noml={obj.noml}
               id={obj.id}
             />
           </Grid>
     
       ))}

  </div>

</div>
   </div>  


        </Grid>
        <Grid item>   
        <div >
<div className='col3-hom' >
  

  <div>  <div > <p className='txt5-home'>Equipez-vous d'indispensables</p>    </div></div>
  <div className='row2-hom'>
    
  {prod.map((obj) => (
           
           <Grid item>
             <Card
               prix={obj.prix}
               nom={obj.nom}
               noml={obj.noml}
               id={obj.id}
             />
           </Grid>
     
       ))}

  </div>

</div>
   </div>  


        </Grid>


        <Grid item>  
        <div className='bg2-home'>   
          
          <div><p className='txt10-home'>Promotions</p></div>
          <div><p className='txt11-home'>Découvrez toutes les promotions</p></div>
            <div><button className='bnt10-home'><p className='txt12-home'>Je découvre</p></button></div>
            </div>

        
        
        </Grid>

        <Grid item>  
        <div className='col3-hom' >
  

  <div>  <div > <p className='txt5-home'>Nos clients continuent de parler!</p>    </div></div>
  <Cartclient prixprod={prod[0].prix} noml={prod[0].noml} nomprod={prod[0].nom} nomclinet={clients[0].nom} descriptionclient={clients[0].des}/>

</div>
        
        
        </Grid>

        <Grid item>  
        <div className='col3-hom' >
  

      <div>  <div > <p className='txt5-home'>        Les marques fournitures scolaires</p>    </div></div>
           <div className='rowimg0-home'>
         <div><img src={imgp1}/></div>
         <div><img src={imgp2}/></div>
         <div><img src={imgp3}/></div>
         <div><img src={imgp4}/></div>
         <div><img src={imgp5}/></div>
         <div><img src={imgp6}/></div>

           </div>
       </div>
        
        
        </Grid>
        <Grid item>  
        <div className='rowimg-home' >
  

      <div className='col3-hom' >  
        <div >
         <p className='txt54-home'>  
      Vous êtes intéressé par un partenariat avec notre plateforme?</p>   
       </div>
       <div >
         <p className='txt56-home'>  
         En savoir plus sur nos opportunités de partenariat.</p>   
       </div>
       <div><button className='bnt6-home'><p className='txtbnt3-home'>Devenier partenaire</p></button>  </div>
       </div>
           <div >
            <img src={imgp7}/>
           </div>
       </div>
        
        
        </Grid>
   <Grid item>
   <div className='col3-hom' >

  <div>  <div > <p className='txt5-home'>Pourquoi nous choisir?</p>    </div></div>
  <div>  <div > <p className='txt5home'>Les clients ont besoin d’un service de livraison rapide,fiable et sûr. Et ainsi nous fournissons un service dequalité, des livraisons précises et rapides.</p>    </div></div>
<div>

<div className='row3-hom'>

  <div>
        <div className='col4-hom'>
      <div><ShoppingCart size="32" color="#E9B949" variant="Bold"/></div>
      <div><p className='txtcarda-home0'>Achats</p></div>
      <div><p className='txtcarda-home1'>Livraison rapide et fiable pour vos achats en ligne ou en magasin, pour vous faire économiser du temps</p></div>
      </div>
  </div>

  <div>
        <div className='col4-hom'>
      <div><Lovely size="32" color="#E9B949" variant="Bold"/></div>
      <div><p className='txtcarda-home0'>Dons</p></div>
      <div><p className='txtcarda-home1'>Livraison précise et rapide pour vos dons caritatifs, pour une contribution optimale</p></div>
      </div>
  </div>
  
  <div>
        <div className='col4-hom'>
      <div><SearchNormal size="32" color="#E9B949" variant="Bold"/></div>
      <div><p className='txtcarda-home0'>Visibilité</p></div>
      <div><p className='txtcarda-home1'>Améliorez la visibilité de votre entreprise avec notre service de livraison fiable et rapide</p></div>
      </div>
  </div>
      
  </div>
  
  
  </div>

  <div>

<div className='row3-hom'>

  <div>
        <div className='col4-hom'>
      <div><Profile2User size="32" color="#E9B949" variant="Bold"/></div>
      <div><p className='txtcarda-home0'>Collaboration</p></div>
      <div><p className='txtcarda-home1'> Nous collaborons avec d'autres entreprises pour répondre aux besoins de livraison de leurs clients</p></div>
      </div>
  </div>

  <div>
        <div className='col4-hom'>
      <div><Shop size="32" color="#E9B949" variant="Bold"/></div>
      <div><p className='txtcarda-home0'>Appartenance</p></div>
      <div><p className='txtcarda-home1'>Rejoignez notre communauté d'utilisateurs satisfaits pour un service de livraison personnalisé et fiable</p></div>
      </div>
  </div>
  
  <div>
        <div className='col4-hom'>
      <div><FavoriteChart size="32" color="#E9B949" variant="Bold"/></div>
      <div><p className='txtcarda-home0'>Optimisation</p></div>
      <div><p className='txtcarda-home1'>Livraison précise et rapide avec des options flexibles pour répondre à vos besoins</p></div>
      </div>
  </div>
      
  </div>
  
  
  </div>

  </div>
   </Grid>
   <div className="brr-home"></div>

   <Grid item>
   <div className='col3-hom' >
   <div>  <div > <p className='txst5-home'>   Voyez nos témoignages clients</p>    </div></div>
<Cart_client/>
   </div>
   </Grid>


   <Grid item>
   <div className='col3-hom' >
   <div>  <div > <p className='txst504-home'>   Coordonnées et assistance</p>    </div></div>
<Cart_contact/>
<div> <button className='bntcartcon-home'><p className='txtbntcartcon-home'>Contactez-nous</p></button></div>
   </div>
   </Grid>
   <Grid item>
    <div className='borderfin-home'>
<Boxabout/>
    </div>
   </Grid>
        </div>
      </Grid>
    </div>    </div>
  );
};

export default Home;
