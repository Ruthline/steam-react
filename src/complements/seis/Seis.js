import LogoTrebol from "../Feria_botones/FeriaProvicional.png"
import './Seis.css'
function Seis (){
    return (
        <>
         <section id="modal" className="modal">
        <div className="modalContainer">
            <img src= { LogoTrebol} alt="LogoTrebol"/>
            <h2 className="nomb">Lo sentimos, pronto estará abierta esta Feria</h2>
        
           
                <button className="btn-volver">Volver</button>
               
        </div>
        
    
    </section>   
        </>
    )
}
export default Seis;