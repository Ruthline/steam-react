import FooterLogin from "../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../Components/headerLogin/HeaderLogin"
import { useParams} from "react-router-dom";
import {getCourse} from "../../courses";
import '../../Components/modales/modal.css'




function Course(){
    const params=useParams();
    const  course=getCourse(parseInt(params.id));
    return(
        <div>
             {params.id}
            <HeaderLogin />
            <div>
                <img src={course.banner} alt="imagen"></img>
            </div>
            <div className="card-deliver">
                {params.id}
                <h1>Detalle de </h1>
                <h3>{course.trabajo}</h3>
                <p>{course.descripcion}</p>
                <div class="icons" >
                    <a href="#modal" class="cta"><i class="fa-solid fa-paperclip" ></i></a>
                    <a href="#modal" class="cta"><i class="fa-solid fa-comment"></i></a>
                </div>
            </div>
            <section id="modal" class="modal">
        
        <div class="modalContainer">
    
            <form method="post" enctype="multipart/form-data">
                <div>
                  <label for="file">Elige el archivo a cargar</label>
                  <input type="file" id="file" name="file" multiple></input>
                </div>
        
                <textarea name="textarea" rows="10" cols="50">Hola profesor...
            
                </textarea>
                <button class="btn-verde">Enviar</button>
               </form>

               



        </div>
        </section>

        <FooterLogin />

        </div>
    )
}
export default Course