import ScoreT from "../components/ScoreT/ScoreT"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

function ScoreTeacher(){
    return(
        <section>
            <Header />
            <div className="dashboard-nav-center">
            <section className="bar-dropdown">

<input type="checkbox" id="chk-bar"></input>
        <div className="hamburguesa">
      <label for="chk-bar" class="btn-menu">
      <i class="fa-solid fa-bars"></i>
          </label>


        </div>
        <div className="items-bar">
            <Navbar />
        </div>

</section>
            <ScoreT />
            </div>
            <Footer />

        </section>
    )
}
export default ScoreTeacher