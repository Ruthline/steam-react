import './Nav.css';
import { Link } from 'react-router-dom'
function Navbar(){
return(
    <nav>
    <ul id="desplegable">
    <li>
    <Link to="/dashboard">
      <span><i class="fa-solid fa-house icons"></i>
      <h3>Home</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/calendar">
      <span> <i class="fa-solid fa-calendar icons"></i>
      <h3 className="navtitle">Calendario</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/courses">
      <span> <i class="fa-solid fa-book icons"></i> 
      <h3 className="navtitle">Cursos</h3>
      </span>
    </Link>
  </li>

  <li>
    <Link to="/resources">
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