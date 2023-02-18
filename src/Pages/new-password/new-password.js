import React, { useState }  from 'react'
import './new-password.css'

import Imge from "../../assest/image1.png"
import {Grid} from '@mui/material'
import Verify_email from '../../components/verify email/verify-email'
import Add_new_password from '../../components/add-new-password/add-new-password'
import Successful_password from '../../components/successful-password/successful-password'
const Password = () => {

const [change , setchange] = useState("verify-email");

const Changepage=()=>{

  switch(change){

  case 'verify-email':
      return <Verify_email onClick={()=>{setchange("add-new-password")}} />
     
  case 'add-new-password':
      return <Add_new_password onClick={()=>{setchange("successful-password")}}/>
      
  case 'successful-password':
      return <Successful_password />
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
