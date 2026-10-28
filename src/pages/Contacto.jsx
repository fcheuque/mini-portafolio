function Contacto() {
    return <>

    <header>
        <div class="logo">
            <a href="index.html">WebCh</a>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="nosotros.html">Acerca de mi</a></li>
                <li><a href="contacto.html" class="active">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero" style="background: linear-gradient(135deg, #0070f3 0%, #054f5e 100%);">
            <h1>Contáctanos</h1>
            <p>¿Tienes dudas o algún proyecto en mente? Escríbenos y te responderemos lo antes posible.</p>
        </section>

        <section class="features" style="max-width: 600px; margin: 0 auto;">
            <div class="card">
                <form action="#" method="POST" class="contact-form">
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                        <label for="nombre" style="display:block; margin-bottom:0.5rem; font-weight:600;">Nombre</label>
                        <input type="text" id="nombre" name="nombre" required style="width:100%; padding:0.8rem; border:1px solid #ccc; border-radius:5px;">
                    </input>
                    </div>
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                        <label for="correo" style="display:block; margin-bottom:0.5rem; font-weight:600;">Correo Electrónico</label>
                        <input type="email" id="correo" name="correo" required style="width:100%; padding:0.8rem; border:1px solid #ccc; border-radius:5px;">
                        </input>
                    </div>
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                        <label for="mensaje" style="display:block; margin-bottom:0.5rem; font-weight:600;">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="5" required style="width:100%; padding:0.8rem; border:1px solid #ccc; border-radius:5px; resize:vertical;"></textarea>
                    </div>
                    <button type="submit" class="btn" style="background-color:#0070f3; color:#fff; border:none; width:100%; cursor:pointer;">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
    </footer>

</>
}
export default Contacto