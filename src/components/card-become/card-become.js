import './Card_become.css'
import { Grid } from '@mui/material'
import React, {useState } from 'react'
const Card_become = () => {
  const [Silver,setSilver] = useState('colod');
  const [Bronze,setBronze] = useState('colo');
  const [Gold,setGold] = useState('colo');
  const [bnt0,setbnt0] = useState('bntcartb');
  const [bnt1,setbnt1] = useState('bntcartb0');
  const [bnt2,setbnt2] = useState('bntcartb');

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
const col=(nomcart)=>{

  if(nomcart=="Gold")
  {
    setbnt0("bntcartb0")
    setbnt1("bntcartb")
    setbnt2("bntcartb")
    setGold("colod")
    setSilver("colo")
    setBronze("colo")
  }
  if(nomcart=="Silver")
  { 
    setbnt0("bntcartb")
  setbnt1("bntcartb0")
  setbnt2("bntcartb")
    setSilver("colod")
    setGold("colo")
    setBronze("colo")
  }
  if(nomcart=="Bronze"){
    setbnt0("bntcartb")
    setbnt1("bntcartb")
    setbnt2("bntcartb0")
    setSilver("colo")
    setGold("colo")
    setBronze("colod")
  }
}
  return (
   <div>
    
    <Grid container spacing={8}>

    {card.map((obj) => (
          <>
      
            {obj.name=="Silver"?
            <Grid item>
     
            <div  className={Silver}>
            <Grid container  direction="column" spacing={3.7}>
            <Grid item> <div className='cat1'> {obj.name} </div> </Grid>
            <Grid item> <div> <p  className='dt1' >{obj.prix}<span className='an'> /an</span></p></div>  </Grid>
            <Grid item> <button  className={bnt1} onClick={()=>{col(card[1].name)}}>
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

{obj.name=="Bronze"?<>
<div className={Bronze}>
  
  
  <Grid container  direction="column" spacing={3.7}>
       <Grid item> <div className='cat'> {obj.name} </div> </Grid>
       <Grid item> <div> <p  className='dt1'  style={{color: '#222222'}}>{obj.prix}<span className='an'> /an</span></p></div>  </Grid>
       <Grid item> <button className={bnt2}   onClick={()=>{col(card[0].name)}}>
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
  <div className='row4-car'><i className="fa fa-check-circle k1"></i><p className='disc'>Participation aux foires</p></div>  </Grid>
  <Grid item>
  <div className='row4-car'><i className="fa fa-check-circle k1 "></i><p className='disc'>Achat groupé</p></div>  </Grid>
  <Grid item>
  <div className='row4-car'><i className="fa fa-check-circle k1"></i><p className='disc'>Conventions personnalisées</p></div>  </Grid>
     </Grid>
     </Grid>
     </Grid>
    </div>
  
  
  
  </>:<>
  
  <div className={Gold}>
  
  
<Grid container  direction="column" spacing={3.7}>
     <Grid item> <div className='cat'> {obj.name} </div> </Grid>
     <Grid item> <div> <p  className='dt1'  style={{color: '#222222'}}>{obj.prix}<span className='an'> /an</span></p></div>  </Grid>
     <Grid item> <button className={bnt0}  onClick={()=>{col(card[2].name)}}>
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
<div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt0-catb'>Participation aux foires</p></div>  </Grid>
<Grid item>
<div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt0-catb'>Achat groupé</p></div>  </Grid>
<Grid item>
<div className='row4-car'><i className="fa fa-check-circle "></i><p className='txt0-catb'>Conventions personnalisées</p></div>  </Grid>
   </Grid>
   </Grid>
   </Grid>
  </div>
  
  </>}
     

          </Grid>
          
          } 
      
      </>

          ))}
   
   
    </Grid>

 
  </div>
  
  )
}

export default Card_become
