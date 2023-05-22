import React, { useEffect } from "react";
import "./Transformer_points.css";
import { useDispatch, useSelector } from "react-redux";
import { AllbonDachateByuser } from "../../../../../Store/Service/AllbonDachateByuser";
import { Okb } from "iconsax-react";

const Transformer_points = (props) => {
  const data = [{ nom: "qsd" }, { nom: "qsd" }, { nom: "qsd" }, { nom: "qsd" }];
  const data2 = [
    { nom: "Non validé" },
    { nom: "Validé" },
    { nom: "Validé" },
    { nom: "Non validé" },
  ];
  const client = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  const bonDachates = useSelector(
    (state) => state.AllbonDachateByuser.bondachates
  );
  
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(AllbonDachateByuser(client.id))
  },[])
  console.log(bonDachates)

  return (
    <div className="points">
      <div className="row-points">
        <div>
          <p className="txt-points">Mes points: {client.point} pts</p>
        </div>
        <button
          className="bnt-points"
          onClick={() => {
            props.onClick();
          }}
        >
          Transformer mes points
        </button>
      </div>

      <table>
        <tr>
          <th>Date</th>
          <th>Partenaire</th>
          <th>Solde</th>
          <th>Code</th>
          <th>Statut</th>
        </tr>

        {bonDachates.map((obj, index) => (
          <tr>
            <td className="tdwidth1-points">
              <p>{obj.createdAt}</p>
            </td>
            <td className="tdwidth1-points">
              <p>{obj.partenaire?.user?.fullname}</p>
            </td>
            <td className="tdwidth1-points">
              <p>{obj.solde} DT</p>
            </td>

            <td className="tdwidth1-points">
              <p>{obj.code}</p>
            </td>

            <td className="tdwidth1-points">
              {obj.etat === "Non validé" ? (
                <button className="bn010-points">Non validé</button>
              ) : (
                <button className="bn0101-points">{obj.etat}</button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Transformer_points;
