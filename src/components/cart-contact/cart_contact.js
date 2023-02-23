import React from 'react'
import { Location, ArrowRight2, Call, Sms } from 'iconsax-react';
import { Grid } from '@mui/material'

const Cart_contact = () => {
  const data = [
    {
      icon: <Location className='local' size="32" color="#222222" variant="Bold" />, name: 'Adresse', addr: '122 Rue de Makthar, Monastir',
      ero: 'Emplacement'
    },
    {
      icon: <Call size="32" className='local' color="#222222" variant="Bold" />, name: 'Téléphone', addr: '(+216)20 222 222',
      ero: 'Appelez-nous'
    },
    {
      icon: <Sms className='local' size="32" color="#222222" variant="Bold" />, name: 'E-mail', addr: 'Contact@maktba.com',
      ero: 'Entrer en contact'
    },
  ];


  return (
    <>
      <Grid item >
        <div className='ex'>

      {data.map((obj) => (
            <Grid item  >

              <div className='box'>
                <div className='contun_box'>
                  <br />
                  <Grid item > <p className='icon-cart'>{obj.icon}</p> </Grid>
                  <Grid item  >
                    <p className='adr_con'>{obj.name}</p>
                  </Grid>
                  <Grid item >
                    <p className='txt3'>{obj.addr}</p>
                  </Grid>
                  <Grid item >
                    <p className='txt4'>{obj.ero}</p><p className='arrow'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone" /></p>
                  </Grid>
                </div>
              </div>
            </Grid>


          ))}
  
    
        </div>
      </Grid>
    </>
  )
}

export default Cart_contact
