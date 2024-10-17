import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home';
import Emulsion from './Pages/ClustersPages/Emulsion';
import AllEvents from './Pages/EventsPages/AllEvents';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Emulsion' element={<Emulsion />} />
        <Route path='/AllEvents' element={<AllEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

