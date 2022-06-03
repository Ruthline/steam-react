import Calendar from "../../Components/calendar/Calendar"
import FooterLogin from "../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../Components/headerLogin/HeaderLogin"


import '../../index.css'

function Calendar2(){
    return(
        <div>
               <HeaderLogin />
               <Calendar />
            <FooterLogin />
        </div>
    )
}

export default Calendar2