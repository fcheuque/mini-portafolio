function Inicio() {
    return <body>
    <header>
        <a href="index.html" class="logo">WebCh</a>
        <nav>
            <ul>
                <li><a href="index.html" class="active">Inicio</a></li>
                <li><a href="nosotros.html">Acerca de mi</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        
        <section class="hero">
            <h1>Bienvenido a mi sitio web</h1>
            <p>Felipe Cheuque.</p>
            <a href="contacto.html" class="btn">Saber más</a>
        </section>

        <section class="grid-features">
            <article>
                <h3>Explora mi sitio web!!</h3>
                <p>Creado con Vite y React.</p>
            </article>
        </section>

    </main>

    <footer>
        <p>&copy; 2026 WebCh. Todos los derechos reservados.</p>
    </footer>

</body>
}
export default Inicio