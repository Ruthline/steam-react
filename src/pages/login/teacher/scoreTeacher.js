import ScoreT from "../../../Components/scoreT/ScoreT"
import NavbarT from "../../../Components/navT/NavT";
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin";
import FooterLogin from "../../../Components/footerLogin/FooterLogin";

function ScoreTeacher(){
    return(
        <section>
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

</section>
            <ScoreT />
            </div>
            <FooterLogin />

        </section>
    )
}
export default ScoreTeacher