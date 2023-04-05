import React,{ useState} from 'react'
import "./filter.css"
import { Grid } from '@mui/material'
import { OutlinedInput } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import PrettoSlider from '@mui/material/Slider';
import { Candle2 } from 'iconsax-react';

const Filter = () => {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = useState([20, 37]);
    const [color1, setcolor1] = useState("#FFFFFF");
    const [color2, setcolor2] = useState("#F7D070");
    const [color3, setcolor3] = useState("#FFFFFF");
    const [color4, setcolor4] = useState("#FFFFFF");
const change1=()=>{
    setcolor1("#F7D070")
    setcolor2("#FFFFFF")
    setcolor3("#FFFFFF")
    setcolor4("#FFFFFF")
}
const change2=()=>{
    setcolor1("#FFFFFF")
    setcolor2("#F7D070")
    setcolor3("#FFFFFF")
    setcolor4("#FFFFFF")
}
const change3=()=>{
    setcolor1("#FFFFFF")
    setcolor2("#FFFFFF")
    setcolor3("#F7D070")
    setcolor4("#FFFFFF")
}
const change4=()=>{
    setcolor1("#FFFFFF")
    setcolor2("#FFFFFF")
    setcolor3("#FFFFFF")
    setcolor4("#F7D070")
}
    return (

        <div className='col3' >
            <Grid item >


                <div className='card-felter1'>

                    <div className='row-felter1'>
                        <button className='bntcard-felter1'style={{background:color1}}onClick={change1}><p className='txtbntcard-felter'>Nouveautés</p>
                        </button>
                        <button className='bntcard-felter2' style={{background:color2}}onClick={change2}> <p className='txtbntcard-felter2'>Packs promo</p></button>    </div>

                    <div className='row-felter1'>
                        <button className='bntcard-felter1'style={{background:color3}}onClick={change3}><p className='txtbntcard-felter'>Promotions</p></button>
                        <button className='bntcard-felter3'style={{background:color4}}onClick={change4}> <p className='txtbntcard-felter'>Meilleures ventes</p></button>    </div>

                </div>   </Grid >
            <Grid item ><div className='row2-filter'><div><Candle2 size="22" color="#222222" variant="Bold" /></div><div className='txt4-shop'>Filtrer</div> </div>    </Grid >


            <Grid item ><hr className='lin'></hr>     </Grid >
            <Grid item ><p className='txt4-shopr'> Rechercher des produits</p>     </Grid >
            <Grid item ><OutlinedInput className="input-shop" placeholder="Rechercher des produits" />      </Grid >


            <Grid item ><hr className='lin'></hr>     </Grid >

            <Grid item ><p className='txt5-shop'>Catégories de produits</p>  </Grid ><div className='br-filter'></div>
            <Grid item >
                <div className='gr5'>

                    <Grid item container spacing={1}>
                        <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="S-shop">Scolaire</p></span>
                    </Grid>

                    <Grid item container spacing={1}>
                        <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="S-shop">Para-scolaires</p></span>
                    </Grid>

                    <Grid item container spacing={1}>
                        <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="S-shop">Outils informatiques</p></span>
                    </Grid>

                    <Grid item container spacing={1}>
                        <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="S-shop2">Divers</p></span>
                    </Grid>

                    <Grid item container spacing={1}>
                        <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="S-shop">Jeux educatifs</p></span>
                    </Grid>

                    <Grid item container spacing={1}>
                        <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }} /><span ><p className="S-shop3">Pack promo</p></span>
                    </Grid>
                </div>



            </Grid >
            <Grid item ><hr className='lin' ></hr>     </Grid >

            <Grid item >

                <div className="grbnt">
                    <button className='bnt1-shop'> {value[0]}Dt</button> <hr className='lin1' ></hr><p>à</p><hr className='lin1' ></hr>
                    <button className='bnt1-shop'> {value[1]}Dt</button>

                </div>


            </Grid >

            <Grid item >
                <PrettoSlider

                    value={value}
                    onChange={handleChange}

                    getAriaValueText={valuetext}
                    style={{ color: "#E9B949" }}
                    size="small"
                />

            </Grid >
            <Grid item >
                <button className='tbnt-shop'> <p className='txt2bnts-shop'>Valider prix</p></button>
            </Grid >

        </div >

    )
}

export default Filter
