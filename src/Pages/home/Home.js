import React from 'react'
import './Home.css'
import { Grid } from '@mui/material'
import { Headphone,TruckFast,TicketDiscount,ShieldTick} from 'iconsax-react';
import img1 from '../../assets/img1-home.png'
import img2 from '../../assets/img2-home.png'
import img3 from '../../assets/img3-home.png'
import img4 from '../../assets/img4-home.png'
import img5 from '../../assets/img5-home.png'
import img6 from '../../assets/img6-home.png'
import img7 from '../../assets/img7-home.png'
import Card from "../../components/card-produit/Card";

import Cartclient from '../../components/cartclient-home/Cartclient';
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

</div>
        
        
        </Grid>

        </div>
      </Grid>
    </div>    </div>
  );
};

export default Home;
