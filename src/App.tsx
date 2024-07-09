
import './App.css'
import NavBar from './components/navBar/NavBar';
import Homepage from './Pages/HomePage/Homepage';
import Whyus from './components/whyUspage/Whyus';
import Sap from './components/sapService/Sap';
import Slidebar from './components/slide/Slidebar';
import Saptech from './components/sapTech/Saptech';

function App() {
 

  return (
    <>
   <NavBar/>
  <Homepage/>
  <Whyus></Whyus>
  <Sap/>
 <Slidebar/>
 <Saptech></Saptech>
  </>
  )
}

export default App
