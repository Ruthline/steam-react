import './Footer.css'
import { Link } from 'react-router-dom';
import Lema from './lema.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <footer>
            <div className="footer">
            <div className="icons-footer">
                <FontAwesomeIcon icon={faFacebookSquare}/>
                <FontAwesomeIcon icon={faTwitterSquare}/>
                <FontAwesomeIcon icon={faInstagramSquare}/>
                <FontAwesomeIcon icon={faYoutubeSquare}/>
            </div>
            <div className="texts-footer">
                    <div class="info-one">
                        <h4>CONTACTO</h4>
                        <Link to="/steam" >Colegio San Patricio</Link><br></br>
                        <Link to="/steam">Carrera 80# 197-02</Link><br></br>
                        <Link to="/steam">PBX(601) 683-8640</Link><br></br>
                        <Link to="/steam">Whatsapp:318-355-2832</Link><br></br>
                        <Link to="/steam">Bogotá, Colombia</Link><br></br>
                    </div>
                <div className="info-two">
                    <div className="text-footer">
                        <h4>SECCIONES</h4>
                                <Link to="/steam">STEAM</Link><br></br>
                                <Link to="/steam">Ferias</Link><br></br>
                                <Link to="/steam">Proyectos</Link><br></br>
                        </div>
                        <div className="text-footer">
                        <h4>INFORMACIÓN</h4>
                                <Link to="/steam">Recursos</Link><br></br>
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