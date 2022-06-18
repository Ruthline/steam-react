import { Link } from 'react-router-dom'
import './Perfil.css'

function PerfilEdit(){
    return(
        <>
         <div class="imagestudent">
        <i class="fa-solid fa-circle-user"></i>
    </div>
    <section className="position">
    <div class="form">
        <div class="name">
        <input type="text" id="name" class="form_input" autocomplete="off" placeholder=" "/>
        <label for="name" class="form_label">Beatriz Pinzon</label>
        </div>
    </div>
    <div class="form">

        <div class="grade">
        <input type="number" id="grade" class="form_input" autocomplete="off" placeholder=" "/>
        <label for="number" class="form_label">9 grado</label>
        </div>
    </div>
    <div class="form">

        <div class="email">
        <input type="text" id="email" class="form_input" autocomplete="off" placeholder=" "/>
        <label for="email" class="form_label">catalinaarias@gmail.com</label>
        </div>
    </div>
    <div class="form">

        <div class="phone">
        <input type="number" id="phone" class="form_input" autocomplete="off" placeholder=" "/>
        <label for="email" class="form_label">catalinaarias@gmail.com</label>
        </div>
    </div>
    <div class="form">

        <div class="bio">
        <input type="text" id="bio" class="form_input" autocomplete="off" placeholder=" "/>
        <label for="email" class="form_label">Bio</label>
        </div>
    </div>
        
        </section>
        <Link to="/dashboard">Volver</Link>
        </>
    )
}

export default PerfilEdit