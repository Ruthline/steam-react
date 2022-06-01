import Header from "../../Components/header/Header";
import SliderHome from "../../Components/sliderHome/SliderHome";
import SocialSection from "../../Components/socialSection/SocialSection";
import Footer from "../../Components/footer/Footer";
import BannerHome from "../../Components/bannerHome/BannerHome";


function Home (){
    return(
        <div>
            <Header/>
            <BannerHome/>
            <SliderHome/>
            <SocialSection/>
            <Footer/>
        </div>
    );
}

export default Home;