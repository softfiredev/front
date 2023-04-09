import React, { useEffect, useState } from 'react'
import { MinusCirlce, AddCircle, Bag, ArchiveAdd, Shop, Flag} from 'iconsax-react';
import icon from '../../assets/icon1.png'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { OutlinedInput} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Description = () => {
    const [value3, setValue3] = useState(3);
  const [qnt, setqnt] = useState(1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const quantityplus = () => {
    setqnt(qnt + 1)
  }
  const quantityminu = () => {
    if (qnt > 1) {
      setqnt(qnt - 1)
    }

  }
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#FFFFFF',
    width: '544px',
    height: '715px',
    boxShadow: '2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)',
    borderRadius: '8px',

    p: 4,
  };
  return (
    <div className='col-detail'>

    <div> <p className='txt3-detail'>GOUACHE 9T METAL LE COQ 22</p>
      <Rating name="read-only" value={value3} readOnly />
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
      <p className='txt9-detail'>Information du vendeur:</p><br />
      <div className='row3-detail'>
        <img src={icon} className='img-detail2' />
        <div className='col3-deatil'>
          <p className='txt10-detail'>Errahma Library</p>
          <Link to='/librairieProfile'>
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
          </Link>

        </div>

      </div>
      <div><br /><br /><br />
        <p className='txt10-detail'>Partagez ceci : </p><br />
      </div>
      <div className='row6-detail'>
        <div className="fa fa-facebook icc" ></div>
        <div className="fa fa-instagram icc"></div>
        <div className="fa fa-linkedin icc"></div>
        <div class="fa fa-pinterest icc"></div>
      </div>
      <div className='row6-detail'>
        <p className='txt12-detail'>Un problème avec ce produit ? </p>
        <div className='flag-detail'><Flag
          size="22"
          color="#222222"
          variant="Bold"
        />
        </div>
        <p className='txt13-detail' onClick={handleOpen}>Signaler</p>
        <Modal
        open={open}
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className='closemodal' onClick={handleClose}>X</p>
           <p className='txtmodal-detail'>Signaler cet article</p><br/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='col3-deatil'>
          <OutlinedInput className='input-login' placeholder="Votre nom et prénom"/>
          <OutlinedInput className='input-login' placeholder="Votre e-mail"/>
          <OutlinedInput className='inpu-conn2-modal' placeholder="Message" multiline rows={5} maxRows={80} />
          <button className='downlo-modal' >
                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2WywqCQBSGv2wTtJNatImWLmodFPUE3agk2gkp5Pu/QAwcw6SmmUGnFv7wgzCe83kuotCq1R9qAKyBK5ABKXABlkDYBDCQ5Hcg/2B1tpJ7a4NuNMCqd3XB5xbQwqpyK02AvcwulWtde3VtD5usTOeFCXRcMzSXbf+qbQPgVAdU2xfJO/ktUQIMxYkhPAI6VWgPOBsmSCrLElrAz8J6VuoKdYUHSAtMZzUsgcpQ5Mw0T4RFtcqj0lwLFfMeWeQ5YbhM71zIJTZDVt03+IaU7Rt8VIGzH4CnKrALxB7BcflT2XeAu4BjYb0okBYcDRfOFJxKzmldPwXVB/CmvAX70kHspAegq6wprKfiuQAAAABJRU5ErkJggg==" alt='ico'/><p className='tele'> Télécharger un fichier</p>
                   </button>
                   <div className='row-detail'>
                    <button className='bnt-modala1' onClick={handleClose}><p className='txt-modalbnt1'>Annuler</p></button> 
                    <button  className='bnt-modala2'><p className='txt-modalbnt2'>Envoyer</p></button>
                   </div>
          </div>
          </Typography>
        </Box>
      </Modal>
      </div>

    </div>

    <div>


    </div>

  </div>
  )
}

export default Description
