import { Link } from 'react-router-dom';

function Proyectos() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">WebCh</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Acerca de mi</Link></li>
            <li><Link to="/habilidades">Habilidades</Link></li>
            <li><Link to="/proyectos" className="active">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Mis Proyectos</h1>
          <p>Un espacio donde comparto mis desarrollos técnicos y colaboraciones.</p>
        </section>

        <section className="grid-features">
          <article style={{ textAlign: 'left' }}>
            <h3>EID1 - Juego arcade</h3>
            <p><strong>Proyecto de VideoJuego con funciones sinusoidales.</strong></p>
            <p>Este proyecto fue creado en grupo; es un videojuego de naves desarrollado en Python que integra conceptos y funciones matemáticas para el comportamiento y movimiento en pantalla.</p>
            
            <a 
              href="https://github.com/benjamin-leal/EID_2026" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
              style={{ marginTop: '1rem', display: 'inline-block', textAlign: 'center' }}
            >
              Ver Repositorio en GitHub
            </a>
          </article>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Proyectos;
