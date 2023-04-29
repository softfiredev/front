import React from 'react'
import './Filterbar.css'
import {SearchNormal1,FilterAdd,TickSquare,More,ArrowLeft2,ArrowRight2} from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";
const Filterbar = () => {
  return (
    <div className='row1-int'>
    <div className='row2-int'> 
    <OutlinedInput
          className="input-int"
          placeholder={"Rechercher..."}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />
    <button className='bnt0-int'>
    <FilterAdd size="22" color="#222222"/>
    <div><p  className='txt0-int'>Ajouter filtre</p></div>
    </button>
    </div>

    <div className='row2-int'> 
    <p>Affichage</p>
    <select className="select-int">
            <option value={10}> 10</option>
          </select>
          <p className='txt2-int'>résultats sur 50</p>
    </div>

 </div>
  )
}

export default Filterbar
