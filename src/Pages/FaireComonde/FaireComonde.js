import React, { useEffect, useState } from "react";
import "./FaireComonde.css";
import { useNavigate } from "react-router-dom";
import {  OutlinedInput } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {  TickCircle} from "iconsax-react";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { getIdentiteClientt } from "../../Store/Service/identiteClient";

const FaireComonde = (props) => {
  const navigate = useNavigate();
  const [addresse, setAddresse] = useState({
    nom: "",
    addr: "",
    Ville: "",
    codepostal: "",
    clientId: "",
    Societe: "",
    NuméroTVA: "",
  });
  const [Gouvernorat, setGouvernorat] = useState("");
  const Gouvernora = [
    { nome: "Ariana" },
    { nome: "Béja" },
    { nome: "Ben Arous" },
    { nome: "Bizerte" },
    { nome: "Gabès" },
    { nome: "Gafsa" },
    { nome: "Jendouba" },
    { nome: "Kairouan" },
    { nome: "Kairouan" },
    { nome: "Kasserine" },
    { nome: "Kébili" },
    { nome: "Le Kef" },
    { nome: "Mahdia" },
    { nome: "La Manouba" },
    { nome: "Médenine" },
    { nome: "Monastir" },
    { nome: "Nabeul" },
    { nome: "Sfax" },
    { nome: "Sidi Bouzid" },
    { nome: "Siliana" },
    { nome: "Sousse" },
    { nome: "Tataouine" },
    { nome: "Tozeur" },
    { nome: "Tozeur" },
    { nome: "Tunis" },
    { nome: "Zaghouan" },
  ];
  const [check, setCheck] = useState(false);
  const [login, setlogin] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [open4, setopen4] = useState(false);
  const [ModeLiv,setModeLiv] = useState();
  const [ModePay,setModePay] = useState();
  const [OpenFormAdr,setOpenFormAdr] = useState(false);
  console.log(ModeLiv,"aaaa")
  console.log(ModePay,"oooooo")
  console.log(OpenFormAdr)
  const handleChangeGouvernorat = (event) => {
    setGouvernorat(event.target.value);
  };

  const handleInputChange = (field) => {
    return (e) => {
      setAddresse((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };

  const checkedboxfilter = (event) => {
    setCheck(event.target.checked);
  };
  
  const data = [];
  const panier=useSelector(state=> state.Panier.panier)
  const commande = useSelector((state) => state.Commande.commande);
  const [totalHT, settotalHT] = React.useState(0);
  const calculTotalHT = () => {
    let total = 0;
    commande?.map((obj) => {
      total += obj.prix;
    });
    settotalHT(total);
  };
  React.useEffect(() => {
    calculTotalHT();
  }, [commande]);
  const clientData = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  const dispatch=useDispatch()
  useEffect(()=>{
      if(clientData===undefined){
        dispatch(getIdentiteClientt(props.user.id));
      }
  },[])
  const addresses=clientData?.client?.adresses
  
  return (
    <div className="Fc">
      <div>
        <p className="txt1-Fc">faire une commande</p>
      </div>
      <div className="row0-Fc">
        <div className="col0-Fc">
          <div className="blox-Fc">
            <div className="bloxrow-Fc">
              <div className="circule-Fc">
                <p>1</p>
              </div>
              <div className="txtwidth-Fc">
                <p className="txt2-Fc">Informations Personelles</p>
              </div>
              <div className="tick-Fc">
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>
            <div className={props.user.auth?"sousblox-Fc-none":"sousblox-Fc"}>
              <div className="row-Fc">
                <button
                  className="bnt0-Fc"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Déjà client? Connexion
                </button>
                <button
                  className="bnt1-Fc"
                  onClick={() => {
                    navigate("/Signup");
                  }}
                >
                  Nouveau client? Créez un compte
                </button>
              </div>
            </div>
          </div>

          <div className="blox-Fc">
            <div className="bloxrow-Fc" onClick={()=>setopen2(true)}>
              <div className="circule-Fc">
                <p>2</p>
              </div>
              <div  className="txtwidth-Fc">
                <p className="txt2-Fc">Adresses</p>
              </div>
              <div className="tick-Fc">
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>
            {addresses?.length != 0 ? (
              
              <div className={open2?"sousblox2-Fc":"sousblox2-Fc-none"}>
                <div className="txtwidth-Fc">
                  <p className="txt3-Fc">Mes adresses:</p>
                </div>

                {addresses?.map((obj, index) => (
                  <div className="rowmini-Fc">
                    <input type="Radio" className="radio-Fc" name="r0" value={obj.id}   />
                    <div className="colini-Fc">
                      <div>
                        <p className="txt4-Fc">{obj.Nom_de_adresse}</p>
                      </div>
                      <div>
                        <p className="txt5-Fc">{obj.Adresse},{obj.Gouvernorat},{obj.Ville},{obj.Code_postal}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rowmini-Fc">
                  <input type="Radio" className="radio-Fc" name="r0"  onChange={(e)=>{setOpenFormAdr(e.target.checked)}} />
                  <div>
                    <p className="txt4-Fc">Autre</p>
                  </div>
                </div>

                <div className={OpenFormAdr?"sousblox3-Fc":"sousblox3-Fc-none"}>
                  <br />

                  <div className="colini-Fc">
                    <div>
                      <p className="txt5-Fc">Adresse *</p>
                    </div>
                    <OutlinedInput
                      className="input-Fc"
                      onChange={handleInputChange("addr")}
                      value={addresse.addr}
                    />
                  </div>

                  <div className="colini-Fc">
                    <div>
                      <p className="txt5-Fc">Gouvernorat</p>
                    </div>
                    <Select
                      value={Gouvernorat}
                      onChange={handleChangeGouvernorat}
                      className="txt-select-page"
                      placeholder="Tunis"
                      style={{
                        width: "460px",
                        height: " 48px",
                        borderRadius: "8px",
                      }}
                    >
                      <MenuItem value="Tunis">
                        <em className="txt-select-page">Tunis</em>
                      </MenuItem>

                      {Gouvernora?.map((obj, key) => (
                        <MenuItem value={obj.nome} className="txt-select-page">
                          {obj.nome}
                        </MenuItem>
                      ))}
                    </Select>
                    <div></div>
                  </div>

                  <div className="colini-Fc">
                    <div>
                      <p className="txt5-Fc">Ville</p>
                    </div>
                    <OutlinedInput
                      className="input-Fc"
                      onChange={handleInputChange("Ville")}
                      value={addresse.Ville}
                    />
                  </div>

                  <div className="colini-Fc">
                    <div>
                      <p className="txt5-Fc">Code postal*</p>
                    </div>
                    <OutlinedInput
                      className="input-Fc"
                      onChange={handleInputChange("codepostal")}
                      value={addresse.codepostal}
                    />
                  </div>

                  <div className="colini-Fc">
                    <div>
                      <p className="txt5-Fc">Société</p>
                    </div>
                    <OutlinedInput
                      placeholder="Société"
                      className="input-Fc"
                      onChange={handleInputChange("Societe")}
                      value={addresse.Societe}
                    />
                  </div>
                  <div className="colini-Fc">
                    <div>
                      <p className="txt5-Fc">Numéro de TVA</p>
                    </div>
                    <OutlinedInput
                      placeholder="Numéro de TVA"
                      className="input-Fc"
                      onChange={handleInputChange("NuméroTVA")}
                      value={addresse.NuméroTVA}
                    />
                  </div>
                  <div>
                    <Grid item container spacing={1}>
                      <Checkbox
                        style={{ color: " #62B0E8" }}
                        onChange={checkedboxfilter}
                      />
                      <span>
                        <p className="Souviens-Fc">
                          Utiliser aussi cette adresse pour la facturation
                        </p>
                      </span>
                    </Grid>
                  </div>
                  <div className="endflex-Fc">
                    <button className="bntendflex-Fc">Continuer</button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="blox-Fc">
            <div className="bloxrow-Fc">
            
              <div className="circule-Fc" onClick={()=>setopen3(true)} >
                <p>3</p>
              </div>
              <div className="txtwidth-Fc">
                <p className="txt2-Fc">Mode de livraison</p>
              </div>

              <div className="tick-Fc">
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>

            <div className={open3?"colini-Fc":"colini-Fc-none"}>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r0"  value={"Fly Delivery - Mahdia"} onChange={(e)=>setModeLiv(e.target.value)}/>
                <div className="colini-Fc">
                  <div>
                    <p className="txt4-Fc">Fly Delivery - Mahdia</p>
                  </div>
                  <div>
                    <p className="txt5-Fc">Gratuit</p>
                  </div>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r0"  value={"Aramex - Toute la Tunisie"}  onChange={(e)=>setModeLiv(e.target.value)} />
                <div className="colini-Fc">
                  <div>
                    <p className="txt4-Fc">Aramex - Toute la Tunisie </p>
                  </div>
                  <div>
                    <p className="txt5-Fc">
                      7.50 DT (Livraison gratuite à partir de 300 DT d'achat)
                    </p>
                  </div>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r0" value={"Retrait en magasine"} onChange={(e)=>setModeLiv(e.target.value)} />
                <div className="colini-Fc">
                  <div>
                    <p className="txt4-Fc">Retrait en magasine </p>
                  </div>
                  <div>
                    <p className="txt5-Fc">
                      7.50 DT (Livraison gratuite à partir de 300 DT d'achat)
                    </p>
                  </div>
                </div>
              </div>
              <div className="endflex-Fc">
                <button className="bntendflex-Fc">Continuer</button>
              </div>
            </div>
          </div>

          <div className="blox-Fc">
            <div className="bloxrow-Fc"  onClick={()=>setopen4(true)}>
              <div className="circule-Fc4">
                <p>4</p>
              </div>
              <div className="txtwidth-Fc">
                <p className="txt2-Fc">Détails de paiement</p>
              </div>
              <div className="tick-Fc">
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>
             
            <div className={open4?"colini-Fc":"colini-Fc-none"}>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r0" value={"Paiement par carte bancaire à la livraison"} onChange={(e)=>setModePay(e.target.value)} />

                <div>
                  <p className="txt7-Fc">
                    Paiement par carte bancaire à la livraison{" "}
                    <span className="txt8-Fc"> (Sans disponible)</span>{" "}
                  </p>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r0" value={"Paiement par carte bancaire"} onChange={(e)=>setModePay(e.target.value)} />

                <div>
                  <p className="txt7-Fc">
                    Paiement par carte bancaire{" "}
                    <span className="txt8-Fc"> (Sans disponible)</span>
                  </p>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r0" value={"Payer comptant à la livraison"} onChange={(e)=>setModePay(e.target.value)}/>

                <div>
                  <p className="txt7-Fc">Payer comptant à la livraison</p>
                </div>
              </div>
              <div className="endflex-Fc">
                <button className="bntendflex-Fc">Continuer</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col20-Fc">
          <div>
            <p className="txt10-Fc">Liste des articles</p>
          </div>
          {panier.map((e)=>(
            <div className="row214-Fc">
            <div>
              <p>{e.qte}x</p>
            </div>
            <div>
              <img src={"http://127.0.0.1:8080/uploads/"+e.imgp} style={{ width: "40px", height: "40px" }}/>
            </div>
            <div>
              <p className="txt214-Fc">{e.titre}</p>
            </div>
          </div>
          ))}
          <div>
            <p className="txt10-Fc">Récapitulatif</p>
          </div>

          <div className="row200-Fc">
            <div className="col200-Fc">
              <div>
                {" "}
                <p className="txt101-Fc">Totale HT</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">Frais de port</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">Remise</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">Tax</p>
              </div>
            </div>

            <div className="col202-Fc">
              <div>
                {" "}
                <p className="txt101-Fc">{totalHT*1.07} dt</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">7.50 dt</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">{0} dt</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc"> 7%</p>
              </div>
            </div>
          </div>

          <div className="">
            <p className="txt10-Fc">Code de réduction</p>
            <div className="inpute_icon">
              <OutlinedInput
                placeholder="Entrer votre code"
                className="code-Fc"
              />
              <button className="btn_inputFc">
                <ArrowForwardIosIcon
                  style={{
                    width: "15px",
                    height: "15px",
                    color: "4B4B4B",
                    marginTop: "1px",
                    marginLeft: "-5px",
                  }}
                />
              </button>
            </div>
          </div>

          <div className="row200-Fc">
            <div className="col200-Fc">
              <div>
                {" "}
                <p className="txt10-Fc">Totale HT</p>
              </div>
            </div>

            <div className="col202-Fc">
              <div>
                {" "}
                <p className="txt101-Fc">{totalHT*1.07} dt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaireComonde;
