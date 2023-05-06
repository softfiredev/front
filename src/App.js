import "./App.css";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";
import Toast from "./components/toast/Toast";
import Spinier from "./components/spinier/Spinier";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const DetailLivr = lazy(() =>
  import("./components/Liste-de-livraisons/composentliste/DetailLivr")
);
const Factorisation = lazy(() =>
  import("./components/vender-Factorisation/Factorisation")
);
const Approvisionner = lazy(() =>
  import("./components/vender-Approvisionner/Approvisionner")
);
const Listecommandes = lazy(() =>
  import("./components/Liste-commandes-vender/Listecommandes")
);
const Listeivraisons = lazy(() =>
  import("./components/Liste-de-livraisons/Listeivraisons")
);
const VenderProfile = lazy(() =>
  import("./components/profile-vender/VenderProfile")
);
const Detailcomnder = lazy(() =>
  import("./components/Liste-commandes-vender/composentliste/Detailcomnder")
);
const Categorie = lazy(() =>
  import("./components/VenderPage/categorie/categorie")
);
const Inventaire = lazy(() =>
  import("./components/vender-Inventaire/Inventaire")
);
const Points = lazy(() =>
  import("./components/composot-Profile/page5-profile/Points")
);
const TableauDuBord = lazy(() =>
  import("./components/VenderPage/TableauDuBord/TableauDuBord")
);
const Dachats = lazy(() =>
  import("./components/composot-Profile/page5-profile/Bon dachats/Dachats")
);
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Home = lazy(() => import("./Pages/home/Home"));
const Resetpassword = lazy(() => import("./Pages/new-password/Resetpassword"));
const Shop = lazy(() => import("./Pages/shop/shop"));
const Login = lazy(() => import("./Pages/login/Login"));
const Newpassword = lazy(() => import("./Pages/new-password/new-password"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Signup = lazy(() => import("./Pages/signup/SignUp"));
const AboutUs = lazy(() => import("./Pages/About-Us/AboutUs"));
const Detailprod = lazy(() => import("./Pages/Detail-prod/Detail-prod"));
const BecomePartner = lazy(() =>
  import("./Pages/Become-a-Partner/Become_a_Partner")
);
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const LibrairieProfile = lazy(() =>
  import("./Pages/librairieProfile/librairieProfile")
);
const Page1_profile = lazy(() =>
  import("./components/composot-Profile/page-profile/Page")
);
const Page2_profile = lazy(() =>
  import("./components/composot-Profile/page2-profile/Page2")
);
const Commandes = lazy(() =>
  import("./components/composot-Profile/page3-profile/Commandes")
);
const Avis = lazy(() =>
  import("./components/composot-Profile/page4-profile/Avis")
);
const Vender = lazy(() => import("./Pages/vender/vender"));

function App() {
  const LoginServiceData = useSelector((state) => state.loginservice);
  const googleServiceData = useSelector((state) => state.Googleservice);
  const accessToken=  LoginServiceData.isLogin === true && googleServiceData.isLogin === false ? LoginServiceData.accessToken:googleServiceData.accessToken
  const refreshToken=  LoginServiceData.isLogin === true && googleServiceData.isLogin === false ? LoginServiceData.accessToken:googleServiceData.accessToken
  if(accessToken?.length!==0){
    var decoded = jwt_decode(accessToken);
  }
  const user = {
    id: decoded?.id,
    auth:
      LoginServiceData.isLogin === true && googleServiceData.isLogin === false
        ? LoginServiceData.isLogin
        : googleServiceData.isLogin,
    fullname:decoded?.fullname,
    role:decoded?.role,
    avatar:decoded?.avatar
  };
  
 
  

 
  
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinier />}>
          <NavBar user={user} />
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/New_password" element={<Newpassword />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/BecomePartner" element={<BecomePartner />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Detailproduit/:id" element={<Detailprod user={user}/>} />
            <Route path="/cart" element={<Cart user={user}/>} />
            <Route
              path="/librairieProfile/:id"
              element={<LibrairieProfile />}
            />
            <Route path="/Profile" element={<Profile user={user} />}>
              <Route path="/Profile/Monidentité" element={<Page1_profile user={user}  />} />
              <Route path="/Profile/Favoris" element={<Page2_profile user={user}   />} />
              <Route path="/Profile/Commandes" element={<Commandes user={user}   />} />
              <Route path="/Profile/Avis" element={<Avis user={user} />} />
              <Route path="/Profile/MesPoints" element={<Points user={user}  />}>
                <Route
                  path="/Profile/MesPoints/Bondachats"
                  element={<Dachats />}
                />
                <Route
                  path="/Profile/MesPoints"
                  element={<Navigate to="/Profile/MesPoints/Bondachats" />}
                />
              </Route>
              <Route
                path="/Profile"
                element={<Navigate to="/Profile/Monidentité" />}
              />{" "}
            </Route>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route
              path="/reset-password/:id/:token"
              element={<Resetpassword />}
            />
            <Route path="/Vender" element={<Vender />}>
              <Route path="/Vender" element={<TableauDuBord />} />
              <Route path="/Vender/categorie" element={<Categorie />} />
              <Route path="/Vender/Inventaire" element={<Inventaire />} />
              <Route
                path="/Vender/Liste_de_commandes"
                element={<Listecommandes />}
              />
              <Route
                path="/Vender/Détails_de_commande/:id"
                element={<Detailcomnder />}
              />
              <Route
                path="/Vender/Détails_de_livraison/:id"
                element={<DetailLivr />}
              />
              <Route path="/Vender/Profile" element={<VenderProfile />} />
              <Route
                path="/Vender/Liste_de_Livraisons"
                element={<Listeivraisons />}
              />
              <Route
                path="/Vender/Approvisionner"
                element={<Approvisionner />}
              />
              <Route path="/Vender/Factorisation" element={<Factorisation />} />
            </Route>
            <Route path="*" element={<> page not !!!</>} />
          </Routes>
        </Suspense>
        <Toast />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
