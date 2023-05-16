
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Landingpage/Home/index'
// import About from './Landingpage/About/index'
import Workflow from './Landingpage/Workflow/index'
import Activities from './Landingpage/Activities/index'
import Team from './Landingpage/Team/index'
// import Contact from './Landingpage/Contact/index'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/workflow" element={<Workflow/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/team" element={<Team/>}/>
      {/* <Route path="/contact" element={<Contact/>}/> */}
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
