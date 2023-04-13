import React from 'react'
import './Commandes.css'
import { OutlinedInput} from '@mui/material'

const Commandes = () => {

const tabcomo=[
    {id:"#107570194",Articles:"2",Date:'06 février 2022',Tarification:'120 dt',Statut:<button className='bnt1-como'><p className='txtbnt-como'>En cours</p></button>}
    ,
    {id:"#105750194",Articles:"3",Date:'06 février 2023',Tarification:'120 dt',Statut:<button className='bnt1-como'><p className='txtbnt-como'>En cours</p></button>}
    ,
    {id:"#1040194",Articles:"5",Date:'06 février 2027',Tarification:'20 dt',Statut:<button className='bnt1-como'><p className='txtbnt-como'>En cours</p></button>}
,
{id:"#1005194",Articles:"1",Date:'06 février 2021',Tarification:'10 dt',Statut:<button className='bnt1-como'><p className='txtbnt-como'>En cours</p></button>}
,
{id:"#10014594",Articles:"1",Date:'06 février 2020',Tarification:'120 dt',Statut:<button className='bnt1-como'><p className='txtbnt-como'>En cours</p></button>}

]
  return (
     <div className='comonde'>
      <div className='col1-como'>

      <div><p className='txt1-como'>Commandes</p></div>
      <div>  <div className='row1-como'> <div><p className='txt2-como'>Tous</p></div> <div ><p className='txt2-como'>Livré</p></div> <div><p className='txt2-como'>En cours</p></div> <div><p className='txt2-como'>Annulé</p></div>   </div></div>
      <div><OutlinedInput className='input-como' placeholder='Rechercher l ID de commande, larticle'/></div>
      <div>
      <table style={{width:"105%"}}>
  <tr>
    <th>ID</th>
    <th><div  style={{marginLeft:"-25%"}}>Articles</div></th>
    <th>Date de livraison</th>
    <th>Tarification</th>
    <th ><div  style={{marginLeft:"20%"}}>Statut</div></th>
  </tr>
<br/>
  {tabcomo.map((obj) =>
      <tr >
    <td style={{width:"20%"}}>{obj.id}</td>
    <td>{obj.Articles}</td>
    <td>{obj.Date}</td>
    <td>{obj.Tarification}</td>
    <td>{obj.Statut}</td><br/><br/>
    </tr>
            )}

 
 
</table>
      </div>
      </div>
      </div>

  )
}

export default Commandes
