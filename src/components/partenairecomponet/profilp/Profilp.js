import React,{useEffect, useState} from 'react'
import './Profilp.css'
import { Edit, Export, Shop, Trash } from 'iconsax-react';
import { Avatar } from '@mui/material';
import axios from 'axios';
import { Base_url, Path } from '../../../config/Config';
const Profilp = (props) => {
    const [ok2,setok2]=useState(false)
    const [Profilp2, setProfilp2] = useState([]);
const [image2, setImage2] = useState(null);
const [sizeimg2,setSizeimg2]=useState(false)
const [open2,setopen2]=useState(true)
const [avatar2,setavatar2]=useState()
const [Profilp, setProfilp] = useState({
    nom:  "",
    addr:  "",
    email:"",
    insta: "",
    fb:  "",
    telephone: ""
  });
const handleInputChange2 = (field) => {
    return (e) => {
      setProfilp((prev) => ({
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

const  partner=async ()=>{
  try {
    const response = await axios.get(Base_url + Path.findOnePartnaire+ props?.user.id);

    setProfilp((prevProfilp) => ({
      ...prevProfilp,
      nom: response.data?.partenaire?.partenaire?.nameetablissement || "",
      addr: response.data?.partenaire?.partenaire?.address || "",
      email: response.data?.partenaire?.partenaire?.email || "",
      insta: response.data?.partenaire?.partenaire?.Instagram || "",
      fb: response.data?.partenaire?.partenaire?.Facebook || "",
      telephone: response.data?.partenaire?.partenaire?.telephone || "",
    }));
  
    if(response.data?.partenaire?.partenaire?.image)
    {
      setImage2("http://localhost:8080/uploads/"+response.data?.partenaire?.partenaire?.image)
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

      useEffect(() => {
        partner()
      }, []);


const update=async ()=>{
  const data={
    nameetablissement :Profilp.nom,
    address:Profilp.addr,
    telephone : Profilp.telephone,
    facebook : Profilp.fb , 
    instagram : Profilp.insta,
    email:Profilp.email
  }
  try {
  const response = await axios.put(Base_url + Path.updateProfile+ props?.user.id,data);

  }catch(error)
  {
    console.error()
  }
}
const updateimage=async ()=>{
  const data= new FormData() ; 
  data.append("image",avatar2)
  try {
  const response = await axios.put(Base_url + Path.updateProfileimge+ props?.user.id,data);
console.log(response)

  }catch(error)
  {
    console.error()
  }
}

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
<button className='butt-vp' onClick={update}><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%",marginLeft:"5.5%"}}/><div><p className='txtbnt-vp'>Modifier</p></div></button>

</div><div>
<div><p className='txt4-vp'>Votre logo</p></div>

<div className='col4-vp'>
<div className='box3-vp'>
{open2?
<>
<label htmlFor="file-input2" className="labelup">
   <div className='circle-vp'>
    {image2==null  ?
<div className="boxgrprof-vp">    <Shop size="84" color="#515151" variant="Bold"style={{marginTop:"20%",marginLeft:"22%"}}/> 
</div>
:
<img  style={{ height: "150px", width: "150px",borderRadius:"50%" }}  src={image2} className="avrt-page" />

    }
    </div>
    </label>
    <input type="file" className="uplod" id="file-input2"accept=".jpg,.png" onChange={onImageChange2}/>

</>:

<>
<div className='circle2-vp'>
    <Avatar  style={{ height: "48px", width: "48px" }}  src={image2} className="avrt2-page" />
    <div><p className="txtavatar1-vp">300x300 - Max 2 MB</p></div>
    <div className="rowbntavatr-vp">
      <button className="bnt10-avatar-vp" onClick={()=>{setopen2(true);setok2(false);updateimage()}}><Export size="22" color="#222" variant="Bold" style={{marginTop:"3%"}}/><div className="txt102av-vp">Télécharger photo</div></button>
    <button className="bnt20-avatar-vp"  onClick={()=>{ setImage2(null);setopen2(true);setok2(false) }}><Trash size="22" color="#FF8A65"variant="Bold" style={{marginTop:"3%"}}/><div className="txt103av-vp">Supprimer photo</div></button></div>
    </div>


</>
}
</div>
<div className="col20-vp">
        <div className="txt-vp">Nom de votre établissement</div>
        <input className="input-provp" onChange={handleInputChange2("nom")} value={Profilp.nom} />
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Adresse</div>
        <input className="input-provp"onChange={handleInputChange2("addr")}  value={Profilp?.addr} />
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Téléphone</div>
        <input type='number' className="input-provp" onChange={handleInputChange2("telephone")}  value={Profilp?.telephone}/>
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Mail</div>
        <input  className="input-provp"onChange={handleInputChange2("email")}  value={Profilp?.email} />
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Lien de page Facebook</div>
        <input className="input-provp" onChange={handleInputChange2("fb")}  value={Profilp?.fb}/>
      </div>
      <div className="col20-vp">
        <div className="txt-vp">Lien de page Instagram</div>
        <input className="input-provp"onChange={handleInputChange2("insta")}  value={Profilp?.insta}/>
      </div>
   
</div>

</div>


</div>


    </div>
   </div>
  )
}

export default Profilp
