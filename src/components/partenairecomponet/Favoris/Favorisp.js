import React, { useEffect } from 'react'
import'./Favorisp.css'
import { InputAdornment, OutlinedInput } from '@mui/material'
import { SearchNormal1 } from 'iconsax-react'
import Cardlisteprod from '../../card-produit/cardlisteprod/cardlisteprod'
import axios from 'axios'
import { Base_url, Path } from '../../../config/Config'
const Favorisp = (props) => {
  const [all, setAll] = React.useState([]);
  const AllFavorisp = async () => {
    try {
      const response = await axios.get(Base_url + Path.getproduitFavorie + props?.user.id);
      setAll(response?.data?.produitFavorie);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    AllFavorisp()
  }, []);

 
 return (
    <div className='Favorisp'>
     <div><p className='txt1-Favorisp'>Mes Favoris</p></div>
     <div className='bloq-Favorisp'>
        <div className='row1-Favorisp'>
        <OutlinedInput
          className="input-Favorisp"
          placeholder={"Code, nom de partenaire"}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />

        <select className='select-Favorisp'>
            <option>Catégories</option>
        </select>
        <select className='select-Favorisp'>
            <option>Sous-catégories</option>
        </select>
        </div>

        <div className='grid-container01 '>
        {all?.map((obj) => (


<div class="grid-item"  ><Cardlisteprod id={obj?.id} titre={obj?.produitlabrairie?.titre} img={obj?.produitlabrairie?.imagelibrairies?.[0].name_Image} Role={'partiner'}/>  </div>

))}
        </div>

     </div>
    </div>
  )
}

export default Favorisp
