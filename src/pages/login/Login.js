import {Link} from 'react-router-dom';
import logotipo from '../../Components/header/logotipo.svg'
import BotonV from '../../Components/login/BotonV/BotonV';
import './Login.css'
function Login(){
    return(
        <section id="login">
        <div class="images-login">
            <img src={logotipo} alt="Logotipo" className="logo"></img>
        </div>

        <div class="form-login">
            <h2>Login</h2>
            <form>
            <div class="form-group">
                <label for="usuario" class="form-label">Usuario</label>
                <input  class="form-input" type="text" name="usuario" id="usuario" required />
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Contraseña</label>
                <input  class="form-input" type="password" name="password" id="password" required />
            </div>
            <div class="botons">
                <Link to="/dashboard">
                <BotonV />
                </Link>
                
            </div>
            </form>
    
        </div>
        
    </section>
    );
}

export default Login;