import './Dcenter.css'
import '../../index.css'
import hoy from "./trabajo1.png"
import { Link } from "react-router-dom";
function DcenterT(){
    

    return(
        <div className="PrincipalLogin">
            <button onClick="hamburguesa" class="btn-idiom animated-word"> 
                <p>ES-EN</p>
            </button>

        <h1 className="title-dcenter">¡Hola, de nuevo!</h1>
        <div class="today">
            <h2>PARA HOY:</h2>  
            <img src={hoy} alt="imagenestrabajohoy"></img> 
            <h3>Arte</h3>
            <p>Arma el puzzle en el area virtual</p>
        </div>

        <div class="to-do">
            <h2>TO DO'S</h2>
    
                <ul id="myUL" className="ul-todo">
                    <li className="list-todo">Clase Ingles</li>
                    <li className="list-todo checked">Realizar trabajo ciencias</li>
                    <li className="list-todo">Reunion rector</li>
                    <li className="list-todo">Leer un libro</li>
                    <li className="list-todo">Organizar la oficina</li>
                    <li className="list-todo">Nuevo trabajo para quinto</li>
                </ul>
        </div>  
        
        <div class="PriorityClass">
            <h2>Clases Prioritarias</h2>
            <div class="class-four">
                <div class="class">
                <Link to="/coursesTeacher/3">
                    <img src={"https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"} alt="matematicas"/>
                    <h3>Mátematica</h3>
                </Link>
                </div>
            </div>

            <div class="class-one">
                <div class="class">
                <Link to="/coursesTeacher/2">
                    <img src={"https://images.unsplash.com/photo-1651980802497-2ad4b4adbb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"} alt="imagenestrabajohoy"></img> 
                    <h3>Ciencia</h3>
                </Link>
                </div>
            </div>

    </div>
        </div>
    )
}

export default DcenterT