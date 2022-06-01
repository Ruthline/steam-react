import '../header/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../header/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons';
function Header(){


    return(

        <header>
            <div className="header-index">
                    
                <div className="nav-group">
                    
                    <Link to="/home" className="one-nav"><img src={Logo}></img></Link>

                    <div class="dropdown ">
                        <div class="dropbtn two-nav item sin-login2"><FontAwesomeIcon icon={faCircleUser} /></div>
                        <div class="dropdown-content">
                        <Link to="/profesores">Profesores</Link>
                        <Link to="/estudiantes">Estudiantes</Link>
                        </div>
                    </div>
                    
                    <label for="clic-menu" className="three-nav" href="meni" ><FontAwesomeIcon icon={faBars}/></label>
                    <input type="checkbox" id="clic-menu"></input>
                    

                    
                    <div className="items" >
                    <Link to="/home" className="four-nav item" >Home</Link>
                    <Link to="/steam"  className="five-nav item">STEAM</Link>
                    <Link to="/ferias" className="six-nav item">Ferias</Link>
                    <Link to="/haz-parte" className="seven-nav item">¡Haz parte!</Link>
                    <button className="eight-nav item"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>

                   <div class="dropdown">
                   <div class="dropbtn two-nav item sin-login"><FontAwesomeIcon icon={faCircleUser} /></div>
                        <div class="dropdown-content">
                        <Link to="/profesores">Profesores</Link>
                        <Link to="/estudiantes">Estudiantes</Link>
                        </div>
                    </div>
                    
                    
                    </div>
                </div>
                <div  className="banner-index ">
            </div>
            </div>

            
        </header>

    );
}
export default Header;