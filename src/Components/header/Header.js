import '../header/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../header/logotipo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons';
function Header(){


    return(

        <header>
            <div classNameName="header-index">
                    
                <div className="nav-group">
                    
                    <Link to="/home" className="one-nav"><img src={Logo} alt="logo"></img></Link>

                    <div className="dropdown ">
                        <div className="dropbtn two-nav item sin-login2"><FontAwesomeIcon icon={faCircleUser} /></div>
                        <div className="dropdown-content">
                        <Link to="/steam-react/profesores">Profesores</Link>
                        <Link to="/steam-react/estudiantes">Estudiantes</Link>
                        </div>
                    </div>
                    
                    <label for="clic-menu" className="three-nav" href="meni" ><FontAwesomeIcon icon={faBars}/></label>
                    <input type="checkbox" id="clic-menu"></input>
                    

                    
                    <div className="items-home" >
                    <Link to="/home" className="four-nav item-home" >Home</Link>
                    <Link to="/steam"  className="five-nav item-home">STEAM</Link>
                    <Link to="/ferias" className="six-nav item-home">Ferias</Link>
                    <Link to="/haz-parte" className="seven-nav item-home">¡Haz parte!</Link>
                    <button className="eight-nav item-home"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>

                   <div className="dropdown">
                   <div className="dropbtn two-nav item sin-login"><FontAwesomeIcon icon={faCircleUser} /></div>
                        <div className="dropdown-content">
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