import React from 'react'
import './VenderProfile.css'
import {Profile,Edit,ProfileCircle,Shop } from "iconsax-react";
import {  OutlinedInput } from "@mui/material";
import Select from '@mui/material/Select';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
const VenderProfile = () => {
  return (

    <div className='vp'>
      <div><p className='txt1-vp'>Profile</p></div>
      <div className='box1-vp'>

        <div className='box1row-vp'>
        <div className='col1-vp'>
<div className='pbox-vp'><Profile  size="21" color="#222222" variant="Bold" style={{marginTop:"25%"}}/></div>
<div><p  className='txt2-vp'>Détails personnels</p></div>
<div><p className='txt3-vp'>Entrez vos coordonnées et avec les bonnes informations.</p></div>
</div>

<div className='col3-dv'>
    <div className='blo-dv'>
    <button className='butt-vp'><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%"}}/><div><p className='txtbnt-vp'>Modifier</p></div></button>

    </div>
<div>
    <div><p className='txt4-vp'>Photo de profile</p></div>

    <div className='col4-vp'>
    <div className='box3-vp'>
   <div className='circle-vp'><ProfileCircle size="46" color="#515151" variant="Bold"style={{marginTop:"30%",marginLeft:"30%"}}/> </div>
    </div>
    <div className="col20-vp">
            <div className="txt-vp">Nom et Prénom</div>
            <OutlinedInput className="input-vp" />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Numéro de téléphone</div>
            <OutlinedInput className="input-vp" />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Email</div>
            <OutlinedInput className="input-vp" />
          </div>
          <div className="col20-vp">
          <div className="txt-vp">Date de naissance</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="input-vp"  />
            </LocalizationProvider>
          </div>
          <div className="col20-vp">
          <div className="txt-vp">Genre</div>
          <Select className='txt-select' defaultValue="Par pertinence" style={{ width: "500px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em className='txt-select-vp'>Male</em>
                    </MenuItem>
                  
                    <MenuItem value={1} className='txt-select-vp'>Femelle</MenuItem>
                    <ListSubheader></ListSubheader>
                 
                </Select>
          </div>
    </div>

</div>


</div>


        </div>



        
<div className='lin-vp'></div>



<div className='box1row-vp'>
        <div className='col1-vp'>
<div className='pbox-vp'><Shop  size="21" color="#222222" variant="Bold" style={{marginTop:"25%"}}/></div>
<div><p  className='txt2-vp'>Détails personnels</p></div>
<div><p className='txt3-vp'>Entrez vos coordonnées et avec les bonnes informations.</p></div>
</div>

<div className='col3-dv'>
<div className='blo-dv'>
    <button className='butt-vp'><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%"}}/><div><p className='txtbnt-vp'>Modifier</p></div></button>

    </div><div>
    <div><p className='txt4-vp'>Photo de profile</p></div>

    <div className='col4-vp'>
    <div className='box3-vp'>
   <div className='circle-vp'><Shop size="46" color="#515151" variant="Bold"style={{marginTop:"30%",marginLeft:"30%"}}/> </div>
    </div>
    <div className="col20-vp">
            <div className="txt-vp">Nom de votre établissement</div>
            <OutlinedInput className="input-vp" />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Téléphone</div>
            <OutlinedInput className="input-vp" />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Mail</div>
            <OutlinedInput className="input-vp" />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Lien de page Facebook</div>
            <OutlinedInput className="input-vp" />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Lien de page Instagram</div>
            <OutlinedInput className="input-vp" />
          </div>
       
    </div>

</div>


</div>


        </div>

      </div>
    </div>

  )
}

export default VenderProfile
