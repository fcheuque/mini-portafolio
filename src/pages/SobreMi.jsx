import { Link } from 'react-router-dom';

function SobreMi() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">WebCh</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros" className="active">Acerca de mi</Link></li>
            <li><Link to="/habilidades">Habilidades</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section 
          className="hero" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/img/mi-foto.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            color: 'white' 
          }}
        >
          <h1>Quién soy</h1>
          <p>Soy un estudiante de ingeniería en informática de la Universidad Católica de Temuco.</p>
        </section>

        <section className="features">
          <h2>Mis proyectos y hobbies</h2>
          <div className="grid">
            <article className="card">
              <h3>Hobbies</h3>
              <p>VoleyBall, Ping-Pong, Python, MySQL, AWS y más.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default SobreMi;
