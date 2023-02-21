import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'
import Login from './Pages/login/Login'
import Newpassword from './Pages/new-password/new-password'
import Contact from './Pages/Contact/Contact'
import Signup from './Pages/signup/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
 
 <BrowserRouter>
 <NavBar/>
   <Routes>
   <Route path='Login' element={ <Login/>} />
   <Route path='Signup' element={ <Signup/>} />
   <Route path='New_password' element={ <Newpassword/>} />
   <Route path='Contact' element={ <Contact/>} />
   <Route path='*' element={ <> page not !!!</>} />
   </Routes>
   <Footer/>
 </BrowserRouter>
 
    </>
  )
}

export default App