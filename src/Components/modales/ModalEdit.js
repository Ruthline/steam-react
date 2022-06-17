import React from "react";
import { Overlay, ContenedorModal, EncabezadoModal, BotonCerrar } from "../../element/LoginForm";

const ModalEdit =({children, estado, cambiarEstado})=>{
 

    return(
        <>
        {estado && 
            <Overlay>
                <ContenedorModal>
                    <EncabezadoModal>
                        <h3>Editar Nota</h3>
                    </EncabezadoModal>
                    <BotonCerrar onClick={()=> cambiarEstado(false)}><i class="fa-solid fa-x"></i></BotonCerrar>
                    {children}
                </ContenedorModal>

            </Overlay>
    }
        </>
    )
}
export default ModalEdit;