import { Link } from "react-router-dom";
import logo from '../assets/Logo-biogest.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom';



const NavBar = () => {

    const { pathname } = useLocation();

    return (
        <header className="bg-indigo-600 flex flex-col p-5 items-center justify-between
        md:flex-row">
            <Link to='/' className="text-white">
                <img src={logo} alt={""} className="h-[80px]" />

            </Link>

            <nav className="flex gap-5 items-center justify-center">
                <ul className="flex flex-col items-center justify-center gap-1 sm:gap-5 m-5 sm:flex-row">

                    <li >
                        <Link to='/agendar_cita' className={pathname == '/agendar_cita' ? 'item-selected list-item' : 'list-item'}>Agendar cita</Link>
                    </li>

                    <li >
                        <Link to='/historial_medico' className={pathname == '/historial_medico' ? 'item-selected list-item' : 'list-item'}>Historial médico</Link>
                    </li>
                    <li>
                        <Link to='/login' className={pathname == '/login' ? 'item-selected list-item' : 'list-item'}>Iniciar sesión</Link>
                    </li>
                    <li >
                        <Link to='/signup' className={pathname == '/signup' ? 'item-selected list-item' : 'list-item'}>Registrarse</Link>
                    </li>

                </ul>

            </nav>
        </header>
    )
}

export default NavBar;