import React, { useState }  from 'react'
import './new-password.css'
import Imge from "../../assest/image1.png"
import {Grid} from '@mui/material'
import Verifyemail from '../../components/verify email/verify-email'
import Addnewpassword from '../../components/add-new-password/add-new-password'
import Successfullpassword from '../../components/successful-password/Successful_password'
const Password = () => {

const [change , setchange] = useState("verify-email");

const Changepage=()=>{

  switch(change){

  case 'verify-email':
      return <Verifyemail onClick={()=>{setchange("add-new-password")}} />
     
  case 'add-new-password':
      return <Addnewpassword onClick={()=>{setchange("successful-password")}}/>
      
  case 'successful-password':
      return <Successfullpassword />
  default :
      break;
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
