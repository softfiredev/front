import React, { useEffect, useState } from "react";
import'./TableauDuBord.css'
import Rating from "@mui/material/Rating";
import 'chart.js/auto';
import { Bar, Doughnut } from "react-chartjs-2";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { findCommandeBylibrairie } from "../../../Store/Service/findCommandeBylibrairie";
const TableauDuBord=(props)=>{
    const librairieData = useSelector(
        (state) => state.findCommandeBylibrairie.commandeslibrairie
      );
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(findCommandeBylibrairie(props?.user.id));
    }, []);

      const data = {
        labels: ['Compléter  (164)', 'En cours (30)', 'Rejeter (6)','Nouveau (6)'],
        datasets: [
          {
            data: [300, 200, 100,50],
            backgroundColor: ['#7BC47F', '#62B0E8', '#E66A6A','#F9DA8B'],
            cutout:"80%"
          }
        ],
      };
      const dat = {
        labels: ['23/03', '24/03', '25/03', '26/03', '25/03', '25/03'],
  
        datasets: [
          {
            label: 'Nombre de commandes',
            data: [150, 200, 400, 400, 50, 300],
            backgroundColor: ['#F7D070'],
            hoverBackgroundColor: ['#F7D070'],
            borderRadius : 8 ,
            borderWidth: 1,
            barThickness:30
          },
        ],
      };
      const options = {
        percentageInnerCutout : 0,
        plugins: {
          legend: {
            position: 'right',
            labels: {
                usePointStyle: true,
              },
            },
        },
        layout: {
          padding: {
            left: 0,
            right: 50, 
            top: 0,
            bottom: 0,
          },
        },
        rotation: 90, 
      };
      const optionss = {
        responsive: true,
        
        plugins: {
          legend: {
           display:false,
          },
        },
 
      };

    return(
        
     <div className="Tb">

            <div>
                <p className="txt1-Tb">Salut, Seif! 👋</p>
                <p className="txt2-Tb">Consultez votre tableau de bord aujourd'hui</p>
          </div>

<div className="row1-tb">

<div className="bloq1-tb">
<div><p className="txt3-Tb">Les plus vendus  <span className="txt4-Tb"> (30 derniers jours)</span></p></div>

<div className="col1-tb">
<div className="row2-Tb">
<div>
<p className="txt5-Tb">x111</p>
</div>
<img src=""  className="img-Tb"/>
<div>
<p className="txt6-Tb">GOUACHE 9T META</p>
</div>


</div>


</div>
</div>

<div className="bloq1-tb">
<div><p className="txt3-Tb">Les mieux notés<span className="txt4-Tb"> (30 derniers jours)</span></p></div>

<div className="col1-tb">
<div className="row2-Tb">

<Rating name="read-only" value={ 2 }  readOnly style={{fontSize:"16px"}}/>
<span className="span-tb">(117)</span>
<div>
<img src=""  className="img-Tb"/>
</div>

<div>
<p className="txt6-Tb">GOUACHE 9T META</p>
</div>


</div>


</div>

</div>

<div className="bloq1-tb">
<div><p className="txt3-Tb">Commandesétats<span className="txt4-Tb"> (30 derniers jours)</span></p></div>


<div className="row3-Tb">
<div >
<div style={{ width: '300px', height: '300px', position: 'relative'}}>
    <Doughnut data={data} options={options} width={200} height={200}/>
        <div style={{ position: 'absolute', width: '100%', top: '52%', left:" -29%", textAlign: 'center', marginTop: '-28px',  lineHeight: '20px'}}>
            <p className="txt-2014">202</p> 
            <p className="txt-2040">Total</p>
        </div>
        </div>

  
</div>




</div>



</div>

</div>


<div className="blq3-Tb">
<div className="row3-tb">
<div>
    <p className="txt9-tb">Nombre de commandes</p>
</div>
<div>
<Select className='txt-select' defaultValue="2"style={{ marginTop:"-2%",width: "202.57px", height: " 40px", borderRadius: "8px" }} >
                    <MenuItem value="2">
                        <em className='txt-select-ajout'>Les 7 derniers jours </em>
                    </MenuItem>
                
                      <MenuItem value="3" className='txt-select'>Les 2 derniers jours</MenuItem>
                  
                </Select>
</div>
</div>
<Bar data={dat}  options={optionss}  width={800} height={200} />
</div>


<div className="blq4-Tb">
    <div><p className="txt9-tb">Dernières commandes</p></div>
<table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{librairieData?.map((obj,index) => (

<tr className={obj?.etatVender==="Nouveau"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'>{obj?.id}</td>
<td className='tdwidth02'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj?.user?.avatar}style={{borderRadius:"50%"}} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.user?.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-c'>{obj.total_ttc?.toFixed(2)}</p></td>
<td className='tdwidth1'>{obj?.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1'>{obj?.createdAt}</td>

<td className='tdwidth1'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'>Compléter</p></button></>
:
<>
{obj.etatVender==="En cours"?
<button className='bnt02-c'><p className='txtbnt02-c'>{obj.etatVender}</p></button>
:<>{obj.etatVender==="Rejeter"?<button className='bnt02-c' style={{background:"#FACDCD"}}><p className='txtbnt02-c'>{obj.etatVender}</p></button>:
<>{obj.etatVender==="Nouveau"?<button className='bnt02-c' style={{background:"#FCEFC7"}}><p className='txtbnt02-c'style={{color:"#513C06"}}>{obj.etatVender}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>

</div>











    </div>
    
    
    )
}
export default TableauDuBord ;