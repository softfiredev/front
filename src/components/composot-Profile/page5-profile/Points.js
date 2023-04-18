import React from 'react'
import './Points.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'
const Points = () => {
    const [line1, setline1] = React.useState("link-points");
    const [line2, setline2] = React.useState("");
    const [clas1, setclas1] = React.useState("link-points");
    const [clas2, setlineclas2] = React.useState("link-points");

  return (
 
       <div className='points'>
    <div className='col1-points'>

    <div><p className='txt1-points'>Mes points: 1700 pts</p></div>
    <div className='row-points'>
    <p className='txt2-points'> Bon d’achats    </p>
    <p className='txt3-points'>Historique

    </p>

    </div>
    <Outlet />
    </div>


    </div>
  )
}

export default Points
