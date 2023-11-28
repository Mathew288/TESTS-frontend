import { Link } from "react-router-dom";
import logo from '../assets/Logo-biogest.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom';



const NavBar = () => {

    const { pathname } = useLocation();

    return(
        <header className="bg-indigo-600 flex flex-col p-5 items-center justify-between
        md:flex-row">
            <Link to='/' className="text-white">
                <img src={logo} alt={""} className="h-[80px]"/>

            </Link>

            <nav className="flex gap-5 items-center justify-center">
                <ul className="flex flex-col items-center justify-center gap-1 sm:gap-5 m-5 sm:flex-row">

                    <li className={pathname=='/agendar_cita'?'item-selected list-item':'list-item'}>
                        <Link to='/agendar_cita' className="text-white">Agendar cita</Link>
                    </li>
                    
                    <li className={pathname=='/historial_medico'?'item-selected list-item':'list-item'}>
                        <Link to='/historial_medico' className="text-white">Historial médico</Link>
                    </li>
                    <li className={pathname=='/login'?'item-selected list-item':'list-item'}>
                        <Link to='/login' className="text-white">Iniciar sesión</Link>
                    </li>
                    <li className={pathname=='/signup'?'item-selected list-item':'list-item'}>
                        <Link to='/signup' className="text-white">Registrarse</Link>
                    </li>
            
                </ul>

            </nav>
        </header>
    )
}

export default NavBar;