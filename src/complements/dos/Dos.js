import Foto2_1 from "./2_1 feria.png" 
import Foto2_2 from "./2_2 feria.png" 
import Foto2_3 from "./2_3 feria.jpg" 
import Foto2_4 from "./2_4 feria.jpg" 
import Foto2_5 from "./2_5 feria.jpg" 
import Foto2_6 from "./2_6 feria.jpg" 
import Foto2_7 from "./2_7 feria.jpg" 
import Foto2_8 from "./2_8 feria.jpg" 
import videosegunda from "./rnvideoproject/videosegunda.mp4"
import icono from "../uno/bx-calendar 2.png"
import { Link } from "react-router-dom"

function Dos(){
    return (
    <>
    <div>
    <video width="100%"  controls >
      <source src={videosegunda} type="video/mp4" class="videoferia"/>
    </video>
      </div>
    <div class="tituloFeria">
    <Link to='/feriasale' id="back"><i class="fa-solid fa-arrow-left"></i></Link>
        <h1>Energias Renovables</h1>
        <br/>
        <h2><img src={icono} alt="icono" />2018</h2>
     <hr/>
     <h3>Descripción de la Feria:</h3> 
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab
     </p> 
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab</p> 
     <br/>
     <hr/>
     </div>
     <div class="row">
         <div class="column">
             <img class="zoom" alt="Foto2_1" src={Foto2_1}/>
             <img  class="zoom" alt="Foto2_2" src={Foto2_2}/>
         </div>
 
         <div class="column">
             <img class="zoom" alt="Foto2_3" src={Foto2_3}/>
             <img class="zoom" alt="Foto2_4" src={Foto2_4}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="{Foto2_5" src={Foto2_5}/>
             <img class="zoom" alt="Foto2_6" src={Foto2_6}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="Foto2_7" src={Foto2_7}/>
             <img class="zoom" alt="Foto2_8" src={Foto2_8}/>
         </div>
    
     </div>
   
     

        </>
    )
}
export default Dos;