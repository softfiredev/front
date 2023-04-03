import React from 'react'
import './Card_become.css'
import { Grid } from '@mui/material'

const Card_become = () => {
    const card=[
        {
            name:"Bronze",
            prix:'10 dt'
        },
        {
            name:"Silver",
            prix:'100 dt'
        },
        {
            name:"Gold",
            prix:'1000 dt'
        }
    ]
  return (
   <div>
    
    <Grid container spacing={8}>

    {card.map((obj) => (
          <>
      
            {obj.name=="Silver"?
            <Grid item>
     
            <div  className='colod'>
            <Grid container  direction="column" spacing={3.7}>
            <Grid item> <div className='cat1'> {obj.name} </div> </Grid>
            <Grid item> <div> <p  className='dt1'  style={{Color:"#222222"}}>{obj.prix}<span className='an'> /an</span></p></div>  </Grid>
            <Grid item> <button className='bntcartb0'>
          <div className='textbntpack0'>Choisir le pack</div></button><br/> </Grid>
          <Grid item>
          <Grid  container  direction="column"    alignItems="center"  spacing={0.7}>

<Grid item>
  <div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt1-catb'>Caisse en ligne</p></div>  </Grid>
  <Grid item>
    
     <div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt1-catb'>Livraison gratuit</p></div>  </Grid>
     <Grid item>
    <div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt1-catb'>Boutique personalisée</p></div>  </Grid>
    <Grid item>
   <div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt1-catb'> Assistance personnalisé</p></div>  </Grid>
   <Grid item>
  <div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt1-catb'>Participation aux foires</p></div>  </Grid>
  <Grid item>
 <div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt1-catb'>Achat groupé</p></div>  </Grid>
 <Grid item>
   <div className='row4-car'><i className="fa fa-check-circle k1"></i><p className='disc'>Conventions personnalisées</p></div>  </Grid>
          </Grid>
          </Grid>
          </Grid>
          </div>
            </Grid>
          :
          <Grid item>
<div className='colo'>
     <Grid container  direction="column" spacing={3.7}>
     <Grid item> <div className='cat'> {obj.name} </div> </Grid>
     <Grid item> <div> <p  className='dt1'  style={{color: '#222222'}}>{obj.prix}<span className='an'> /an</span></p></div>  </Grid>
     <Grid item> <button className='bntcartb1'>
   <div className='textbntpack'>Choisir le pack</div></button><br/> </Grid>
   <Grid item>
   <Grid  container  direction="column"    alignItems="center"  spacing={0.7}>

<Grid item>
<div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt0-catb'>Caisse en ligne</p></div>  </Grid>
<Grid item>

<div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt0-catb'>Livraison gratuit</p></div>  </Grid>
<Grid item>
<div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt0-catb'>Boutique personalisée</p></div>  </Grid>
<Grid item>
<div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt0-catb'> Assistance personnalisé</p></div>  </Grid>
<Grid item>
<div className='row4-car'>{obj.name=="Gold"?<><i className="fa fa-check-circle "></i><p className='txt0-catb'>Participation aux foires</p></>:<><i className="fa fa-check-circle k2"></i><p className='disc1'>Participation aux foires</p></>}</div>  </Grid>
<Grid item>
<div className='row4-car'>{obj.name=="Gold"?<><i className="fa fa-check-circle "></i><p className='txt0-catb'>Achat groupé</p></>:<><i className="fa fa-check-circle k2"></i><p className='disc1'>Achat groupé</p></>}</div>  </Grid>
<Grid item>
<div className='row4-car'>{obj.name=="Gold"?<><i className="fa fa-check-circle "></i><p className='txt0-catb'>Conventions personnalisées</p></>:<><i className="fa fa-check-circle k2"></i><p className='disc1'>Conventions personnalisées</p></>}</div>  </Grid>
   </Grid>
   </Grid>
   </Grid>
   </div>
          </Grid>
          
          } 
      
      </>

          ))}
   
   
    </Grid>

 
  </div>
  
  )
}

export default Card_become
