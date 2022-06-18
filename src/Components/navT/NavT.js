import './Nav.css';
import { Link } from 'react-router-dom'
function NavbarT(){
return(
    <nav>
    <ul id="desplegable">
    <li>
    <Link to="/profesores/dashboardTeacher">
      <span><i class="fa-solid fa-house icons"></i>
      <h3>Home</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/profesores/calendarTeacher">
      <span> <i class="fa-solid fa-calendar icons"></i>
      <h3 className="navtitle">Calendario</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/profesores/coursesTeacher">
      <span> <i class="fa-solid fa-book icons"></i> 
      <h3>Cursos</h3>
      </span>
    </Link>
  </li>

  <li>
    <Link to="/profesores/resources">
      <span> <i class="fa-solid fa-laptop-file icons"></i>
      <h3>Recursos</h3>
      </span>
    </Link>
  </li>
</ul>
</nav>
)
}

export default NavbarT