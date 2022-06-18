import './FeriasBotones.css'
import LogoTrebol from "./FeriaProvicional.png"
import { Link } from 'react-router-dom'
function FeriasBotones(){
    return (
        <>
        <div class="contenedor">
		<h1>Selecciona la Feria</h1>

		<div class="contenedor-botones">
			<Link to="/primera"><button class="boton"><span> <img src={LogoTrebol} alt="LogoTrebol" height="90" />Primera Feria </span></button></Link>
			
			<Link to="/segunda"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol" height ="90"/>Segunda Feria</span></button></Link>

			<Link to="/tercera"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol" height ="90"/>Tercera Feria</span></button></Link>
			
            <Link to="/cuarta"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol"  height ="90"/>Cuarta Feria</span></button></Link>

			<Link to="/quinta"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol" height ="90" />Quinta Feria</span></button></Link>

				</div>
			
			
		
		</div>
	
        </>
    )
}

export default FeriasBotones;