
import '../../../../Components/scoreT/ScoreT.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ModalEdit from '../../../../Components/modales/ModalEdit';
import { Boton, Contenido } from "../../../../element/LoginForm";

function TableScoreMath({trabajos,setUplist,upList,handleOpen,setDataModal}){
        
    const url = "http://localhost:5000/quintomath";
 /*2.Función asíncrona para borrar a partir del listener del boton eliminar */
 const handleEdit=()=>{
    handleOpen();
    setDataModal(trabajos);

}
 const handleDelete = async () => {
    Swal.fire({
        title: '¿Esta seguro que desea eliminar el personaje?',
        text: "¡No puede revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, eliminar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            /*Eliminando el registro de la BD falsa */
            axios.delete(`${url}/${trabajos.id}`).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    Swal.fire(
                        '¡Eliminado!',
                        'El personaje ha sido borrado.',
                        'success'
                    )
                    setUplist(!upList);
                } else {
                    Swal.fire(
                        '¡Error!',
                        'Hubo un problema al borrar el personaje.',
                        'success'
                    )
                }
            })
        }
    })
}

    return(
                <div>
            
              
                <tr className="row-teacher"> 
                <td class="student"> 
                   <button onClick={handleEdit} className="btn btn-three"><i className="fa-solid fa-pencil"></i> {trabajos.estudiante}</button>
                   
                   
                </td>

                   
                <td class="email">{trabajos.correo}</td>
                <td class="workshop">

                    <div class="worskhop-two">
                    <a href="#modal2" className="work">
                    <i class="fa-solid fa-paperclip"></i><h5> {trabajos.trabajo} </h5>
                    </a>
                    </div>
                   
                </td>
                
                    <td class="score-students">
                        <div>
                        {trabajos.nota}
                        </div>
                 
                        
                        </td>
                    <td class="average">98%</td>
               
               </tr> 
              
             
               </div>

            );
        }
export default TableScoreMath