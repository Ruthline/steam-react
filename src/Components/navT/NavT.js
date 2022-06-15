import './Nav.css';
import { Link } from 'react-router-dom'
function NavbarT(){
return(
    <nav>
    <ul id="desplegable">
    <li>
    <Link to="/dashboardTeacher">
      <span><i class="fa-solid fa-house icons"></i>
      <h3>Home</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/calendarTeacher">
      <span> <i class="fa-solid fa-calendar icons"></i>
      <h3>Calendario</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/coursesTeacher">
      <span> <i class="fa-solid fa-book icons"></i> 
      <h3>Cursos</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/scoreTeacher">
      <span> <i class="fa-solid fa-medal icons" ></i>
      <h3>Notas</h3>
      </span>
    </Link>
  </li>
  <li>
    <Link to="/resources">
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