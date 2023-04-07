import './Detail-prod.css'
import Rating from '@mui/material/Rating';
import { MinusCirlce, AddCircle, Bag, ArchiveAdd, Shop, Flag,ArrowLeft2 ,ArrowRight2} from 'iconsax-react';
import icon from '../../assets/icon1.png'
import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import Card from '../../components/card-produit/Card';
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import im1 from'../../assets/prod1.png'
import im2 from'../../assets/prod2.png'
import im3 from'../../assets/prod3.png'
const Detailprod = () => {
  const prod = [{nom:"CRAYON PASTEL DE 12 JOVI WAX +TC 980-16",prix:"8.1dt",url:""},{nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"5.1dt",url:""},{nom:"CRAYON PASTEL DE 12 JOVI WAX +TC 980-16",prix:"4.1dt",url:""},{nom:"CRAYON PASTEL DE 12 JOVI WAX +TC 980-16",prix:"8.1dt",url:""},{nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"1.1dt",url:""}];
  const images = [
    { url: im1 },
    { url: im2 },
    { url: im3 },
  ];
  const [value, setValue] = useState(3);

  const [qnt, setqnt] = useState(1);
  const [pls, setpls] = useState(0);
  const quantityplus = () => {
    setqnt(qnt + 1)
  }
  const quantityminu = () => {
    if (qnt > 0) {
      setqnt(qnt - 1)
    }

  }
  const plus=()=>{
    if(pls<images.length-1)
    {
      setpls(pls+1)
    }

  }
  const min=()=>{
    if(pls>0)
    {
      setpls(pls-1)
    }

  }

  console.log(images[pls].url)
  return (
    <div className='detail'>

      <div>     
        <p className='txt1-detail'> Shop  {' > '}  Scolaire  {' > '}<span className='txt2-detail'>GOUACHE 9T METAL LE COQ 22</span>  </p>  </div>

      <div>
        <div>
        <div className='row-detail'>
  <div>

  <div className='col303-detail'>


  <div >
    <div className='prod-detail'>
    <button className='bnt-arrow1' onClick={plus}> <ArrowLeft2
 size="32"
 color="#828D9E"
/> </button>
<img  className='img-detail' src={images[pls].url} />
<button onClick={min} className='bnt-arrow1'> <ArrowRight2
 size="32"
 color="#828D9E"
/>

 </button>
    </div>
  </div>
  <div> 

    <div className='row6-detail'> 
    <img  className='pimg-detail' src={images[pls].url} />
    <img  className='pimg-detail' src={images[pls].url} />
    <img  className='pimg-detail' src={images[pls].url} />
    </div>

    </div>



  </div>
  </div>


          <div>


            <div className='col-detail'>

              <div> <p className='txt3-detail'>GOUACHE 9T METAL LE COQ 22</p>
                <Rating name="read-only" value={value} readOnly />
                <p className='txt4-detail'> 4,998 DT</p>
              </div>
              <div >
                <p className='txt5-detail'>Description:</p>
                <p className='txt6-detail'>
                  Ce produit est livré avec neuf couleurs :
                  blanc, gris, noir, violet, bleu, bleu-ciel, vert, vert foncé, orange, rose, rouge et jaune.

                </p>
              </div>

              <div className='row2-detail'>
                <div className='bord-detail'>
                  <div className='bnt-gnt'><MinusCirlce onClick={quantityminu}
                    size="23"
                    color="#222222"
                    variant="Bold"
                  /></div>
                  <div className='qunt'>{qnt}</div>
                  <div className='bnt-gnt'><AddCircle onClick={quantityplus}
                    size="23"
                    color="#222222"
                    variant="Bold"
                  /></div>



                </div>
                <button className='bnt1-detail' >
                  <div className='bag-detail'>
                    <Bag
                      size="22"
                      color="#FFFFFF"
                    />

                  </div>

                  <div className='txt77-detail'>Ajouter au panier</div>
                </button>
                <button className='bnt2-detail'>
                  <div className='ArchiveAdd-detail'><ArchiveAdd
                    size="23"
                    color="#222222"
                  /></div>
                  <div className='txt8-detail'>Sauvegarder</div>

                </button>

              </div>
              <div>
                <p className='txt9-detail'>Information du vendeur:</p><br /><br />
                <div className='row3-detail'>
                  <img src={icon} className='img-detail2' />
                  <div className='col3-deatil'>
                    <p className='txt10-detail'>Errahma Library</p>
                    <button className='bnt5-detail'>

                      <div className='row6-detail'>
                        <div className='iconshop-detail' >
                          <Shop
                            size="22"
                            color="#222222"
                          />
                        </div>
                        <div>
                          <p className='txt11-detail'>Visiter le magasin </p>
                        </div>
                      </div>
                    </button>


                  </div>

                </div>
                <div><br /><br />
                  <p className='txt10-detail'>Partagez ceci : </p><br />
                </div>
         <div className='row6-detail'>
         <Link to="#" className="fa fa-facebook icc" ></Link>
        <Link to="#" className="fa fa-instagram icc"></Link>
            <Link to="#" className="fa fa-linkedin icc"></Link>
            <Link to="#" class="fa fa-pinterest icc"></Link>
         </div>
                <div className='row6-detail'>
                  <p className='txt12-detail'>Un problème avec ce produit ? </p>
                  <div className='flag-detail'><Flag
                    size="22"
                    color="#222222"
                    variant="Bold"
                  />
                  </div>
                  <p className='txt13-detail'>Signaler</p>
                </div>

              </div>

              <div>


              </div>

            </div>
          </div>


        </div>
        </div>
      
        <div >

          <div className='row10-detail'>

            <div>
              <div className='col4-detail'>
                <div>  <p className='txt20-detail'>Les avis:</p>  </div>
                
              
                <div>
                  <div className='row6-detail'>

                    <div>
                      <div className='col3-deatil' >
                        <div>  <p className='nbr-deatail'>4.5 </p> </div>
                        <div> <Rating name="read-only" value={value} readOnly /><span className='txt12-detail'>(160)</span></div>

                      </div>
                    </div>
                    <div className='coll33-detail'>
                      <div className='row6-detail'>
                        <div>    <p className=''>5</p>    </div>
                        <div>   <div className="progressbar">
                          <div className="indicator"></div>
                        </div>

                        </div>
                        <div>    <p className='txt12-detail'>(90)</p>    </div>

                      </div>

                      <div className='row6-detail'>
                        <div>    <p className=''>5</p>    </div>
                        <div>   <div className="progressbar">
                          <div className="indicator"></div>
                        </div>

                        </div>
                        <div>    <p className='txt12-detail'>(90)</p>    </div>

                      </div>

                      <div className='row6-detail'>
                        <div>    <p className=''>5</p>    </div>
                        <div>   <div className="progressbar">
                          <div className="indicator"></div>
                        </div>

                        </div>
                        <div>    <p className='txt12-detail'>(90)</p>    </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div>
                 <p className='txt7-detail'>Donnez votre avis</p>
                </div>
              </div>
            </div>

            <div className='coll3-detail'>

            <div >
            <div className='Grob1-detail'>
              <div > <p className='txt20-detail'>Les commentaires:</p>      </div >
              <div >
                <p className='txt21-detail'>
                  Trier par:
                  <div className='select-detail' >
                    <Select className='txt-select-detail' defaultValue="Le plus ancien" style={{ width: "145.5px", height: " 39px", borderRadius: "8px" }} >

                      <MenuItem value="Le plus ancien">
                        <em className='txt-select-detail'>Le plus ancien</em>
                      </MenuItem>
                      <ListSubheader> </ListSubheader>
                      <MenuItem value={1} className='txt-select-detail'>Option 1</MenuItem>
                      <ListSubheader></ListSubheader>
                      <MenuItem value={2} className='txt-select-detail'>Option 2</MenuItem>

                    </Select>

                  </div>
                </p>
                <span>



                </span>

              </div> 
              
       
               </div >
               </div>

               <div className='coll4-detail'>  



              <div> Ashlynn Vaccaro </div>
              <div><Rating name="read-only" value={value} readOnly /></div>
              <div className='txt60-detail'>La peinture Gouache offre des couleurs vives et une consistance lisse à un prix abordable.</div>
                 
                 
                 
                 </div>

                 <div className='coll4-detail'>  



<div> Ashlynn Vaccaro </div>
<div><Rating name="read-only" value={value} readOnly /></div>
<div className='txt60-detail'>La peinture Gouache offre des couleurs vives et une consistance lisse à un prix abordable.</div>
   
   
   
                </div>
                <div className='coll4-detail'>  



              <div> Ashlynn Vaccaro </div>
              <div><Rating name="read-only" value={value} readOnly /></div>
              <div className='txt60-detail'>J'ai été agréablement surprise par la qualité de la peinture Gouache pour les projets scolaires de mon fils.</div>
                 
                 
                 
                 </div>
                 <div className='pagination-detail' >  <Pagination count={16} shape="rounded" className='pagination-shop'  />  </div>
          </div>






          </div>
        </div>

      </div>

      <div>
        <div className='col303-detail'>
          <div className='txt20-detail'>Recommendation:</div>
          <div>
            <div className='row6-detail'>
          {prod.map((obj) =>
              <>
                           <Grid item > <Card prix={obj.prix} nom={obj.nom} />    </Grid >

               </>
            )}
            </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Detailprod
