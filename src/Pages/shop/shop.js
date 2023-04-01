import React, { useEffect, useState} from 'react'
import "./shop.css"
import Pagination from '@mui/material/Pagination';
import { Grid } from '@mui/material'
import { OutlinedInput } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import PrettoSlider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import Card from '../../components/card-produit/Card';

const Shop = () => {
    const prod = [{nom:"CRAYON PASTEL DE 12 JOVI WAX +TC 980-16",prix:"8.1dt",url:""},{nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"8.1dt",url:""},{nom:"CRAYON PASTEL DE 12 JOVI WAX +TC 980-16",prix:"8.1dt",url:""},{nom:"CRAYON PASTEL DE 12 JOVI WAX +TC 980-16",prix:"8.1dt",url:""},{nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"8.1dt",url:""}];
    function valuetext(value) {
        return `${value}°C`;
    }

    const [nom, setpnom] = useState("ssssss");
    const [prix, setprix] = useState("8.55dt");
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='shop'>
            <div className='gr'>
                <Grid item >
                    <div className='gr1'>
                        <Grid item > <div className='txt-shop1'>Shop</div></Grid >
                        <Grid item >
                            <div className='gr-shop2'>
                                <Grid item >  <div className='txt-shop2'>Tri par:</div>    </Grid >
                                <Grid item >
        <Select defaultValue="Popularité" style={{width: "145.5px",height:" 39px",borderRadius: "8px"}} >
       
          <MenuItem value="Popularité">
            <em  className='txt-select'>Popularité</em>
          </MenuItem>
          <ListSubheader> </ListSubheader>
          <MenuItem   value={1}>Option 1</MenuItem>
          <ListSubheader></ListSubheader>
          <MenuItem value={2}>Option 2</MenuItem>
     
        </Select>
                                    
                                    
                                    
                                      </Grid >
                            </div>


                        </Grid >

                    </div>
                </Grid>

                <Grid item >
                    <div className='gr3'>
                        <Grid item >

                            <div className='col3' >
                                <Grid item ><OutlinedInput className="input-shop" placeholder="Rechercher des produits" />      </Grid >
                                <Grid item ><hr className='lin'></hr>     </Grid >
                                <Grid item ><p className='txt4-shop'> Filtrer par tarif</p>     </Grid >
                                <Grid item >

                                    <div className="grbnt">
                                        <button className='bnt1-shop'> {value[0]}Dt</button>
                                        <button className='bnt1-shop'> {value[1]}Dt</button>

                                    </div>


                                </Grid >

                                <Grid item >




                                    <PrettoSlider
                                       
                                        value={value}
                                        onChange={handleChange}
                              
                                        getAriaValueText={valuetext}
                                        style={{ color: "#222222" }}
                                        size="small"
                                    />

                                </Grid >






                                <Grid item ><hr className='lin' ></hr>     </Grid >

                                <Grid item ><p className='txt5-shop'>Catégories de produits</p>  </Grid >
                                <Grid item >
                                    <div className='gr5'>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #222222", marginTop: "-4.2%" }} /><span ><p className="S-shop">Scolaire</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #222222", marginTop: "-4.2%" }} /><span ><p className="S-shop">Para-scolaires</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #222222", marginTop: "-4.2%" }} /><span ><p className="S-shop">Outils informatiques</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #222222", marginTop: "-4.2%" }} /><span ><p className="S-shop2">Divers</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #222222", marginTop: "-4.2%" }} /><span ><p className="S-shop">Jeux educatifs</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #222222", marginTop: "-4.2%" }} /><span ><p className="S-shop3">Pack promo</p></span>
                                        </Grid>
                                    </div>



                                </Grid >



                            </div >

                        </Grid >
                        <Grid item >
                            <div className='prod-shop'>
                                <Grid container rowSpacing={6} columnSpacing={{ xs: 25, sm: 23, md: 4 }}>
                                  
                                {prod.map((obj) =>
              <>
                           <Grid item > <Card prix={obj.prix} nom={obj.nom} />    </Grid >

               </>
            )}
          
            
                       

                                </Grid>
                            </div>
                            <br /><br /><br />
                            <Grid item >  <Pagination count={16} shape="rounded" className='pagination-shop'  />  </Grid >
                        </Grid >

                    </div>
                </Grid>
            </div>

        </div>
    )
}

export default Shop
