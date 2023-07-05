import React from 'react'
import './Avisp.css'
import { Rating } from '@mui/material'
import { Star1 } from 'iconsax-react'
import TabAvisp from './componet/TabAvisp'
const Avisp = () => {
  return (
    <div className='Avp'>
   
<div> <p className='txt-Avp'>
    Avis/Commentaires
 </p></div>
  
<div className='Box-Avp'>
<div className='row-Avp'>
<div className='col-Avp'>
    <div><p className='txt3-Avp'>Nombre total d'avis</p></div>
    <div><p className='txt2-Avp'>126</p></div>

</div>
<div className='col-Avp'>
    <div><p className='txt3-Avp'>Moyenne des avis</p></div>
    <div className='row2-Avp'>
        <div><p className='txt2-Avp'>4.0</p></div>
            <Rating
              style={{marginTop:"2%"}}
              name="read-only"
               value={2}
                readOnly
                 className="stars"
                  />
    </div>

</div>
<div className='co2-Avp'>
<div className='row2-Avp'>
<Star1 size="20" color="#F8E3A3" variant="Bold"/>
<div><p>5</p></div>
<progress value="55" max="50"/> 
</div>
<div className='row2-Avp'>
<Star1 size="20" color="#F8E3A3" variant="Bold"/>
<div><p>4</p></div>
<progress value="25" max="50"  className='prog1'/> 
</div>
<div className='row2-Avp'>
<Star1 size="20" color="#F8E3A3" variant="Bold"/>
<div><p>3</p></div>
<progress value="18" max="50"className='prog2'/> 
</div>
<div className='row2-Avp'>
<Star1 size="20" color="#F8E3A3" variant="Bold"/>
<div><p>2</p></div>
<progress value="10" max="50"className='prog3'/> 
</div>
<div className='row2-Avp'>
<Star1 size="20" color="#F8E3A3" variant="Bold"/>
<div><p>1</p></div>
<progress value="1" max="50"className='prog4'/> 
</div>
</div>
</div>
<div className='lin-Avp'/>

<TabAvisp/>

</div>


    </div>
  )
}

export default Avisp
