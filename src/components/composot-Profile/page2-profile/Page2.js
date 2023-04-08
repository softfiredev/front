import React from 'react'
import './Page2.css'
import { OutlinedInput} from '@mui/material'
import {CloseCircle,ShoppingCart } from 'iconsax-react';
import img1 from '../../../assets/prod2.png'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import img2 from '../../../assets/logom.png'
const Page2 = () => {
  const [value, setValue] = React.useState(4);
  return (
    <div className='favorie'>
      <div className='col1-favo'>
      <div><p className='txt1-favo'>Favoris</p></div>
         <div><OutlinedInput className='input-pro' placeholder='Nom de produit'/></div>

          <div className='row-favo'>
          <div><p className='txt2-favo'>Article</p></div>
          <div><p className='txt2-favo'>Total HT</p></div>
          </div>
<hr className='lin-favo'/>
<div className='row6-favo'>
    <div>
        <div className='row2-favo'>
            <div className='closebnt-favo'><CloseCircle size="22" color="#B1B1B1"/></div>
            <div ><img src={img1} className='img1-favo'/></div>
            <div className='col2-favo'>
              <div className='txt3-favo'><p>GOUACHE 9T METAL...</p></div>
              <div className='row4-favo'>
<div> <img src={img2} /></div>
<div> <Link to="/librairieProfile/"><p className='txtlink-favo'>Errahma Library</p></Link>  </div>
</div>
              <div className='stars-favo'>   <Rating name="read-only" value={value} readOnly defaultValue={2} size="small" className='stars' /></div>
            </div>
            </div>
    </div>
    <div className='row7-favo'>
    <div>  <p className='prix-favo'>174 dt</p>   </div>
    <div className='shop-favo'>  <div className='shopcont-favo'><ShoppingCart size="22" color="#222222" variant="Bold"/></div>   </div>    
    </div>
 
</div>
      </div>
      <hr className='lin-favo'/>
    </div>
  )
}

export default Page2
