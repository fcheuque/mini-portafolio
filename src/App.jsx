import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';
import Habilidades from './pages/Habilidades';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<SobreMi />} />
      <Route path="/habilidades" element={<Habilidades />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
