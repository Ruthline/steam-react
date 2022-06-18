import '../galeryHazparte/GaleryHazParte.css';
import Galery1 from '../galeryHazparte/galery1.jpeg';
import Galery2 from '../galeryHazparte/galery2.jpeg';
import Galery3 from '../galeryHazparte/galery3.jpeg';
import Galery4 from '../galeryHazparte/galery4.jpeg';
import Galery5 from '../galeryHazparte/galery5.jpeg';
import Galery6 from '../galeryHazparte/galery6.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft, faXmark} from '@fortawesome/free-solid-svg-icons';
function GaleryHazParte(props){
    return(
        
        <div className="container-galery">
            <h1>Proyectos recientes</h1>
            <span className='linea'>
                
            </span>
            <section className='galeria'>
            <a href='#image1'><img src={Galery1} alt=""></img></a>
                <a href='#image2'>
                    <img src={Galery2} alt=""></img>
                </a>
                <a href='#image3'><img src={Galery3} alt=""></img></a>
                <a href='#image4'><img src={Galery4} alt=""></img></a>
                <a href='#image5'><img src={Galery5} alt=""></img></a>
                <a href='#image6'><img src={Galery6} alt=""></img></a>
            </section>

            <article className='light-box' id="image1">
                <a href='#image6' className='next'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery1} alt=''>
                </img>
                
                <p>
                <h3>Exposición de Robótica</h3><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
                <a href='#image2' className='next'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image2">
                <a href='#image1' className='next'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery2} alt=''>
                </img>
                
                <p>
                <h3>Talleres artísticos</h3><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
                <a href='#image3' className='next'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image3">
                <a href='#image2' className='next'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery3} alt=''>
                </img>
                
                <p>
                <h3>Reconociendo el espacio</h3><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
                <a href='#image4' className='next'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image4">
                <a href='#image3' className='next'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery4} alt=''>
                </img>
                
                <p>
                <h3>Recorrido observatorio</h3><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
                <a href='#image5' className='next'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image5">
                <a href='#image4' className='next'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery5} alt=''>
                </img>
                
                <p>
                <h3>Inspiraciones artísticas</h3><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
                <a href='#image6' className='next'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>
            
            <article className='light-box' id="image6">
                <a href='#image5' className='next'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery6} alt=''>
                </img>
                
                <p>
                <h3>Estructuras en pasta</h3><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
                <a href='#image1' className='next'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>
        </div>
    );
}

export default GaleryHazParte;