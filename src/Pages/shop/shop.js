import React, {  useState} from 'react'
import "./shop.css"
import Pagination from '@mui/material/Pagination';
import { Grid } from '@mui/material'
import Card from '../../components/card-produit/Card';
import Filter from '../../components/filter/Filter';
import Trifilter from '../../components/tri-filter/Trifilter';

const Shop = () => {
    const prod = [{nom:"PACK LIVRE SCOLAIRE 1éME",prix:"8.1dt",url:""},{nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"5.1dt",url:""},{nom:"COMPAS AVEC CRAYON 2506 INV",prix:"4.1dt",url:""},{nom:"PACK LIVRE SCOLAIRE 1éME",prix:"8.1dt",url:""},{nom:"PACK LIVRE SCOLAIRE 1 EME",prix:"1.1dt",url:""}];
  

    const [nom, setpnom] = useState("ssssss");
    const [prix, setprix] = useState("8.55dt");


    return (
        <div className='shop'>
            <div className='gr'>
                <Grid item >
                    <div className='gr1'>
                        <Grid item > <div className='txt-shop1'>Shop</div></Grid >
                    

                    </div>
                </Grid>

                <Grid item >
                    <div className='gr3'>
                        <Grid item >

                        <Filter/>

                        </Grid >
                        
                        <Grid item >
                        <div className='colls-trifel' >
                            <Trifilter/>

                     
                            <div className='prod-shop'>
                                <Grid container rowSpacing={6} columnSpacing={{ xs: 25, sm: 23, md: 4 }}>
                                  
                                {prod.map((obj) =>
              <>
                           <Grid item > <Card prix={obj.prix} nom={obj.nom} />    </Grid >

               </>
            )}
          
            
                       

                                </Grid>
                            </div></div>
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
