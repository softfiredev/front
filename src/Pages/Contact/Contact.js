import React from 'react'
import { Grid } from '@mui/material'
import './Contact.css'
import { OutlinedInput } from '@mui/material';
import Cartcontact from '../../components/cart-contact/cart_contact';
import { Facebook } from '@material-ui/icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <div className='contact'>
        
        <Grid container direction="column" alignItems="center" >
          <Grid item >
            <p className='txt1'> Contactez-nous</p><br />
          </Grid>
          <Grid item >
            <p className='txt2'>Entrez en contact avec notre équipe. Nous <br />serions ravis de vous donner un coup de main </p>
            
          </Grid> 
             <Cartcontact/>
        </Grid>

      </div>

      <div className='group2-con'>

        <Grid container spacing={8} >
          <Grid item >  <div className="imgcon" />
            <span><p className='txt6-con'>Suivez-nous sur:</p></span>
            <p className='icon-con2'>      <div className='iconn'>
<Link to="#"  className='ic'><Facebook/></Link>
<Link to="#"  className='ic'><TwitterIcon/></Link>
<Link to="#"  className='ic'><InstagramIcon/></Link>
<Link to="#"  className='ic'><LinkedInIcon/></Link>
</div></p>
          </Grid>
          <Grid item >
            <div className='group-con3'>
              <Grid container direction="column" spacing={2}>

                <Grid item > <p className='con-nous'>Contactez-nous</p> </Grid>
                <Grid item ><OutlinedInput className='inpu-con' placeholder="Votre nom" /> </Grid>
                <Grid item ><OutlinedInput className='inpu-con' placeholder="Email" /> </Grid>
                <Grid item ><OutlinedInput className='inpu-con' placeholder="Sujet" /> </Grid>
                <Grid item ><OutlinedInput className='inpu-con2' placeholder="Message" multiline rows={5} maxRows={80} /> </Grid>
                <Grid item ><button className='bnt-con2'>
                  <div className='textbnt-con2'>Envoyer</div></button>
                </Grid>


              </Grid>


            </div>
          </Grid>
        </Grid>
      </div>
      <div></div>
    </div>
  )
}

export default Contact
