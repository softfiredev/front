import React, { useEffect, useState } from "react";
import "./Detailcomnder.css";
import Avatar from "@mui/material/Avatar";
import { ArrowCircleLeft, Call, Sms, Location } from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Detailcomonde } from "../../../../Store/Service/Detailcomonde";

const DetaillivraisonsAdmin = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idcomonde = useParams(":id");
  const [ref, setref] = useState();
  const [Anuuler, setAnuuler] = useState(true);
  const navigat = () => {
    navigate("/Admin/Liste_de_livraisons");
  };
  const DetailcomondeClient = useSelector(
    (state) => state.Detailcomonde.Detailcomonde
  );
  useEffect(() => {
    dispatch(Detailcomonde(idcomonde.id));
  }, [ref]);
  const filteredData = DetailcomondeClient[0]?.user?.client?.adresses?.filter(item => item?.id === DetailcomondeClient[0]?.Adresse);
  const filteredData2 = DetailcomondeClient[0]?.user?.partenaire?.adresses?.filter(item => item?.id === DetailcomondeClient[0]?.Adresse);
 

  return (
    <div className="Detailcomnder">
      <div
        className="rowbox-dc"
        style={{ cursor: "pointer" }}
        onClick={navigat}
      >
        <ArrowCircleLeft size="25" color="#9E9E9E" />
        <div>
          <p className="txtbox-dc">Retourner</p>
        </div>
      </div>
      <div>
        <p className="txt1-dc">Détails de livraison</p>
      </div>
      <div className="row1-dc">
        <div className="col1-dc">
          <div className="box1-dc">
            <div className="border-dc"> </div>
            <div className="colbox1-dc">
              <div>
                <p className="txtbox1-ddc"># {DetailcomondeClient[0]?.id}</p>
              </div>
              <div>
                <ul className="ul-dc">
                  <li>
                    <p className="txtli-dc">
                      Montant Totale:
                      <span className="txtspanli-dc">
                        {DetailcomondeClient[0]?.total_ttc}  dt
                      </span>
                    </p>
                  </li>
                  <br />
                  <li>
                    Nbr d’article(s):
                    <span className="txtspanli-dc">
                     
                      {DetailcomondeClient[0]?.produitlabrairies?.length}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box2-dc">
            <div>
              <p className="txtbox2-dc">Contact de client</p>
            </div>
            <div className="minirow-dc">
              <Avatar
                src={
                  "http://localhost:8080/uploads/" +
                  DetailcomondeClient[0]?.user?.avatar
                }
                className="img-dc"
              />
              <div>
                <p className="txt1box3-dc">
                  {DetailcomondeClient[0]?.user?.fullname}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
           <div className="cicule-minirow"><Call size="15" color="#222222" variant="Bold" /></div>
              <div>
                <p className="txt1box2-dc">
                  (+216) {DetailcomondeClient[0]?.user?.telephone}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
            <div className="cicule-minirow"><Sms size="15" color="#222222" variant="Bold" /></div>

              <div>
                <p className="txt1box3-dc">
                  {DetailcomondeClient[0]?.user?.email}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
              <div className="cicule-minirow"><Location size="15" color="#222222" variant="Bold" /></div>

              <div>
                <p className="txt1box3-dc">
                {filteredData !== undefined ? (
  <>
    {filteredData?.[0]?.Nom_de_adresse}
   {filteredData?.[0]?.Code_postal}
   {filteredData?.[0]?.Gouvernorat}
    {filteredData?.[0]?.Ville}
  </>
) : (
  <>
    {filteredData2?.[0]?.Nom_de_adresse}
    {filteredData2?.[0]?.Code_postal}
    {filteredData2?.[0]?.Gouvernorat}
    {filteredData2?.[0]?.Ville}
  </>
)}
             
                </p>
              </div>
            </div>
          </div>
          <div className="box2-dc">
            <div>
              <p className="txtbox2-dc">Contact de Vendeur</p>
            </div>
            <div className="minirow-dc">
              <Avatar
                src={
                  "http://localhost:8080/uploads/" +
                  DetailcomondeClient[0]?.user?.avatar
                }
                className="img-dc"
              />
              <div>
                <p className="txt1box3-dc">
                  {DetailcomondeClient[0]?.user?.fullname}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
           <div className="cicule-minirow"><Call size="15" color="#222222" variant="Bold" /></div>
              <div>
                <p className="txt1box2-dc">
                  (+216) {DetailcomondeClient[0]?.user?.telephone}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
            <div className="cicule-minirow"><Sms size="15" color="#222222" variant="Bold" /></div>

              <div>
                <p className="txt1box3-dc">
                  {DetailcomondeClient[0]?.user?.email}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
              <div className="cicule-minirow"><Location size="15" color="#222222" variant="Bold" /></div>

              <div>
                <p className="txt1box3-dc">
                {filteredData !== undefined ? (
  <>
    {filteredData?.[0]?.Nom_de_adresse}
   {filteredData?.[0]?.Code_postal}
   {filteredData?.[0]?.Gouvernorat}
    {filteredData?.[0]?.Ville}
  </>
) : (
  <>
    {filteredData2?.[0]?.Nom_de_adresse}
    {filteredData2?.[0]?.Code_postal}
    {filteredData2?.[0]?.Gouvernorat}
    {filteredData2?.[0]?.Ville}
  </>
)}
             
                </p>
              </div>
            </div>
          </div>



          <div className="box3-dc">
            <div>
              <p className="txtbox2-dc">Calendrier</p>
            </div>

            
            <div className="minirow-dc">
              <div className="cirl-dc"></div>
              <div>
                <p className="txt3box3-dc">Demande reçu : </p>
              </div>
              <div>
                <p className="txt4box3-dc">{DetailcomondeClient[0]?.createdAt}</p>
              </div>
            </div>

{
  DetailcomondeClient[0]?.data_acceptation!=null&&Anuuler?
  <div className="minirow-dc">
  <div className="cirl-dc2"></div>
  <div>
    <p className="txt3box3-dc">Demande acceptée: </p>
  </div>
  <div>
    <p className="txt4box3-dc">{DetailcomondeClient[0]?.data_acceptation}</p>
  </div>
</div>
:<></>
}
{DetailcomondeClient[0]?.Date_préparée!=null?
<div className="minirow-dc">
<div className="cirl-dc3"></div>
<div>
  <p className="txt3box3-dc">Demande préparée: </p>
</div>
<div>
  <p className="txt4box3-dc">{DetailcomondeClient[0]?.Date_préparée}</p>
</div>
</div>
:
<></>
}
{
DetailcomondeClient[0]?.Data_rejetée!=null &&Anuuler?
<div className="minirow-dc">
<div className="cirl-dc4"></div>
<div>
  <p className="txt3box3-dc">Demande rejetée: </p>
</div>
<div>
  <p className="txt4box3-dc">{DetailcomondeClient[0]?.Data_rejetée}</p>
</div>
</div>
:
<></>

}

           


          </div>
        </div>
        <div className="col05-dc">
          <div className="box4-dc">
            <div>
              <p className="txtbox1-ddc">Liste des articles</p>
            </div>
            <div className="rowbox4-dc">
              <div>
                <p className="txtbox4-dc">Article</p>
              </div>
              <div>
                <p className="txtbox4-dc">Qté</p>
              </div>
              <div>
                <p className="txtbox4-dc">Totale HT</p>
              </div>
            </div>
            <div className="scroll-div2">
            <table className="tab-prd">
              {DetailcomondeClient[0]?.produitlabrairies?.map((obj, index) => (
                <tr>
                  <td className="widthtd-dc">
                    <div className="row2box4-dc">
                      <img
                        src={
                          "http://localhost:8080/uploads/" +
                          obj.imagelibrairies[0].name_Image
                        }
                        className="imgbox4-dc"
                      />
                      <div className="colbox4-dc">
                        <div>
                          {" "}
                          <p className="txt3box4-dc">{obj.titre}</p>
                        </div>
                        <div>
                          {" "}
                          <p className="txt4box4-dc">{obj?.prix_en_Solde!==null && obj?.prix_en_Solde!==0?obj?.prix_en_Solde:obj.prix}dt</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="widthtd1-dc">
                    <p className="txttab-dc">{obj.produit_c_Detail.Qte}</p>
                  </td>
                  <td>
                    <p className="txttab-dc">
                      {obj?.prix_en_Solde!==null && obj?.prix_en_Solde!==0?obj?.prix_en_Solde:obj.prix * obj.produit_c_Detail.Qte}
                    </p>
                  </td>
                </tr>
              ))}
            </table>
            </div>
            
          </div>
      
       
        </div>
      </div>
    </div>
  );
};

export default DetaillivraisonsAdmin;
