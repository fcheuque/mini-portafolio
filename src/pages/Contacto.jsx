import { Link } from 'react-router-dom';

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
  };

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
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto" className="active">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section 
          className="hero" 
          style={{ background: 'linear-gradient(135deg, #0070f3 0%, #054f5e 100%)' }}
        >
          <h1>Contáctanos</h1>
          <p>¿Tienes dudas o algún proyecto en mente? Escríbenos y te responderemos lo antes posible.</p>
        </section>

        <section className="features" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card">
            <form onSubmit={handleSubmit} className="contact-form">
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  required 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #4b2461', borderRadius: '5px' }} 
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="correo" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Correo Electrónico</label>
                <input 
                  type="email" 
                  id="correo" 
                  name="correo" 
                  required 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #481d53', borderRadius: '5px' }} 
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="5" 
                  required 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #440f9b', borderRadius: '5px', resize: 'vertical' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn" 
                style={{ backgroundColor: '#98acc2', color: '#691c65', border: 'none', width: '100%', cursor: 'pointer' }}
              >
                Enviar Mensaje
              </button>

            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Contacto;

