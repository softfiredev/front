import React from 'react'
import './Not-found.css'
import img from '../../assets/Image.png'
import { ArrowLeft } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
const Notfound = (props) => {
    const nav =useNavigate()
  return (
    <div className='Notfound'>
<div className='col0-Notfound'>
<div className='col-Notfound '>
<div><p className='txt-Notfound'>Erreur 404</p></div>
<div><p className='txt2-Notfound'>Page non trouvée</p></div>
<div><p className='txt3-Notfound'>Désolé, la page que vous recherchez n'existe pas. Voici quelques liens utiles :</p></div>
<div className='row-Notfound'>

<button className='bnt-Notfound'onClick={()=>{nav(props?.url);nav(0)}} >
<ArrowLeft
 size="22"
/>
<div><p>Retourner</p></div>
</button>
<button className='bnt2-Notfound' onClick={()=>{nav("/home");nav(0)}}>Page d'accueil</button>


</div>

      </div>
</div>
      <div>
        <img src={img} className='img-notfond'/>
      </div>
    </div>
  )
}

export default Notfound
