
import './App.css'
import NavBar from './components/navBar/NavBar';
import Homepage from './Pages/HomePage/Homepage';
import Whyus from './components/whyUspage/Whyus';
import Sap from './components/sapService/Sap';
import Slidebar from './components/slide/Slidebar';
import Saptech from './components/sapTech/Saptech';
import Sapsupport from './components/maintain/Sapsupport';
import Unlock from './components/connectivity/Unlock';
import Lastpage from './components/lastPage/Lastpage';


function App() {
 

  return (
    <>
    <NavBar/>
    <Homepage/>
    <Whyus></Whyus>
    <Sap/>
    <Slidebar/>
    <Saptech></Saptech>
    <Sapsupport></Sapsupport>
    <Unlock></Unlock>
    <Lastpage></Lastpage>
  </>
  )
}

export default App
