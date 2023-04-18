import React from 'react'
import './Dachats.css'
const Dachats = () => {

    const tabdach=
    [
        { number:'25',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"100",date:"Expire le 21 avril 2023"   }
    ,
    { number:'250',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"300",date:"Expire le 21 avril 2023"   }
    ,{ number:'205',des:"Ce code promo vous offre 250% de remise sur les produits scolaire",pts:"200",date:"Expire le 21 avril 2023"   }
    ,{ number:'5',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"500" ,date:"Expire le 21 avril 2023"  }
    ,{ number:'50',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"400" ,date:"Expire le 21 avril 2023"  }
    
    ]
  return (
    <div className='Dachats'>
 

      {tabdach.map((obj) =>
     <div className='row-Dachats'>
<p className='txt1-Dachats'>{obj.number}%</p>
<p className='txt2-Dachats'>{obj.des}<br/>
<span className='date-Dachats'>{obj.date}</span>
</p>

<button className='bnt-Dachats'><p className='bnttxt-Dachats'>{obj.pts} pts</p></button>
</div>
            )}


    </div>
  )
}

export default Dachats
