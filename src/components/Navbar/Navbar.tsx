import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <section className="user">
                <img src="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?semt=ais_hybrid&w=740" alt="" />
                <p>Andy Vallejos</p>
            </section>
            <ul>
                Menu
                <li>
                   <img src="/schedule.png" alt="icono de la seccion principal" />
                   <p>Calendario</p>
                </li>
                    <li>
                   <img src="/clock.png" alt="icono de la seccion principal" />
                   <p>Horario</p>
                </li>
                    <li>
                   <img src="/estilo-de-vida-saludable.png" alt="icono de la seccion principal" />
                   <p>Habitos</p>
                </li>
                <li>
                   <img src="/tarea.png" alt="icono de la seccion principal" />
                   <p>Tareas</p>
                </li>
                Ajustes
                <li>
                   <img src="/config.png" alt="icono de la seccion principal" />
                   <p>Configuraciones</p>
                </li>
            </ul>
        </div>
    )
}  