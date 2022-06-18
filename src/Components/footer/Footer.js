import './Footer.css'
import { Link } from 'react-router-dom';
import Lema from './lema.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import {  faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <footer>
            <div className="footer">
            <div className="icons-footer">
                <a href="https://www.facebook.com/colegiodesanpatricio"><FontAwesomeIcon icon={faFacebook}/></a>
               <a href="https://colegiodesanpatricio.edu.co/?fbclid=IwAR1GlUL-s8zPjqYyc20z2dJOdayK0uZiSWPYHwQXXfOGjI25s6rmukY3VIs"> <FontAwesomeIcon icon={faGlobe}/></a>
                <a href="https://www.instagram.com/colegiodesanpatricio/?utm_source=ig_embedig_rid=d6c974f1-b662-4957-b55a-1a318088910d"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://www.youtube.com/channel/UCSSpWp18wULVADRU0TPEpWw"><FontAwesomeIcon icon={faYoutube}/></a>
            </div>
            <div className="texts-footer">
                    <div class="info-one">
                        <h4>CONTACTO</h4>
                        <Link to="">Colegio San Patricio</Link><br></br>
                        <Link to="">Carrera 80# 197-02</Link><br></br>
                        <Link to="">PBX(601) 683-8640</Link><br></br>
                        <Link to="">Whatsapp:318-355-2832</Link><br></br>
                        <Link to="">Bogotá, Colombia</Link><br></br>
                    </div>
                <div className="info-two">
                    <div className="text-footer">
                        <h4>SECCIONES</h4>
                                <Link to="/steam">STEAM</Link><br></br>
                                <Link to="/ferias">Ferias</Link><br></br>
                                <Link to="/steam">Proyectos</Link><br></br>
                        </div>
                        <div className="text-footer">
                        <h4>INFORMACIÓN</h4>
                                <Link to="/recursos">Recursos</Link><br></br>
                                <Link to="/steam">Conceptos de STEAM</Link><br></br>
                                <Link to="/steam">Proyectos transversales</Link><br></br>
                        </div>
                </div>
                
                
            </div>
        <div className="img-footer">
            <img src={Lema}></img>
            <h6>©2020 San Patricio School. All rights reserved.
            </h6>
        </div>

    </div>


        </footer>
    );
}
export default Footer;