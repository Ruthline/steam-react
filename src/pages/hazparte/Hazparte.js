import Header from "../../Components/header/Header";
import BannerHazParte from "../../Components/bannerHazparte/BannerHazparte";
import SectionOpinion from "../../Components/sectionOpinion/SectionOpinion";
import GaleryHazParte from "../../Components/galeryHazparte/GaleryHazParte";
import Footer from "../../Components/footer/Footer";
import '../hazparte/Hazparte.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import {getAll} from '../../Components/sectionOpinion/Opinion';
function Hazparte(){
    const opinion=getAll();
    return(
        <body>
        <Header/>
        <BannerHazParte/>
            <div>
                <div class="bell">
                    <Link to="/mas-info"><FontAwesomeIcon icon={faBell}/></Link>
                </div>
                <div className="dates-container">
                    <h1 class="title-opinions">Experiencias Felices</h1>
                   <div  className="dates" >
                        {
                            opinion.map(p=>(
                                <SectionOpinion
                                p1={p.id}
                                p2={p.fotouser}
                                p3={p.description}
                                />
                            ))
                        }
                    </div>
                 </div>
                
                <GaleryHazParte/>
            </div>
            
        <Footer/>
        </body>
    );
}
export default Hazparte;