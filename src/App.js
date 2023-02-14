
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Navbar from './components/Navbar';
import HillStations from './pages/HillStations';
import About from './pages/About';
import BestOffers from './pages/BestOffers/bestOffers';
import OurSites  from './pages/OurSites/OurSites';
import Contact  from './pages/Contact/Contact';

function App() {
  return (
    <>
      {/* <h1>Hello World!</h1> */}
      {/* <Home /> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/hillstations' element={<HillStations />} />
          <Route path='/about' element={<About />} />
          <Route path='/bestoffers' element={<BestOffers />} />
          <Route path='/oursites' element={<OurSites />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
