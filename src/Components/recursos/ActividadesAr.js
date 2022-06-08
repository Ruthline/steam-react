import './ActividadesAr.css'
import ModalInfo from './ModalInfo';
function ActividadesAr(props){
    return(
        <section className="recursos">
           <div>
            
                <div className="card">
                    
                    <div className="card-contenido">
                    <img src={props.p2} className="card-img-top" alt={props.p3}  width="300px"/>
                        <h2 className="card-title">{props.p3}</h2>
                      
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
                            Leer más
                        </button>
                        <ModalInfo
                        pm1={`id${props.p1}`}
                        pm2={props.p2}
                        pm3={props.p3}
                        pm4={props.p4}
                      />
                    </div>
                </div>
            </div>
      
        
        </section>
    )
}

export default ActividadesAr