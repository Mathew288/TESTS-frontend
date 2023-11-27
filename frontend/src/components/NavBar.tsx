import { Link } from "react-router-dom";
import logo from '../assets/Logo-biogest.png'


const NavBar = () => {
    return(
        <header className="bg-indigo-600 flex p-5 justify-between">
            <Link to='/' className="text-white">
                <img src={logo} alt={""} className="h-[80px]"/>

            </Link>

            <nav className="flex gap-5 items-center justify-center">
                <ul className="flex gap-5">
                    <li>
                        <Link to='/agendar_cita' className="text-white">Agendar cita</Link>
                    </li>
                    
                    <li>
                        <Link to='/historial_medico' className="text-white">Historial médico</Link>
                    </li>
                    <li>
                        <Link to='/login' className="text-white">Iniciar sesión</Link>
                    </li>
                    <li>
                        <Link to='/signup' className="text-white">Registrarse</Link>
                    </li>
            
                </ul>

            </nav>
        </header>
    )
}

export default NavBar;