import React, { useState } from 'react'
import './Profile.css'
import { LogoutCurve,Profile,Heart,Note,Notification } from 'iconsax-react';
import Page1 from "../../components/composot-Profile/page-profile/Page"
import Page2 from "../../components/composot-Profile/page2-profile/Page2"
const Profilee = () => {
  const [name, setname] = useState('page1');
  const [bnt1, setbnt1] = useState('bnt-pro');
  const [bnt2, setbnt2] = useState('bnt-pro2');
  const [bnt3, setbnt3] = useState('bnt-pro2');
  const [bnt4, setbnt4] = useState('bnt-pro2');
  const [bnt5, setbnt5] = useState('bnt-pro2');
  const tab=[{nom:"Profile",icon:<Profile size="20"/>,id:"1",},{},{}]
  const Pagee=()=>{
    if(name=="page1")
    {
      setbnt1('bnt-pro')
      setbnt2('bnt-pro2')
      setbnt3('bnt-pro2')
      setbnt4('bnt-pro2')
      setbnt5('bnt-pro2')
      return <Page1/>
    }
    if(name=='page2')
    {
      setbnt1('bnt-pro2')
      setbnt2('bnt-pro')
      setbnt3('bnt-pro2')
      setbnt4('bnt-pro2')
      setbnt5('bnt-pro2')
      return <Page2/>
    }
  }
  return (
    <div className='Profile'>
      <div className='col1-profile'>
      <div><p className='txt-profile1'>Bonjour, Amine!</p></div> 
<div className='row2-profile'>
<div>
<div  className='carts'>
<div><button className={bnt1} onClick={()=>{setname('page1')}}><div className='row1-profile'><Profile size="20"/><div className='txt0-icon'>Profile</div></div> </button> </div> 
 <div><button className={bnt2} onClick={()=>{setname('page2')}}><div className='row1-profile'><Heart size="20" /><div className='txt-icon'>Favoris</div></div>  </button> </div> 
 <div><button className={bnt3}><div className='row1-profile'><Note size="20" /><div className='txt-icon'>Commandes</div></div>  </button> </div> 
 <div><button className={bnt4}><div className='row1-profile'><Notification size="20" /><div className='txt-icon'>Mes avis</div></div> </button> </div> 
<div> <button className={bnt5}><div className='row1-profile'><LogoutCurve size="20" /><div className='txt-icon'>Déconnection</div></div> </button> </div> 

</div>

</div>


<Pagee/>
</div>
    </div>
    </div>
  )
}

export default Profilee
