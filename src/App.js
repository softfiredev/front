import './App.css'
import NavBar from './components/NavBar/NavBar'
import Login from './Pages/login/Login'
import Signup from './Pages/signup/SignUp'
import Footer from './components/footer/Footer'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
  return (
    <>
 <NavBar/>
 <Router>
   <Routes>
   <Route path='/Login' element={ <Login/>} />
   <Route path='/Signup' element={ <Signup/>} />
   </Routes>
 </Router>
<Footer/>
    </>
  )
}

export default App