import React, { useState }  from 'react'
import './new-password.css'
import Imge from "../../assets/image1.png"
import {Grid} from '@mui/material'
import Addnewpassword from '../../components/add-new-password/add-new-password'
import Successfullpassword from '../../components/successful-password/Successful_password'
import { useAtoms } from '../../Store/globalState/global';
const Resetpassword = () => {

const [change , setchange] = useState("add-new-password");
const [globalState,snap]=useAtoms()
const Changepage=()=>{
  switch(change){

  case 'add-new-password':
      return <Addnewpassword onClick={()=>{setchange("successful-password"); }}/>
  case 'successful-password':
      return   <Successfullpassword  />
  default :
      break;
  }

}
  return (

   
   <div className='password'>
       <div className='passww' >
        <Grid item  >
          <img className='im' src={Imge} alt="icon" />
        </Grid >
        <Grid item>
        <Changepage />
        </Grid>
        </div>
    </div>
 

  )
}

export default Resetpassword