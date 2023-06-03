import React from 'react'
import './cardlisteprod.css'
import prod4 from '../../../assets/prod4.png'
import {Eye,EyeSlash} from "iconsax-react";

const Cardlisteprod = (props) => {

  const [state, setState] = React.useState(true)


  return (
    <div className='prod-lst'>
      {props?.Role=="admin"?
      state?
        <div className='Eye' onClick={()=>{setState(false);props.setVisible(false)}}>
        <Eye size="22" color="#05400A"  variant="Bold"/>
        </div>
       :
       <div className='Eye2' onClick={()=>{setState(true);props.setVisible(true)}}>
       <EyeSlash size="22" color="#610404"  variant="Bold"/>
       </div>
      :
      ""
      }
    
      {props?.Role=="admin"?
         <img src={"http://127.0.0.1:8080/uploads/"+props.img} className='img-lst2' onClick={props.toggleDrawer('right', true,props.id)} />
      :
      <img src={"http://127.0.0.1:8080/uploads/"+props.img} className='img-lst' />
      }
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
