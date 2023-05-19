import React from 'react'
import './Points.css'

import Transformer_points from './composont-Points/Transformer_points/Transformer_points';
import Transformer_points1 from './composont-Points/Transformer_points1/Transformer_points1';
import Transformer_points2 from './composont-Points/Transformer_points2/Transformer_points2';
import Transformer_points3 from './composont-Points/Transformer_points3/Transformer_points3';

const Points = () => {
  const [change , setchange] =React.useState("Transformer_points");

  const Changepage=()=>{
    switch(change){
  
    case 'Transformer_points':
        return <Transformer_points  onClick={()=>{setchange("Transformer_points1"); }}/>
    case 'Transformer_points1':
        return   <Transformer_points1  onRetourner={()=>{setchange("Transformer_points"); }} onClick={()=>{setchange("Transformer_points2"); }}  />
    case 'Transformer_points2':
        return   <Transformer_points2 onRetourner={()=>{setchange("Transformer_points1"); }} onClick={()=>{setchange("Transformer_points3"); }}  />
    case 'Transformer_points3':
        return   <Transformer_points3  onRetourner={()=>{setchange("Transformer_points2"); }}onClick={()=>{setchange("Transformer_points"); }}  />
    default :
        break;
    }
  
  }
  return (
 
       <div className='poi'>

      <Changepage/>

       </div>
  )
}

export default Points
