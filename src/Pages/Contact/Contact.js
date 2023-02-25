import React from 'react'
import { Grid } from '@mui/material'
import './Contact.css'
import { OutlinedInput } from '@mui/material';
import Cartcontact from '../../components/cart-contact/cart_contact';
import { Link } from 'react-router-dom';
import Con2 from "../../assest/con2.png"
import Spiner from '../../components/spiner/spiner';
import { useEffect, useState } from 'react'
const Contact = () => {
  const [loding, setloding] = useState(true);
  useEffect(()=>{
    setloding(true)
    setTimeout(()=>{
      setloding(false)
    },1000)
      
   
  },[])
  return (

    <div>
    {loding?<>
  <Spiner/> 
    </>
   :<>
     <div>
      <div className='contact'>
        
        <div className='grp1' >
        
            <p className='txt1'> Contactez-nous</p><br />
      
          
            <p className='txt2'>Entrez en contact avec notre équipe. Nous serions ravis de vous donner un coup de main </p>
            
         
             <Cartcontact/>
        </div>

      </div>

      <div className='group2-con'>

        <Grid container spacing={5.5} >
          <Grid item >  <img src={Con2}className="imgcon" />
            <span><p className='txt6-con'>Suivez-nous sur:</p></span>
            
          
            <div className='icon-con2'>
        <Link to="#" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nO3TsQ3CMBBA0RcxQSpqZqBniEzAVrTswAZMQZOWEuoU6BCtJZCCsA3CX7r6SXc2rS+vwxZHXHHDBSPWOeE94slscqHDCzQrfKgFnxNoh16BpgReKlQk09WCsxUzZ1UDnrCoAZ8+hc6FH3/89x9XWoOLFe3GpYq26lLF36265Z3ugcmLNVEqKJcAAAAASUVORK5CYII=" className='fa fa-facebook-f'/></Link>
        <Link to="#"><img className='fa fa-twitter' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nOXUMUscURQF4C+RVEmjhSAJimBlF2xESZNAVLBYRCxEbLWxsUkhEdMIKdKkSSBN0vgDtLBKCnsLLdxCm+gKNhFEgi5u3LAwA8sww7xhp0oO3GJ495xz5973Lv8KHhbMf4INHKOOGj7hWVvOMPrijw94GSjegwM0U+IX3uE79vAgJp3hGpMBBlsZ4u1RxRQqMekmOmhgHY8yxHvxJ8DgDufoj4nVRMIRZtGVMHgVIB7zB9qJaxmJNXzEDIYwEWjwNvnrj7EfSG4GxHLS4ATb0QzKMKgkDX6UWH0z2f8WxnFfkng1636/KcnkfZZB6+5P47AD8Vs8zTLoxlWH1X+Wg6UO2vQzKjIXC9FuKiLewIsQ8fZ5LOJ3gHg9WivBGMHXaGE1c6I1s9d5gmP4gl1cFGjLTtqDysIgNnGaI3qJbxgt0pI0szmsRI9vFfN4nrK+/wP8BZuBFXDRPn1vAAAAAElFTkSuQmCC"/></Link>

            <Link to="#" ><img  className="fa fa-instagram"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO2WwU7CQBCGv7t4A05y5ih6EDH6Dkp8IJEnUOQhMCQ8iehD6E1NWz3IQTEb/yakobutmRoP/Mkkzc7MfpnJdLKw0T9QExgC98A7sCxoLnau3EZZ6DmQlIDlWQz0y0C/DKCpfRaBN40qzVoUavvQCHQEHGfOBj7wgxHYQU8yZ3MfONTmD+AK6AJbMvc9AhaB3MQH9iU+Arue3I5ifHfkyldpCm0BU1XgbAa05dsLVJ6rvATX3hT6ssb/Kp/TjSX4QP6pJ+ZWMYeW4FqB4XNbymn7r8FRFeCu/DNPzEQxPUvwtfxtDVLW/wzsKGZs/Tt1FNPSIMWyyQp03/p3Wmo5pPB1ctCnwB2/XpkLrceeBq6m73GBlRnnY39eG8uK7M4HvqwQfOEDN9QSa2gE1Amor+eKFdTddRqCrsIjo0rPikJT1fVccUPxVgKWKGdQpL0bUbW+AcdI0V4wAXsCAAAAAElFTkSuQmCC"/></Link>
            <Link to="#" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO2WvQ4BQRSFvxU6P4VG5wU0KioqiQ3eQu81VJ7DA+h0RFTeQLUrohSFiLArktlkTGOLmVk/e5JT3HPvzZfMTDGQ6h/VA3ZAqMk+4MYB+xqhkb044NCQ30pdOAJL4GwTfAKqIq8DN1vgtdLzbIEvQEPkAyCwecd3YJ/E4xoLT0R9kLIZsAVGQB8YAitdYEfkeVFvpNkmUFL2M8DcNDhSmVd1TIMdYCHyqZRXTINr0twVyIo8ZxrcUmYLUi8wCW4rs8UUzDcedajJnwv2k/r6uJrhT2g3DjjVb+kBRsV7Hz5Qag0AAAAASUVORK5CYII="  className='fa fa-linkedin-in'/></Link>
</div>


          </Grid>
          <Grid item >
            <div className='group-con3'>
              <Grid container direction="column" spacing={2.5}>

                <Grid item > <p className='con-nous'>Contactez-nous</p> </Grid>
                <Grid item ><OutlinedInput className='inpu-con' placeholder="Votre nom" /> </Grid>
                <Grid item ><OutlinedInput className='inpu-con' placeholder="Email" /> </Grid>
                <Grid item ><OutlinedInput className='inpu-con' placeholder="Sujet" /> </Grid><br/>
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
   </>
   }
  
    </div>
  )
}

export default Contact
