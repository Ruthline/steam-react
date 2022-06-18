import Foto5_1 from "./5_1.jpg" 
import Foto5_2 from "./5_2.jpg" 
import Foto5_3 from "./5_3.jpg" 
import Foto5_4 from "./5_4.jpg" 
import Foto5_5 from "./5_5.jpg" 
import Foto5_6 from "./5_6.jpg" 
import Foto5_7 from "./5_7.jpg" 
import Foto5_8 from "./5_8.jpg" 
import videoquinta from "./quintaferia.mp4"
import iconocalendario from "../uno/bx-calendar 2.png"
import { Link } from "react-router-dom"
function Cinco (){
    return (
        <>


    <div>
    <video width="100%"  controls >
      <source src={videoquinta} type="video/mp4"/>
    </video>
      </div>
    <div class="tituloFeria">
        <Link to='/feriasale' id="back"><i class="fa-solid fa-arrow-left"></i></Link>
        <h1>Energias Renovables</h1>
        <br/>
        <h2><img src={iconocalendario} alt="calendarioicon" />2021</h2>
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
             <img class="zoom" alt="Foto2_1" src={Foto5_1}/>
             <img  class="zoom" alt="Foto2_2" src={Foto5_2}/>
         </div>
 
         <div class="column">
             <img class="zoom" alt="Foto2_3" src={Foto5_3}/>
             <img class="zoom" alt="Foto2_4" src={Foto5_4}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="{Foto2_5" src={Foto5_5}/>
             <img class="zoom" alt="Foto2_6" src={Foto5_6}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="Foto2_7" src={Foto5_7}/>
             <img class="zoom" alt="Foto2_8" src={Foto5_8}/>
         </div>
    
     </div>
   
     

        </>

    )
}
export default Cinco;