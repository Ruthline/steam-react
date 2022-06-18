import Dcenter from "../../../Components/Dcenter/Dcenter"
import FooterLogin from "../../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin"
import Navbar from "../../../Components/nav/Nav"



function Dashboard(){
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

</section> <Dcenter />
            </div>
            <FooterLogin />

        </div>

    )
}

export default Dashboard