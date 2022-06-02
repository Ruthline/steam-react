import Slide1 from '../sliderHome/slide1.png';
import Slide2 from '../sliderHome/slide2.png';
import Slide3 from '../sliderHome/slide3.png';
import Slide4 from '../sliderHome/slide4.png';
import Slide5 from '../sliderHome/slide5.png';
import '../sliderHome/SliderHome.css'
import {Link} from 'react-router-dom';
function SliderHome(){
    return(
        <div className="slider-index">
        <section id="slider">
            <input type="radio" name="slider" id="slide1" ></input>
            <input type="radio" name="slider" id="slide2"></input>
            <input type="radio" name="slider" id="slide3"></input>
            <input type="radio" name="slider" id="slide4"></input>
            <input type="radio" name="slider" id="slide5"></input>

            <div id="slides">
                <h1>PROYECTOS</h1>
                <div className="inner">
                    <div className="slide_1">
                        <div className="slide-content">
                            <img src={Slide1}></img>
                            <p>Lorem ipsum dolor sit amet <br></br> adipisicing elit. Perferendis <br></br> blanditiis dolores?</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div> 
                    </div>

                    <div className="slide_2">
                        <div className="slide-content">
                            <img src={Slide2}></img>
                            <p>Lorem ipsum dolor sit amet <br></br> adipisicing elit. Perferendis <br></br> blanditiis dolores?</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div>
                    </div>
                    <div className="slide_3">
                        <div className="slide-content">
                            <img src={Slide3}></img>
                            <p>Lorem ipsum dolor sit amet <br></br> adipisicing elit. Perferendis <br></br> blanditiis dolores?</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div>
                    </div>
                    <div className="slide_4">
                        <div className="slide-content">
                           <img src={Slide4}></img>
                            <p>Lorem ipsum dolor sit amet <br></br> adipisicing elit. Perferendis <br></br> blanditiis dolores?</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div>
                    </div>
                    <div className="slide_5">
                        <div className="slide-content">
                            <img src={Slide5}></img>
                            <p>Lorem ipsum dolor sit amet <br></br> adipisicing elit. Perferendis <br></br> blanditiis dolores?</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="controllers">
                <label for="slide1">1</label>
                <label for="slide2">2</label>
                <label for="slide3">3</label>
                <label for="slide4">4</label>
                <label for="slide5">5</label>
            </div>

            <div className="bullets">
                <label for="slide1">1</label>
                <label for="slide2">2</label>
                <label for="slide3">3</label>
                <label for="slide4">4</label>
                <label for="slide5">5</label>
            </div>
        </section>
    </div>
    );
}

export default SliderHome;