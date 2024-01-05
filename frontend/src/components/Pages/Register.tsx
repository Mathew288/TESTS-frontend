import { Link } from 'react-router-dom';
import './Login.css'
import { ButtonLogin } from '../UI/Button';
import { Input } from '../UI/Input';
import Span from '../UI/Span';

function Register() {
    return (
        <section id='container_login'>
            <section id="image-side" className="w-auto h-auto flex flex-col items-center justify-center">
                <h1 className='text-white text-3xl text text-center'>Somos lo mejor en calidad</h1>
                <Span>Inicia sesión para acceder a todas nuestras funcionalidades</Span>
            </section>

            <form id="form_login">
                <Input type="text" placeholder="Nombres" />
                <Input type="text" placeholder="Apellidos" />
                <Input type="email" placeholder="Correo electrónico" />
                <Input type="password" placeholder="Contraseña" />


                <ButtonLogin>
                    Registrarse
                </ButtonLogin>
                <a href="" className="text-center">¿Ya tienes una cuenta? <Link className='font-bold text-blue-700' to={'/login'}>Inicia sesión</Link></a>
            </form>

        </section>
    );
}

export default Register;