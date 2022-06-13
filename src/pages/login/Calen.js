import Calendar from "../../Components/calendar/Calendar"
import FooterLogin from "../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../Components/headerLogin/HeaderLogin"
import Navbar from "../../Components/nav/Nav"

import '../../index.css'

function Calendar2(){
    return(
        <div>
               <HeaderLogin />
               <div className="dashboard-nav-center">
            <section className="bar-dropdown">

<input type="checkbox" id="chk-bar"></input>
        <div className="hamburguesa">
      <label for="chk-bar" class="btn-menu">
      <i className="fa-solid fa-bars"></i>
          </label>


        </div>
        <div className="items-bar">
            <Navbar />
        </div>

</section>
            <Calendar />
            </div>
            <FooterLogin />
        </div>
    )
}

export default Calendar2