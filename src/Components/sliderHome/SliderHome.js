
import '../sliderHome/SliderHome.css';
import {Link} from 'react-router-dom';
import ContainSHome from '../containSHome/ContainSHome';
function SliderHome(props){
    return(
        <div className="slider-index">
        <section id="slider">
            <input type="radio" name="slider" id="slide1" ></input>
            <input type="radio" name="slider" id="slide2"></input>
            <input type="radio" name="slider" id="slide3"></input>
            <input type="radio" name="slider" id="slide4"></input>
            <input type="radio" name="slider" id="slide5"></input>

            <div id="slides">
                <h1>Proyectos</h1>
                <div className="inner">
                    <ContainSHome  s1={props.s1}
                        s2={props.s2}
                        s3={props.s3}/>

                    <div className="slide_2" key={`#id${props.s1}`}>
                        <div className="slide-content">
                        <img src={props.s2} alt={props.s1}></img>
                            <p>{props.s3}</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div>
                    </div>
                    <div className="slide_3" key={`#id${props.s1}`}>
                        <div className="slide-content">
                        <img src={props.s2} alt={props.s1}></img>
                            <p>{props.s3}</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div>
                    </div>
                    <div className="slide_4" key={`#id${props.s1}`}>
                        <div className="slide-content">
                        <img src={props.s2} alt={props.s1}></img>
                            <p>{props.s3}</p>
                            <Link to="/steam"><button className="read-more">leer más</button></Link>
                        </div>
                    </div>
                    <div className="slide_5" key={`#id${props.s1}`}>
                        <div className="slide-content">
                        <img src={props.s2} alt={props.s1}></img>
                            <p>{props.s3}</p>
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