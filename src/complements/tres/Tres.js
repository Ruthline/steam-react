import Foto3_1 from "./3_1 feria.png" 
import Foto3_2 from "./3_2 feria.png" 
import Foto3_3 from "./3_3 feria.jpg" 
import Foto3_4 from "./3_4 feria.jpg" 
import Foto3_5 from "./3_5 feria.jpg" 
import Foto3_6 from "./3_6 feria.jpg" 
import Foto3_7 from "./3_7 feria.jpg" 
import Foto3_8 from "./3_8 feria.jpg" 
import icono from "../uno/bx-calendar 2.png"
import { Link } from "react-router-dom"
function Tres (){
    return (
        <>

        <div class="tituloFeria">
        <Link to='/feriasale' id="back"><i class="fa-solid fa-arrow-left"></i></Link>
            <h1>Máquina de Goldberg</h1>
            <br/>
            <h2><img src={icono} alt="icono" />2019</h2>
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
                 <img class="zoom" alt="Foto3_1" src={Foto3_1}/>
                 <img  class="zoom" alt="Foto3_2" src={Foto3_2}/>
             </div>
     
             <div class="column">
                 <img class="zoom" alt="Foto3_3" src={Foto3_3}/>
                 <img class="zoom" alt="Foto3_4" src={Foto3_4}/>
             </div>
             
             <div class="column">
                 <img class="zoom" alt="{Foto3_5" src={Foto3_5}/>
                 <img class="zoom" alt="Foto3_6" src={Foto3_6}/>
             </div>
             
             <div class="column">
                 <img class="zoom" alt="Foto3_7" src={Foto3_7}/>
                 <img class="zoom" alt="Foto3_8" src={Foto3_8}/>
             </div>
        
         </div>
       
         
    
            </>
    )
}
export default Tres;