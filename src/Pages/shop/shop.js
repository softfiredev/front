import React, { useEffect, useState, lazy } from 'react'
import "./shop.css"
import Pagination from '@mui/material/Pagination';
import { Grid } from '@mui/material'
import { OutlinedInput } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

const Card = lazy(() => import('../../components/card-produit/Card'));

const Shop = () => {

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
                                    <select className='selec'>
                                        <option value="volvo">Popularité</option>
                                        <option value="s">s</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>    </Grid >
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
                                <Grid item ><p className='txt4'> Filtrer par tarif</p>     </Grid >
                                <Grid item >

                                    <div className="grbnt">
                                        <button className='bnt1'> {value[0]}Dt</button>
                                        <button className='bnt1'> {value[1]}Dt</button>

                                    </div>


                                </Grid >

                                <Grid item >




                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        style={{ color: "#E9B949" }}
                                    />

                                </Grid >






                                <Grid item ><hr className='lin' ></hr>     </Grid >

                                <Grid item ><p className='txt5'>Catégories de produits</p>  </Grid >
                                <Grid item >
                                    <div className='gr5'>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="Souviens">Scolaire</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="Souviens">Para-scolaires</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="Souviens">Outils informatiques</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="Souviens">Divers</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="Souviens">Jeux educatifs</p></span>
                                        </Grid>

                                        <Grid item container spacing={1}>
                                            <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="Souviens">Pack promo</p></span>
                                        </Grid>
                                    </div>



                                </Grid >



                            </div >

                        </Grid >
                        <Grid item >
                            <div className='prod-shop'>
                                <Grid container rowSpacing={6} columnSpacing={{ xs: 15, sm: 23, md: 2 }}>
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >
                                    <Grid item > <Card prix={prix} nom={nom} />    </Grid >

                                </Grid>
                            </div>
                            <br /><br /><br />
                            <Grid item >  <Pagination count={16} shape="rounded" className='pagination-shop' />  </Grid >
                        </Grid >

                    </div>
                </Grid>
            </div>

        </div>
    )
}

export default Shop
