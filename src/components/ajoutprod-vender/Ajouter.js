import React, { useEffect, useState } from "react";
import "./Ajouter.css"
import {Box,Import,TickCircle,Trash,InfoCircle,CloseCircle} from "iconsax-react";
import { OutlinedInput } from '@mui/material';
import { Ajoutproduit } from "../../Store/Service/Ajoutproduit";
import Select from '@mui/material/Select';
import { toast } from "react-toastify";
import MenuItem from '@mui/material/MenuItem';
import { Modifierprod } from "../../Store/Service/Modifierprod";
import { useDispatch, useSelector } from "react-redux";
import { getAllGategorie } from "../../Store/Service/getAllGategorie";

const Ajouter = (props) => {
   const [img,setImage]=useState(props?.titre==="Modify produit"?"http://127.0.0.1:8080/uploads/"+props?.prod?.imagelibrairies[0].name_Image:undefined)
   const [produit, setproduit] = useState(props?.titre==="Modify produit"? props?.prod:{titre:"",prix:"",qte:"",categorieId:""});
    
   const [imgsize,setImgsize]=useState()
   const [realimgsize,setRealimgsize]=useState()
    const [imgname,setImgmane]=useState()
    const [prodimg,setprodimg]=useState()
    const [sizeimg,setsizeimg]=useState()
    const dispatch = useDispatch();
    const categorie = useSelector((state) => state.AllCategorie.Gategorie);
   
    useEffect(() => {
      dispatch(getAllGategorie());
    }, []);
      const handleInputChange = (field) => {
        return (e) => {
            setproduit((prev) => ({
            ...prev,
            [field]: e.target.value
          }));
        };
      };

      const Ajoutprod=()=>{
     
     if(produit.titre.length!=0&&produit.prix.length!=0 &&produit.qte.length!=0 &&prodimg!=undefined)
        {
            const data= new FormData() ; 
            data.append("titre",produit.titre)
            data.append("description","dfgdfg")
            data.append("prix",produit.prix)
            data.append("qte",produit.qte)
            data.append("categorieId",produit.categorieId)
            data.append("image",prodimg)
            data.append("labrairieId",2)
         
            if(realimgsize>(1024*1024))
            {
              {toast.error("taill image !!! ",{autoClose: 1000})}
            }else{
              console.log(prodimg)
              Ajoutproduit(data).then((response)=>{
      
               if(response.success===true){
                   toast.success("votre produit a ete Ajoute avec success",{autoClose: 1000})
                 setproduit({titre:"",prix:"",qte:"",categorieId:"1"})
                 setImage(undefined)
               }
             })
            }       
        } 
        else{ {toast.error("remplir votre champ Svp !!! ",{autoClose: 1000})}    }
        }

             const Modifyprod=()=>{  
              const data= new FormData() ; 
              data.append("titre",produit.titre)
              data.append("prix",produit.prix)
              data.append("qte",produit.qte)
              data.append("categorieId",produit.categorieId)
              data.append("labrairieId",2)           
              data.append("name_Image",prodimg);
               Modifierprod(produit.idprod,data).then((response)=>{
                if(response.success===true){
                  toast.success("votre avis Modifier avec success ",{autoClose: 1000})
                  }
              })
     
            }

        const Anuler=()=>{
            setproduit({titre:"",description:"",prix:"",qte:"",categorieId:""})
            setImage(undefined)
            setprodimg(undefined)
        }
        const onImageChange = (event) => {
          if (event.target.files && event.target.files[0]) {
             setprodimg(event.target.files[0])
             setImage(URL.createObjectURL(event.target.files[0]));
              const size=event.target.files[0].size ;
              let g=(size.toString());
              setRealimgsize(size)
              setImgsize(g.slice(0,4));
              const name=event.target.files[0].name
              setImgmane(name.slice(0,11));
              setsizeimg(realimgsize>(1024*1024))
          }
        }
        console.log(props?.titre==="Modify produit"?produit.categorieId:"1")
  return (
    <>
    <div>
            <p className="txt-int">{props.titre}</p>
          </div>

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
   realimgsize>(1024*1024)?
   <div className="globalboxuplod-ajout">
   <div className="rowuplod01-ajout">
<div className="rol01-ajout"> 
<div><InfoCircle size="15" color="#D64545" variant="Bold" style={{marginTop:"30%"}}/></div>
<div><img src={img} className="mguplod-ajout"/></div>
<div><p className="txtuplod02-ajoute"style={{color:"#D64545"}}>{imgname}</p></div>
</div>

<div className="rol01-ajout"> 
<div><p className="txtuplod03-ajoute"style={{color:"#D64545"}}>Réessayer</p></div>
<div><CloseCircle size="18" color="#222" style={{cursor:"pointer",marginTop:"20%"}} onClick={()=>{setImage(undefined);setprodimg(undefined)}}/></div>
</div>

 </div>
  </div>
  :

  <div className="globalboxuplod-ajout">
  <div className="rowuplod01-ajout">
<div className="rol01-ajout"> 
<div><TickCircle size="15" color="#57AE5B" variant="Bold" style={{marginTop:"30%"}}onClick={()=>{setImage(undefined);setprodimg(undefined)}}/></div>
<div><img src={img} className="mguplod-ajout"/></div>
<div><p className="txtuplod02-ajoute">{imgname?imgname:produit?.imagelibrairies[0]?.name_Image}</p></div>
</div>

<div className="rol01-ajout"> 
<div><p className="txtuplod03-ajoute">{imgsize?imgsize:"0.1"}Mo</p></div>
<div><Trash size="15" color="#222" style={{cursor:"pointer"}} onClick={()=>{setImage(undefined);setprodimg(undefined)}}/></div>
</div>

</div>

 </div>


}
</div>
   <input  type="file" className="uplod" id="file-input"accept=".jpg,.png" onChange={onImageChange}/>


    
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Nom de produit</p></div>
        <OutlinedInput placeholder='Nome'onChange={handleInputChange("titre")} value={produit.titre} />

    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Prix</p></div>
        <OutlinedInput placeholder='Prix'onChange={handleInputChange("prix")} value={produit.prix}  />
    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Catégorie</p></div>
        <Select className='txt-select' defaultValue={props?.titre==="Modify produit"?produit.categorieId:"1"} style={{ width: "500px", height: " 48px", borderRadius: "8px" }}onChange={handleInputChange("categorieId")}  >
                    <MenuItem value={props?.titre==="Modify produit"?produit.categorieId:"1"}>
                        <em className='txt-select-ajout'>choisir une catégorie </em>
                    </MenuItem>
                    {categorie.map((obj) => (
                      <MenuItem value={obj.id}  className='txt-select'>{obj.name}</MenuItem>
                    
                      ))
                  }
            
               
                  
                </Select>
    </div>
    <div className='col3-ajout'>
        <div><p  className='txt4-ajout'>Quantité</p></div>
        <OutlinedInput placeholder='Quantité'onChange={handleInputChange("qte")} value={produit.qte}  />
    </div>

    <div className='rowbnt-ajout'>
<button className='bnt01-ajout' onClick={Anuler}><p className='txtbnt01-ajout'>Annuler</p></button>
{props.titre==="Modify produit"?
<button onClick={Modifyprod} className='bnt02-ajout'><p className='txtbnt02-ajout'>Modify</p></button>
:
<button  onClick={Ajoutprod} className='bnt02-ajout'><p className='txtbnt02-ajout'>Ajouter</p></button>
}
</div>
</div>
    </div>
        </>
  )
}

export default Ajouter
