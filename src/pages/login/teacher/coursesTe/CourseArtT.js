



import {useState, useEffect} from "react" 
import axios from 'axios';
import FooterLogin from "../../../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../../../Components/headerLogin/HeaderLogin"
import arteimg from './Arte.svg'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function CourseArtT(){
  
return(
        <div>
          
            <HeaderLogin />
            <img src={arteimg} alt="bannerArte" width="100%"></img>
            <h1>Trabajos</h1>
            <Link to="/scoreTeacher/1/form"><button>Añadir trabajo</button></Link>
            <button>Notas de Materia</button>
           
            <FooterLogin />
        </div>
    )
}
export default CourseArtT