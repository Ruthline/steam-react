import React from "react";
import { Overlay, ContenedorModal, EncabezadoModal, BotonCerrar } from "../../element/LoginForm";

const Modal =({children, estado, cambiarEstado})=>{
 

    return(
        <>
        {estado && 
            <Overlay>
                <ContenedorModal>
                    <EncabezadoModal>
                        <h3>Añadir Trabajos</h3>
                    </EncabezadoModal>
                    <BotonCerrar onClick={()=> cambiarEstado(false)}><i class="fa-solid fa-x"></i></BotonCerrar>
                    {children}
                </ContenedorModal>

            </Overlay>
    }
        </>
    )
}
export default Modal;