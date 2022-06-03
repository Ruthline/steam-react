import './Dcenter.css'
import '../../index.css'
import hoy from "./trabajo1.png"
import { Link } from "react-router-dom";
function Dcenter(){
    
// Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);


    return(
        <div className="PrincipalLogin">
            <button onClick="hamburguesa" class="btn-idiom animated-word"> 
                <p>ES-EN</p>
            </button>

        <h1>¡Hola, de nuevo!</h1>
        <div class="today">
            <h2>PARA HOY:</h2>  
            <img src={hoy} alt="imagenestrabajohoy"></img> 
            <h3>Arte</h3>
            <p>Arma el puzzle en el area virtual</p>
        </div>

        <div class="to-do">
            <h2>TO DO'S</h2>
    
                <ul id="myUL" className="ul-todo">
                    <li className="list-todo">Hit the gym</li>
                    <li className="list-todo checked">Pay bills</li>
                    <li className="list-todo">Meet George</li>
                    <li className="list-todo">Buy eggs</li>
                    <li className="list-todo">Read a book</li>
                    <li className="list-todo">Organize office</li>
                </ul>
        </div>  
        
        <div class="PriorityClass">
            <h2>Clases Prioritarias</h2>
            <div class="class-four">
                <div class="class">
                <Link to="/courses">
                    <img src={"https://media1.giphy.com/media/3o72EXSWcDayDDGP60/giphy.gif?cid=ecf05e47f8e353x8podx05gmq5kvjzngkzd1kvdk0t3qgx7l&rid=giphy.gif&ct=g"} alt="matematicas"/>
                    <h3>Mátematica</h3>
                </Link>
                </div>
            </div>

            <div class="class-one">
                <div class="class">
                <Link to="/courses">
                    <img src={"https://media3.giphy.com/media/o65WgXSDBVY1G/giphy.gif?cid=ecf05e47aq9zgefha69plm6ov7pi2o79am1sh91m21mzknvi&rid=giphy.gif&ct=g"} alt="imagenestrabajohoy"></img> 
                    <h3>Ciencia</h3>
                </Link>
                </div>
            </div>

    </div>
        </div>
    )
}

export default Dcenter