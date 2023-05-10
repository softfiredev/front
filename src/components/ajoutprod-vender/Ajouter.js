import React, { useEffect, useState } from "react";
import "./Ajouter.css"
import {Box,Import,TickCircle,Trash,InfoCircle,CloseCircle} from "iconsax-react";
import { OutlinedInput } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const Ajouter = () => {
   const [img,setImage]=useState()
    const [imgsize,setImgsize]=useState()
    const [realimgsize,setRealimgsize]=useState()
    const [imgname,setImgmane]=useState()
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            const size=event.target.files[0].size/ (1024 * 1024) ;
            let g=(size.toString());
            setRealimgsize(size)
            setImgsize(g.slice(0,4));
            const name=event.target.files[0].name
            setImgmane(name.slice(0,11));
        }
      }
const sup=()=>{
    setImage(undefined)
}
  return (
    <div className='box-ajout'>
<div className='col-ajout'>
    <div className='cube-ajout'><div className='contbox-ajout'><Box size="25" color="#222222" variant="Bold"/></div></div>
    <div><p className='txt-ajout'>Détails du produit</p></div>
    <div><p className='txt1-ajout'>Ces informations aideront les clients à trouver votre produit parmi d'autres.</p></div>

</div>

<div className='col2-ajout'>
  
<div className='downlod-ajout'>
{img ===undefined?
   <label htmlFor="file-input" className='down-ajoutmin'>
      <div className='downlod2-ajout'><Import size="30" color="#222222" variant="Outline"/></div>
   <p className='txt3-ajout'>Télécharger un ou plusieurs photos</p>
   </label>
   :
   realimgsize>0.1?
   <div className="globalboxuplod-ajout">
   <div className="rowuplod01-ajout">
<div className="rol01-ajout"> 
<div><InfoCircle size="15" color="#D64545" variant="Bold" style={{marginTop:"30%"}}/></div>
<div><img src={img} className="mguplod-ajout"/></div>
<div><p className="txtuplod02-ajoute"style={{color:"#D64545"}}>{imgname}</p></div>
</div>

<div className="rol01-ajout"> 
<div><p className="txtuplod03-ajoute"style={{color:"#D64545"}}>Réessayer</p></div>
<div><CloseCircle size="18" color="#222" style={{cursor:"pointer",marginTop:"20%"}} onClick={sup}/></div>
</div>

 </div>
 
  </div>
  :

  <div className="globalboxuplod-ajout">
  <div className="rowuplod01-ajout">
<div className="rol01-ajout"> 
<div><TickCircle size="15" color="#57AE5B" variant="Bold" style={{marginTop:"30%"}}onClick={sup}/></div>
<div><img src={img} className="mguplod-ajout"/></div>
<div><p className="txtuplod02-ajoute">{imgname}</p></div>
</div>

<div className="rol01-ajout"> 
<div><p className="txtuplod03-ajoute">{imgsize}Mo</p></div>
<div><Trash size="15" color="#222" style={{cursor:"pointer"}} onClick={sup}/></div>
</div>

</div>

 </div>


}
</div>
   <input  type="file" className="uplod" id="file-input"accept=".jpg,.png" onChange={onImageChange}/>


    
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Nom de produit</p></div>
        <OutlinedInput placeholder='Nome' />

    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Prix</p></div>
        <OutlinedInput placeholder='Prix' />
    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Catégorie</p></div>
        <Select className='txt-select' defaultValue="Par pertinence" style={{ width: "500px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em className='txt-select-ajout'>Scolaire</em>
                    </MenuItem>
                  
                    <MenuItem value={1} className='txt-select'>Meilleurs ventes</MenuItem>
                    <ListSubheader></ListSubheader>
                 
                </Select>
    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Quantité</p></div>
        <OutlinedInput placeholder='Nome' />
    </div>

<div className='rowbnt-ajout'><button className='bnt01-ajout'><p className='txtbnt01-ajout'>Annuler</p></button><button  className='bnt02-ajout'><p className='txtbnt02-ajout'>Ajouter</p></button></div>
</div>
    </div>
  )
}

export default Ajouter
