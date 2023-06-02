import React from 'react'
import './cardlisteprod.css'
import prod4 from '../../../assets/prod4.png'
const Cardlisteprod = (props) => {
  return (
    <div className='prod-lst'>
      <img src={prod4} className='img-lst' />
      <div>
        <p className='txt-lst'>#{props.id}</p>
        </div>
        <div>
        <p className='txt-lst2'>{props.titre}</p>
        </div>
    </div>
  )
}

export default Cardlisteprod
