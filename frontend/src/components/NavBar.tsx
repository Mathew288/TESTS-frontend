import { Link } from "react-router-dom";
import logo from '../assets/Logo-biogest.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ButtonNav } from "./UI/Button";



const NavBar = () => {

    const { pathname } = useLocation();
    const token = sessionStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (token) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }

    }, [isLoggedIn, token])


    return (
        <header className="bg-indigo-600 flex flex-col p-5 items-center justify-between
        md:flex-row">
            <Link to='/' className="text-white">
                <img src={logo} alt={""} className="h-[80px]" />

            </Link>

            <nav className="flex gap-5 items-center justify-center">
                <ul className="flex flex-col items-center justify-center gap-1 sm:gap-5 m-5 sm:flex-row">

                    <Link to='/agendar_cita' className={pathname == '/agendar_cita' ? 'item-selected list-item' : 'list-item'}>Agendar cita</Link>
                    <Link to='/historial_medico' className={pathname == '/historial_medico' ? 'item-selected list-item' : 'list-item'}>Historial médico</Link>

                    {token ? (
                        <>
                            <ButtonNav
                                onClick={() => {
                                    sessionStorage.setItem('token', '');
                                    window.location.reload();

                                }}
                            >
                                Cerrar sesión
                            </ButtonNav>

                        </>
                    ) : (
                        <>
                            <Link to='/login' className={pathname == '/login' ? 'item-selected list-item' : 'list-item'}>Iniciar sesión</Link>
                            <Link to='/signup' className={pathname == '/signup' ? 'item-selected list-item' : 'list-item'}>Registrarse</Link>
                        </>
                    )}





                </ul>

            </nav>
        </header>
    )
}

export default NavBar;