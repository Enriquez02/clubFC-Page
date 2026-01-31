
import Navbar from "./components/navBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from "./pages/Contacto";
import { Vitrina } from "./pages/Vitrina";
import Calendario from "./pages/Calendario";

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vitrina" element={<Vitrina />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/calendario" element={<Calendario />} />

    </Routes>
     
    </BrowserRouter>
  )
}

export default App
