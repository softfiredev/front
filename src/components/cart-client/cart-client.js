import React from 'react'
import './cart-client.css'
import { Grid } from '@mui/material'
import avt1 from '../../assets/avt1.png'
import avt2 from '../../assets/avt2.png'
import avt3 from '../../assets/avt3.png'
import Cart from './cart/cart'

const Cart_client = () => {

  const tab = [
    { name: "Carter Donin", des: "“Maktba.tn a révolutionné la façon dont je trouve des fournitures scolaires et de bureau pour mon entreprise. La plateforme est facile à utiliser et efficace, ce qui me permet de gagner du temps et de l'argent.“", img: avt1 },
    { name: "Ryan Aminoff", des: "“En tant que professeur, j'adore utiliser Maktba.tn pour trouver des jouets éducatifs et des livres d'occasion pour ma classe. La plateforme m'a permis de donner à mes élèves de manière durable.“", img: avt2 },
    { name: "Zain Press", des: "Le système d'échange numérique de Maktba.tn est un véritable changement pour les entreprises cherchant à réduire les déchets et à augmenter la durabilité. Je le recommande vivement à tout professionnel à la recherche de fournitures scolaires et de bureau.", img: avt3 },
  ]
  return (
    <Grid item>
      <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={7}   >
        <Grid item>
          <p className='txt9-about'>Que disent les gens à notre propos?</p></Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
   
            {tab.map((obj) =>
              <>
               <Cart name={obj.name} des={obj.des} img={obj.img}/>

               </>
            )}
              
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Cart_client
