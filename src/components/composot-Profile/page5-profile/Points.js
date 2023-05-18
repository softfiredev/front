import React from 'react'
import './Points.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'
const Points = () => {
    const [line1, setline1] = React.useState("link-points");
    const [line2, setline2] = React.useState("");
    const [clas1, setclas1] = React.useState("link-points");
    const [clas2, setlineclas2] = React.useState("link-points");
    const data=[{nom:"qsd"},{nom:"qsd"},{nom:"qsd"},{nom:"qsd"},]
    const data2=[{nom:"Non validé"},{nom:"Validé"},{nom:"Validé"},{nom:"Non validé"},]
  return (
 
       <div className='points'>

       <div className='row-points'>
          <div><p className='txt-points'>Mes points: 1700 pts</p></div>
          <button className='bnt-points'>Transformer mes points</button>
       </div>


       <table>
<tr>

<th>Date</th>
<th>Partenaire</th>
<th>Nbr de points</th>
<th>Code</th>
<th>Statut</th>
</tr>

{data.map((obj,index) => (

<tr  >

<td className='tdwidth1-points'>
<p >02/04/2023</p>
   </td>
<td className='tdwidth1-points'> 

<p >Errahma Maktba</p>
              </td>
<td className='tdwidth1-points'><p >1700</p></td>

<td className='tdwidth1-points'><p >#305563</p></td>


<td className='tdwidth1-points'>
 {data2[0].name==="Non validé"?
  <button className='bn010-points'>Non validé</button>
:
<button className='bn0101-points'>validé</button>
 } 
 

  
  
  </td>
</tr>

))}
</table>

    </div>
  )
}

export default Points
