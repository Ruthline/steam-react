import '../galeryHazparte/GaleryHazParte.css';
import Galery1 from '../galeryHazparte/galery1.png';
import Galery2 from '../galeryHazparte/galery2.png';
import Galery3 from '../galeryHazparte/galery3.png';
import Galery4 from '../galeryHazparte/galery4.png';
import Galery5 from '../galeryHazparte/galery5.png';
function GaleryHazParte(){
    return(
        
        <div className="container-galery">
            <h1>Nuestros proyectos</h1>
            <div className="galery-haz-parte">
                
                <div className="slider-galery">
                    <ul className="slider-ul">
                        <li className="foto-inicial slider-li">
                        </li>
                        <li className="foto-inicial2 slider-li">
                        </li>
                        <li className="foto-inicial3 slider-li">
                        </li>
                    </ul>
                </div>
                    
                
                
                <div className="galery">
                    <div className="second-photos">
                        <img className="fotos" src={Galery1}></img>
                        <img src={Galery2}></img>
                        <img src={Galery3}></img>
                    
                    </div>

                    <div className="second-photos">
                        <img src={Galery4}></img>
                        <img src={Galery5}></img>
                    </div>
                    <div className="view-all">
                        <button className="btn-all">Ver todos <i className="fa-solid fa-circle-right"></i></button>
                    </div>

                </div>
            </div>    
            
        </div>
    );
}

export default GaleryHazParte;