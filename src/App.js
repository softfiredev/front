import './App.css'
import React,{ lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Toast from './components/toast/Toast'
import Spinier from './components/spinier/Spinier'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'
const Profile = lazy(() => import('./Pages/Profile/Profile')); 
const Home = lazy(() => import('./Pages/home/Home')); 
const Resetpassword = lazy(() => import('./Pages/new-password/Resetpassword')); 
const Shop = lazy(() => import('./Pages/shop/shop')); 
const Login = lazy(() => import('./Pages/login/Login')); 
const Newpassword = lazy(() => import('./Pages/new-password/new-password')); 
const Contact = lazy(() => import('./Pages/Contact/Contact')); 
const Signup = lazy(() => import('./Pages/signup/SignUp')); 
const AboutUs = lazy(() => import('./Pages/About-Us/AboutUs')); 
const Detailprod = lazy(() => import('./Pages/Detail-prod/Detail-prod')); 
const BecomePartner = lazy(() => import('./Pages/Become-a-Partner/Become_a_Partner')); 
const Cart = lazy(() =>import ( './Pages/Cart/Cart')); 
const LibrairieProfile = lazy(() =>import ( './Pages/librairieProfile/librairieProfile'));

const Page1_profile = lazy(() =>import ( './components/composot-Profile/page-profile/Page'));
const Page2_profile = lazy(() =>import ( './components/composot-Profile/page2-profile/Page2'));

function App() {
  return (
    <>
   

 <BrowserRouter>
 <NavBar/>
 <Suspense fallback={<Spinier />}>
   <Routes>
  
   <Route path='/Login' element={ <Login/>} />
   <Route path='/Signup' element={ <Signup/>} />
   <Route path='/New_password' element={ <Newpassword/>} />
   <Route path='/Contact' element={ <Contact/>} />
   <Route path='/AboutUs' element={ <AboutUs/>} />
   <Route path='/BecomePartner' element={ <BecomePartner/>} />
   <Route path='/Shop' element={ <Shop/>} />
   <Route path='/Detailproduit/:id' element={ <Detailprod/>} />
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/librairieProfile/:id' element={<LibrairieProfile/>}/>
   <Route path='/Profile' element={<Profile/>}>
   <Route path='/Profile/Monidentité' element={<Page1_profile/>}/>
   <Route path='/Profile/Comonde' element={<Page2_profile/>}/>
   <Route path="/Profile" element={ <Navigate to="/Profile/Monidentité" /> } />
    </Route>
    <Route path="/" element={ <Navigate to="/Home" /> } />

   <Route path='/Home' element={<Home/>}/>
   <Route path='/reset-password/:id/:token' element={<Resetpassword/>}/>
   
  <Route path='*' element={ <> page not !!!</>} />
   </Routes>
   </Suspense>
   <Toast/>
   <Footer/>
 </BrowserRouter>



    </>
  )
}

export default App