import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import Imge from "../../assest/logo.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Call,Location,Sms} from 'iconsax-react';

const Footer = () => {
  return (
    <div className='footer'>
    <section className="ft-main">
      <div className="ft-main-item">
        <div className="ft-logo"><Link to="#"><img src={Imge} alt="logo"/></Link></div><div className='es'></div>
        <p className='text1'>
        Maktaba.tn est une plateforme de commerce 
        électronique innovante reliant les réseaux de
         librairies, 
        fournisseurs, écoles et espaces
         étudiants en Tunisie, 
        offrant une solution
         tout-en-un pour tous leurs besoins.
        </p><br/>
        <div className='iconn'>
        <Link to="#" ><i class='fa fa-facebook-f'/></Link>
            <Link to="#"><i class='fa fa-twitter'/></Link>
            <Link to="#" ><i class='fa fa-instagram'/></Link>
            <Link to="#" ><LinkedInIcon class='f fa-linkedin-in'/></Link>
</div>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Liens Rapides</h2>
        <ul>
          <li><Link to="#">À propos</Link></li>
          <li><Link to="#">Shop</Link></li>
          <li><Link to="#">Devenir partenaire</Link></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Nos Catégories</h2>
        <ul>
          <li><Link to="#">Scolaire</Link></li>
          <li><Link to="#">Para-scolaires</Link></li>
          <li><Link to="#">Outils informatiques</Link></li>
          <li><Link to="#">Divers</Link></li>
          <li><Link to="#">Jeux educatifs</Link></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-cont">Contact</h2>
       
        <ul>
        <div className="controle"> 
        <li><br/>
      
            <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined"><Location size="28" color="#d9e3f0" variant="Bold"/></span>  </div>
  <div className="item8">
             122 Rue de Makthar
            </div>  
          </div>
          </li>
          <li><br/>
          <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined"><Call size="28" color="#d9e3f0" variant="Bold"
/></span>  </div>
  <div className="item8">
  (+216) 20 222 222
            </div>  
          </div>
          
          </li><br/>
          <li>

          <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined"><Sms size="28" color="#d9e3f0" variant="Bold"/></span>  </div>
  <div className="item8">
  contact@maktba.com
            </div>  
          </div>
          </li>

          </div>
        </ul>
      </div>
    </section>
    <hr className='line'/>
      <p className='Copyright'>Copyright © 2022 Maktaba.tn</p>
  </div>
 

  )
}

export default Footer
