import ActividadesAr from '../../../Components/recursos/ActividadesAr'
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin";
import FooterLogin from "../../../Components/footerLogin/FooterLogin";
import Navbar from '../../../Components/nav/Nav';
import { getAll } from "../../../Components/recursos/recursos";
import Resources from "../../../Components/recursos/ActividadesAr";
function ArteRec(){
    const resources = getAll();
    return(
        <>
        <HeaderLogin />
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
        <div className="container">
                <h1>Recursos</h1>
                <div className="recursos">
                    {
                        resources.map(p=>(
                            <Resources
                            p1={p.id}
                            p2={p.imageresources}
                            p3={p.title}
                            p4={p.descripcion}
                           />
                        ))
                    }
                </div>
            </div>
            </div>
  
            
        <FooterLogin />
        </>
    )
}
export default ArteRec