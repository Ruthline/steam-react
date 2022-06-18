import './Recursos.css';

function ModalInfo(props) {
    return (
        <div>
            <div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.pm2}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.pm6}
                            <br/><br/>
                            <p><strong>País: </strong>{props.pm7}</p>
                            <p><strong>Tamaño: </strong>{props.pm8}</p>
                            <p><strong>Esperanza de vida promedio: </strong>{props.pm9}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalInfo;