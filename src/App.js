import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'
import Login from './Pages/login/Login'
import New_password from './Pages/new-password/new-password'
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
   <Route path='New_password' element={ <New_password/>} />
   <Route path='*' element={ <> page not !!!</>} />
   </Routes>
   <Footer/>
 </BrowserRouter>
 
    </>
  )
}

export default App