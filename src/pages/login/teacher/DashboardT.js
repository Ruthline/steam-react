
import DcenterT from "../../../Components/DcenterT/DcenterT"
import FooterLogin from "../../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin"
import NavbarT from "../../../Components/navT/NavT"



function DashboardT(){
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
            <NavbarT />
        </div>

</section> <DcenterT />
            </div>
            <FooterLogin />

        </div>

    )
}

export default DashboardT