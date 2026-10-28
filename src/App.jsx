import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';
import Inicio from './pages/Inicio'; 
import Contacto from './pages/Contacto';
import Habilidades from './pages/Habilidades';
import Proyectos from './pages/Proyectos';
import SobreMi from './pages/SobreMi';
function Layout() {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/about">SobreMi</Link> |{" "}
                <Link to="/about">Proyectos</Link> |{" "}
                <Link to="/about">Habilidades</Link> |{" "}
                <Link to="/contact">Contacto</Link>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                <p> Felipe Cheuque 2026</p>
            </footer>
        </>
    );
}


function App() {
    return (
        <BrowserRouter>
          <Route path="/" element={<Layout />}>
            <nav>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/about">SobreMi</Link> |{" "}
                <Link to="/about">Proyectos</Link> |{" "}
                <Link to="/about">Habilidades</Link> |{" "}
                <Link to="/contact">Contacto</Link>
            </nav>
          </Route>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/" element={<SobreMi />} />
                <Route path="/" element={<Proyectos />} />
                <Route path="about" element={<Habilidades />} />
                <Route path="contact" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;