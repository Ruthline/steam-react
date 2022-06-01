import Header from "../../Components/header/Header";
import BannerHazParte from "../../Components/bannerHazparte/BannerHazparte";
import SectionOpinion from "../../Components/sectionOpinion/SectionOpinion";
import GaleryHazParte from "../../Components/galeryHazparte/GaleryHazParte";
import Footer from "../../Components/footer/Footer";
import '../hazparte/Hazparte.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge} from '@fortawesome/free-solid-svg-icons';
function Hazparte(){
    return(
        <body>
        <Header/>
        <BannerHazParte/>
            <div>
            <div class="bell">
                <Link to="/mas-info"><FontAwesomeIcon icon={faBellConcierge}/></Link>
            </div>
            <SectionOpinion/>
            <GaleryHazParte/>
            </div>
            
        <Footer/>
        </body>
    );
}
export default Hazparte;