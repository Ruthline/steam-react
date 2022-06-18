import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import BannerSteam from "../../Components/bannerSteam/BannerSteam";
import SteamDescription from "../../Components/steamDescription/SteamDescription";
import SliderSteam from "../../Components/sliderSteam/SliderSteam";
import {getAll} from "../../Components/steamDescription/Steamdb"
import FotoF from '../../Components/steamDescription/fotof.jpg';
function Steam(){
    const steamdb=getAll();
    return(
        <div>
            <Header/>
            <BannerSteam/>
            <SliderSteam/>
            <div className="steam-container">
                <div className="principal-photo">
                <img src={FotoF} className='fotof'></img>
                </div>
                
                <div className='desktop-version'>
                    <div className='tablet-version'>
                    {
                        steamdb.map(sdb=>(
                            <SteamDescription
                            sdb1={sdb.id}
                            sdb2={sdb.titulo}
                            sdb3={sdb.fotosteam}
                            sdb4={sdb.description}/>
                        ))
                        
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Steam;