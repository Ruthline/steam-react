import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import BannerMasInfo from "../../Components/bannerMasinfo/BannerMasInfo";
import FormMasInfo from "../../Components/formMasinfo/FormMasInfo";
function MasInfo(){
    return(
        <div>
            <Header/>
            <BannerMasInfo/>
            <FormMasInfo/>
            <Footer/>
        </div>
    );
}

export default MasInfo;