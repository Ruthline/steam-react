import Header from "../../Components/header/Header";
import BannerHazParte from "../../Components/bannerHazparte/BannerHazparte";
import SectionOpinion from "../../Components/sectionOpinion/SectionOpinion";
import GaleryHazParte from "../../Components/galeryHazparte/GaleryHazParte";
import Footer from "../../Components/footer/Footer";
import '../hazparte/Hazparte.css'
import { Link } from "react-router-dom";
function Hazparte(){
    return(
        <body>
        <Header/>
        <BannerHazParte/>
            <div>
            <div class="bell">
                <Link to="/mas-info"><i class="fa-solid fa-bell"></i></Link>
            </div>
            <SectionOpinion/>
            <GaleryHazParte/>
            </div>
            
        <Footer/>
        </body>
    );
}
export default Hazparte;