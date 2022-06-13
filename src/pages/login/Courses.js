import FooterLogin from "../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../Components/headerLogin/HeaderLogin"
import './Courses.css'
import Navbar from "../../Components/nav/Nav"

import {getAllCourses} from '../../courses'
import { Link } from "react-router-dom";
import BotonI from '../../Components/login/BotonI/BotonI';
function Courses(){
    const courses=getAllCourses();
    return(
        <div>
            <HeaderLogin />
            <div className="dashboard-nav-center">
            <section className="bar-dropdown">

<input type="checkbox" id="chk-bar"></input>
        <div className="hamburguesa">
      <label for="chk-bar" class="btn-menu">
      <i className="fa-solid fa-bars"></i>
          </label>


        </div>
        <div className="items-bar">
            <Navbar />
        </div>

    </section>
                <section>
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
                </section>
        </div>






            <FooterLogin />

        </div>
    )
}

export default Courses
