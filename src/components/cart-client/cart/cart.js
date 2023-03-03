import React from 'react'
import { Grid } from '@mui/material'
import './cart.css'

const cart = (props) => {
    console.log(props)
  return (
           <Grid item>
                <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
                  <Grid item>
                    <img src={props.img} className='img-avt' />
                  </Grid>
                  <Grid item>
                    <p className='txt10-about'>
                      {props.des}
                    </p>
                  </Grid>
                </Grid>
                <Grid item><p className='txt11-about'>{props.name}</p> </Grid>

              </Grid>
  
  )
}

export default cart
