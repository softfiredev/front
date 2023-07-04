import React,{useState} from 'react'
import './Profilp.css'
import { Edit, Export, Shop, Trash } from 'iconsax-react';
import { Avatar } from '@mui/material';
const Profilp = () => {
    const [ok2,setok2]=useState(false)
const [image, setImage] = useState(null);
const [sizeimg,setSizeimg]=useState(false)
const [refreshpage,setrefreshpage]=useState()
const [image2, setImage2] = useState(null);
const [sizeimg2,setSizeimg2]=useState(false)
const [open2,setopen2]=useState(true)
const [avatar2,setavatar2]=useState()
const [venderl, setVenderl] = useState({
    nom:  "",
    addr:  "",
    email:"",
    insta: "",
    fb:  "",
    telephone: ""
  });
  
const handleInputChange2 = (field) => {
    return (e) => {
      setVenderl((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  };
    const onImageChange2 = (event) => {
        if (event.target.files && event.target.files[0]) {
          setavatar2(event.target.files[0])
          setSizeimg2((event.target.files[0].size)>(1024*1024))
          setImage2(URL.createObjectURL(event.target.files[0]));
          setopen2(false);
          setok2(true);
        }
      };
  return (
   <div className='box2row-vc'>
    <div><p className='txtpo'>Profile</p></div><br/>
     <div className='box2row-vp'>
    <div className='col1-vp'>
<div className='pbox-vp'><Shop  size="21" color="#222222" variant="Bold" style={{marginTop:"25%"}}/></div>
<div><p  className='txt2-vp'>Détails de l’établissement</p></div>
<div><p className='txt3-vp'>Ces informations aideront les clients à mieux vous <br/> trouver parmi d'autres.</p></div>
</div>

<div className='col3-dv'>
<div className='blo-dv'>
<button className='butt-vp'><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%",marginLeft:"5.5%"}}/><div><p className='txtbnt-vp'>Modifier</p></div></button>

</div><div>
<div><p className='txt4-vp'>Votre logo</p></div>

<div className='col4-vp'>
<div className='box3-vp'>
{open2?
<>
<label htmlFor="file-input2" className="labelup">
<div className='circle-vp'>
{image2==null ?
<div className="boxgrprof-vp">    <Shop size="84" color="#515151" variant="Bold"style={{marginTop:"20%",marginLeft:"22%"}}/> 
</div>
:
<img  style={{ height: "150px", width: "150px",borderRadius:"50%" }}   className="avrt-page" />

}
</div>
</label>
<input type="file" className="uplod" id="file-input2"accept=".jpg,.png" onChange={onImageChange2}/>

</>:

<>
<div className='circle2-vp'>
<Avatar  style={{ height: "48px", width: "48px" }}   className="avrt2-page" />
<div><p className="txtavatar1-vp">300x300 - Max 2 MB</p></div>
<div className="rowbntavatr-vp">
  <button className="bnt10-avatar-vp" onClick={()=>{setopen2(true);setok2(false)}}><Export size="22" color="#222" variant="Bold" style={{marginTop:"3%"}}/><div className="txt102av-vp">Télécharger photo</div></button>
<button className="bnt20-avatar-vp"  onClick={()=>{ setImage2(null);setopen2(true);setok2(false) }}><Trash size="22" color="#FF8A65"variant="Bold" style={{marginTop:"3%"}}/><div className="txt103av-vp">Supprimer photo</div></button></div>
</div>


</>
}

</div>
<div className="col20-vp">
        <div className="txt-vp">Nom de votre établissement</div>
        <input className="input-provp" onChange={handleInputChange2("nom")} value={venderl.nom===undefined} />
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Adresse</div>
        <input className="input-provp"onChange={handleInputChange2("addr")}  value={venderl?.nom} />
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Téléphone</div>
        <input className="input-provp" onChange={handleInputChange2("telephone")}  value={venderl?.nom}/>
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Mail</div>
        <input className="input-provp"onChange={handleInputChange2("email")}  value={venderl?.nom} />
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Lien de page Facebook</div>
        <input className="input-provp" onChange={handleInputChange2("fb")}  value={venderl?.nom}/>
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Lien de page Instagram</div>
        <input className="input-provp"onChange={handleInputChange2("insta")}  value={venderl?.nom}/>
      </div>
   
</div>

</div>


</div>


    </div>
   </div>
  )
}

export default Profilp
