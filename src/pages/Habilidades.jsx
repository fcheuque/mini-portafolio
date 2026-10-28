import { Link } from 'react-router-dom';

function Habilidades() {
  const listaDestrezas = [
    { nombre: 'Inglés', nivel: '60%', desc: 'Lectura fluida de documentación técnica y comunicación escrita.' },
    { nombre: 'Python', nivel: '75%', desc: 'Desarrollo de scripts, automatización de tareas y análisis de datos básico.' },
    { nombre: 'Microsoft Word', nivel: '90%', desc: 'Creación de reportes formales, plantillas corporativas y automatización de correspondencia.' },
    { nombre: 'Microsoft Excel', nivel: '65%', desc: 'Manejo de tablas dinámicas, funciones avanzadas (BUSCARV, SI) y macros sencillas.' }
  ];

  return (
    <>
      <header>
        <Link to="/" className="logo">WebCh</Link>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Acerca de mi</Link></li>
            <li><Link to="/habilidades" className="active">Habilidades</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Mis Habilidades</h1>
          <p>Un resumen de mis principales destrezas técnicas y lingüísticas.</p>
        </section>

        <section className="grid-features">
          {listaDestrezas.map((item, index) => (
            <article key={index} style={{ marginBottom: '1rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-color)' }}>{item.nombre}</strong>
                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{item.nivel}</span>
              </div>
              <div style={{ backgroundColor: 'var(--bg-color)', height: '6px', borderRadius: '3px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', width: item.nivel, height: '100%' }}></div>
              </div>

              <p style={{ fontSize: '0.9rem', margin: '0' }}>{item.desc}</p>
            </article>
          ))}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Habilidades;
