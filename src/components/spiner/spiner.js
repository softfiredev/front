import React from 'react'
import './spiner.css'
import Logo from '../../assest/logo.png'
const spiner = () => {
  return (
    <div className='esa'>
        <div className=' spiner'>

        <div className="lds-dual-ring">        <img src={Logo} className="img-spi"/>    </div>
    </div>

    
    </div>
  )
}

export default spiner
