import Header from "../../Components/header/Header";
import SliderHome from "../../Components/sliderHome/SliderHome";
import SocialSection from "../../Components/socialSection/SocialSection";
import Footer from "../../Components/footer/Footer";
import BannerHome from "../../Components/bannerHome/BannerHome";
import {getAll} from "../../Components/sliderHome/ProyectosSlide";
import ContainSHome from "../../Components/containSHome/ContainSHome";

function Home (){
    const proyectosSteam=getAll();
    return(
        <div>
            <Header/>
            <BannerHome/>
            <div>
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
                {
                    proyectosSteam.map(s=>(
                        <ContainSHome
                        s1={s.id}
                        s2={s.fotoproject}
                        s3={s.description}/> 
                    )
                        
                    )
                    
                }
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
            </div>
           
            <SocialSection/>
            <Footer/>
        </div>
    );
}

export default Home;