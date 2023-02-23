import React from 'react'
import './AboutUs.css' 
import img_pro from '../../assest/apropo1.jpg'
const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <div className='box-a1'>
        <div className='txt-a1'>
         <p className='propos'>À propos de nous</p>
         <p className='propos2'>Notre plateforme facilite la vente, l'échange et le don de fournitures scolaires, livres et jouets éducatifs pour tous.</p>
        <img src={img_pro} className="img-pro1"/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
