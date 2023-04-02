import './Detail-prod.css'
import Rating from '@mui/material/Rating';
import { MinusCirlce, AddCircle, Bag, ArchiveAdd, Shop, Flag } from 'iconsax-react';
import img1 from '../../assets/prod3.png'
import icon from '../../assets/icon1.png'
import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
const Detailprod = () => {
  const [qnt, setqnt] = useState(1);
  const quantityplus = () => {
    setqnt(qnt + 1)
  }
  const quantityminu = () => {
    if (qnt > 0) {
      setqnt(qnt - 1)
    }

  }
  return (
    <div className='detail'>

      <div>     <p className='txt1-detail'> Shop  {' > '}  Scolaire  {' > '}<span className='txt2-detail'>GOUACHE 9T METAL LE COQ 22</span>  </p>  </div>

      <div>
        <div className='row-detail'>
          <div >  <img src={img1} className='img-detail' /> </div>

          <div>


            <div className='col-detail'>

              <div> <p className='txt3-detail'>GOUACHE 9T METAL LE COQ 22</p>
                <Rating name="size-small" defaultValue={2} size="small" />
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

                  <div className='txt7-detail'>Ajouter au panier</div>
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
        <div >

          <div className='row10-detail'>

            <div><p className='txt20-detail'>Les avis:</p>  </div>

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

              </div>  </div >

          </div>

        </div>

      </div>
    </div>
  )
}

export default Detailprod
