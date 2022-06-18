import './Nav.css';
import { Link } from 'react-router-dom'
function Navbar(){
return(
    <nav>
    <ul id="desplegable">
    <li>
    <Link to="/steam-react/estudiantes/dashboard/">
      <span><i class="fa-solid fa-house icons"></i>
      <h3>Home</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/steam-react/estudiantes/calendar">
      <span> <i class="fa-solid fa-calendar icons"></i>
      <h3 className="navtitle">Calendario</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/steam-react/estudiantes/courses">
      <span> <i class="fa-solid fa-book icons"></i> 
      <h3 className="navtitle">Cursos</h3>
      </span>
    </Link>
  </li>

  <li>
    <Link to="/steam-react/estudiantes/resources">
      <span> <i class="fa-solid fa-laptop-file icons"></i>
      <h3 className="navtitle">Recursos</h3>
      </span>
    </Link>
  </li>
</ul>
</nav>
)
}

export default Navbar