import React from "react";
import "./Transformer_points.css";
import { useSelector } from "react-redux";

const Transformer_points = (props) => {
  const data = [{ nom: "qsd" }, { nom: "qsd" }, { nom: "qsd" }, { nom: "qsd" }];
  const data2 = [
    { nom: "Non validé" },
    { nom: "Validé" },
    { nom: "Validé" },
    { nom: "Non validé" },
  ];
  const Point = useSelector(
    (state) => state.IdentiteClient.identiteClient.point
  );

  return (
    <div className="points">
      <div className="row-points">
        <div>
          <p className="txt-points">Mes points: {Point} pts</p>
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
          <th>Nbr de points</th>
          <th>Code</th>
          <th>Statut</th>
        </tr>

        {data.map((obj, index) => (
          <tr>
            <td className="tdwidth1-points">
              <p>02/04/2023</p>
            </td>
            <td className="tdwidth1-points">
              <p>Errahma Maktba</p>
            </td>
            <td className="tdwidth1-points">
              <p>1700</p>
            </td>

            <td className="tdwidth1-points">
              <p>#305563</p>
            </td>

            <td className="tdwidth1-points">
              {data2[0].name === "Non validé" ? (
                <button className="bn010-points">Non validé</button>
              ) : (
                <button className="bn0101-points">validé</button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Transformer_points;
