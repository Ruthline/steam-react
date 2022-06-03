import Dcenter from "../../Components/Dcenter/Dcenter"
import FooterLogin from "../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../Components/headerLogin/HeaderLogin"



function Dashboard(){
    return(
        <div>
            <HeaderLogin />
            <Dcenter />
            <FooterLogin />

        </div>

    )
}

export default Dashboard