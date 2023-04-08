import React from 'react'
import './Profile.css'
import { LogoutCurve,Profile,Heart,Note,Notification } from 'iconsax-react';
import Page1 from "../../components/composot-Profile/page-profile/Page"
import Page2 from "../../components/composot-Profile/page2-profile/Page2"
const Profilee = () => {
  return (
    <div className='Profile'>
      <div className='col1-profile'>
      <div><p className='txt-profile1'>Bonjour, Amine!</p></div> 
<div className='row2-profile'>
<div>
<div  className='carts'>
<div><button className='bnt-pro'><div className='row1-profile'><Profile size="20" color="#222222"/><div className='txt0-icon'>Profile</div></div> </button> </div> 
 <div><button className='bnt-pro2'><div className='row1-profile'><Heart size="20" color="#9E9E9E"/><div className='txt-icon'>Favoris</div></div>  </button> </div> 
 <div><button className='bnt-pro2'><div className='row1-profile'><Note size="20" color="#9E9E9E"/><div className='txt-icon'>Commandes</div></div>  </button> </div> 
 <div><button className='bnt-pro2'><div className='row1-profile'><Notification size="20" color="#9E9E9E"/><div className='txt-icon'>Mes avis</div></div> </button> </div> 
<div> <button className='bnt-pro2'><div className='row1-profile'><LogoutCurve size="20" color="#9E9E9E"/><div className='txt-icon'>Déconnection</div></div> </button> </div> 

</div>

</div>


<Page1/>
</div>
    </div>
    </div>
  )
}

export default Profilee
