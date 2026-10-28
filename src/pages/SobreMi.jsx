function SobreMi() {
    return <>

    <header>
        <div class="logo">
            <a href="index.html">WebCh</a>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="nosotros.html" class="active">Acerca de mi</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('assets/img/mi-foto.jpg'); background-size: cover; background-position: center; color: white;">
            <h1>Quien soy</h1>
            <p>Soy un estudiante de ingenieria en informatica de la universidad catolica de temuco.</p>
        </section>

        <section class="features">
            <h2>Mis proyectos y hobbies</h2>
            <div class="grid">
                <article class="card">
                    <h3>Hobbies</h3>
                    <p>VoleyBall Ping-Pong Python Mysql AWS y más</p>
                </article>
                <article class="card">
                    <h3>Mi Visión</h3>
                    <p>Este proyecto esta destinado a futuros creadores de contenido o proyectos como pymes.</p>
                </article>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
    </footer>

</>
}
export default SobreMi