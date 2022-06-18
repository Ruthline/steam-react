import '../header/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../header/logotipo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(
        <header>
        <div className="header-index">
                
            <div className="nav-group">
                
                <Link to="/home" className="one-nav"><img src={Logo} alt=""></img></Link>

                <div class="dropdown ">
                    <div class="dropbtn two-nav item sin-login2"><FontAwesomeIcon icon={faCircleUser} /></div>
                    <div class="dropdown-content">
                    <Link to="/profesores">Profesores</Link>
                    <Link to="/estudiantes">Estudiantes</Link>
                    </div>
                </div>
                
                <label for="clic-menu" className="three-nav" href="meni" ><FontAwesomeIcon icon={faBars}/></label>
                <input type="checkbox" id="clic-menu"></input>
                

                
                <div className="items-home" >
                    <div className='eight-nav item search-o'>
                        <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                        <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    </div>
                
                <Link to="/home" className="four-nav item" >Home</Link>
                <Link to="/steam"  className="five-nav item">STEAM</Link>
                <Link to="/ferias" className="six-nav item">Ferias</Link>
                <Link to="/haz-parte" className="seven-nav item">¡Haz parte!</Link>
                <div className='eight-nav item search-o s-s'>
                        <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                        <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </div>

               <div class="dropdown">
               <div class="dropbtn two-nav item sin-login"><FontAwesomeIcon icon={faCircleUser} /></div>
                    <div class="dropdown-content">
                    <Link to="/profesores">Profesores</Link>
                    <Link to="/estudiantes">Estudiantes</Link>
                    </div>
                </div>
                
                
                </div>
            </div>
            
        </div>

        
    </header>

    );
}
export default Header;