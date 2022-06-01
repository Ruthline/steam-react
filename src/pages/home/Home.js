import Header from "../../Components/header/Header";
import SliderHome from "../../Components/sliderHome/SliderHome";
import SocialSection from "../../Components/socialSection/SocialSection";
import Footer from "../../Components/footer/Footer";


function Home (){
    return(
        <div>
            <Header/>
            <SliderHome/>
            <SocialSection/>
            <Footer/>
        </div>
    );
}

export default Home;