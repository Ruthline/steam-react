import'./Header.css'
import Logo from './LogoSanPatricio.png'
function Header() {

return(
    <header>
    <div class="header-index">

    <div class="nav-group">
    
    <a class="one-nav" href="index.html"><img src={Logo}></img></a>
    <a class="two-nav item sin-login2" href="./src/pages/estudiantes/login-estudiantes.html"><i class="fa-solid fa-circle-user"></i></a>

    <label for="clic-menu" class="three-nav" href="meni" ><i class="fa-solid fa-bars"></i></label>
    <input type="checkbox" id="clic-menu"></input>
    

    
    <div class="items">
    <a class="four-nav item" href="index.html">Home</a>
    <a  class="five-nav item" href="steam.html">STEAM</a>
    <a class="six-nav item" href="./src/pages/ferias/ferias.html">Ferias</a>
    <a class="seven-nav item" href="./src/pages/home/hazparte.html">¡Haz parte!</a>
    <button class="eight-nav item"><i class="fa-solid fa-magnifying-glass"></i></button>

    <a class="two-nav item sin-login"href="./src/pages/estudiantes/login-estudiantes.html"><i class="fa-solid fa-circle-user"></i></a>
    </div>
</div>
</div>
</header>
);
}
export default Header;
