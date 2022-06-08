
import ScoreS from "../../../Components/scoreS/ScoreS";
import Navbar from "../../../Components/nav/Nav";
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin";
import FooterLogin from "../../../Components/footerLogin/FooterLogin";

function Score(){
    return(
        <div>
            <HeaderLogin/>
            <div className="dashboard-nav-center">
            <div className="bar-dropdown">

<input type="checkbox" id="chk-bar"></input>
        <div className="hamburguesa">
      <label for="chk-bar" class="btn-menu">
      <i class="fa-solid fa-bars"></i>
          </label>


        </div>
        <div className="items-bar">
            <Navbar />
        </div>

</div>
            <ScoreS />
            </div>
            <FooterLogin />
        </div>
    )
}
export default Score