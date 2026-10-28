import { Link } from 'react-router-dom'; 

function Inicio() {
  return (
    <>
      <header>
        <Link to="/" className="logo">WebCh</Link>
        <nav>
          <ul>
            <li><Link to="/" className="active">Inicio</Link></li>
            <li><Link to="/nosotros">Acerca de mi</Link></li>
            <li><Link to="/habilidades">Habilidades</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bienvenido a mi sitio web</h1>
          <p>Felipe Cheuque.</p>
          <Link to="/contacto" className="btn">Saber más</Link>
        </section>

        <section className="grid-features">
          <article>
            <h3>Explora mi sitio web!!</h3>
            <p>Creado con Vite y React.</p>
          </article>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Inicio;
