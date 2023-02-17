import React, { useState }  from 'react'
import './password.css'

import Imge from "../../assest/image1.png"
import { TextField, Grid, Button } from '@mui/material'
import Rcuperer1 from '../../components/Récupérer password 1/Récupérer'
import Rcuperer2 from '../../components/Récupérer password 2/Récupérer2'
import Rcuperer3 from '../../components/Récupérer password 3/Récupérer3'
const Password = () => {
  const [change, setchange] = useState("Rcuperer1");
const Changepage=()=>{
  switch(change){
    case 'Rcuperer1':
      return <Rcuperer1 onClick={()=>{setchange("Rcuperer2")}} />
     
  case 'Rcuperer2':
      return <Rcuperer2 onClick={()=>{setchange("Rcuperer3")}}/>
      
  case 'Rcuperer3':
      return <Rcuperer3/>

  }

}
  return (
    <div className='password'>
       <Grid container spacing={8} >
        <Grid item  >
          <img className='im' src={Imge} alt="icon" />
        </Grid >
        <Grid item>
        <Changepage />
        </Grid>
        </Grid>
    </div>
  )
}

export default Password
