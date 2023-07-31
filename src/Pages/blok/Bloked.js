import React from 'react'
import './Bloked.css'
import img from '../../assets/Image.png'
import { ArrowLeft } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
const Notfound = (props) => {
    const nav =useNavigate()
  return (
    <div className='Notfound'>
<div className='col0-Notfound'>
<div className='col-Notfound '>

<div><p className='txt3-bloked '>Désolé, Votre compte a ete Bloke contacte Admin Maktba.tn </p></div>

      </div>
</div>
      <div>
        <img src={img} className='img-notfond'/>
      </div>
    </div>
  )
}

export default Notfound
