import React, { useState } from "react";
import "./shop.css";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import Card from "../../components/card-produit/Card";
import Filter from "../../components/filter/Filter";
import Trifilter from "../../components/tri-filter/Trifilter";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduitlibrairie } from "../../Store/Service/AllProduitShope";
import { useEffect } from "react";

const Shop = () => {



  const dispatch=useDispatch()
  const produitShope=useSelector(state=> state.AllProduitShope.produitShope)
  const lengthtab=produitShope.length;
  useEffect(()=>{
    dispatch(getAllProduitlibrairie())
},[])
  return (
    <>
 
      <div className="shop">
        <div className="gr">
          <Grid item>
            <div className="gr1">
              <Grid item>
                
                <div className="txt-shop1">Shop</div>
              </Grid>
            </div>
          </Grid>

          <Grid item>
            <div className="gr3">
              <Grid item>
                <Filter />
              </Grid>

              <Grid item>
                <div className="colls-trifel">
                  <Trifilter total={produitShope.length}/>

                  <div className="prod-shop">
                    <Grid
                      container
                      rowSpacing={6}
                      columnSpacing={{ xs: 25, sm: 23, md: 4 }}
                    >
                      {lengthtab!==0 && produitShope?.map((obj) => (
                        <>
                          <Grid item>
                          <Card
                              prix={obj.prix}
                              titre={obj.titre}
                              noml={obj.labrairie?.nameLibrairie}
                              idl={obj.labrairie?.id}
                              totalavis={obj?.avisProduitlibraires?.[0]?.total_avis}
                              maxAvis={obj?.avisProduitlibraires?.[0]?.max_nb}
                              idp={obj.id}
                              logoL={obj.labrairie?.imageStore}
                              imgp={obj.imagelibrairies?.[0]?.name_Image}
                            />
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <Grid item>
                  
                  <Pagination
                    count={16}
                    shape="rounded"
                    className="pagination-shop"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
     
    </>
  );
};

export default Shop;