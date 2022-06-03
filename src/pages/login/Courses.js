import FooterLogin from "../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../Components/headerLogin/HeaderLogin"
import './Courses.css'

import {getAllCourses} from '../../courses'
import { Link } from "react-router-dom";
import BotonI from '../../Components/login/BotonI/BotonI';
function Courses(){
    const courses=getAllCourses();
    return(
        <div>
            <HeaderLogin />
            <div className="c-div">
                    <h1 className="cursos-title">Mis cursos</h1>
                    <BotonI />
                    </div>
                <div className="courses">
        
                {courses.map(s=>
                    <div className="course" key={s.id}>
                   
                    <div className="cursos"> 
                    <Link to={`${s.id}`}>
                    <img src={s.image} alt="imagen" className="clas" />

                      
                        <h2>{s.title}</h2>
                     </Link>
                    </div> 

                    
                   
                    </div>
                )};

                </div>




            <FooterLogin />

        </div>
    )
}

export default Courses
