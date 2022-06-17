
import './ScoreT.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ModalEdit from '../modales/ModalEdit';
function TableScoreArte({trabajos,setUplist,upList,estado,setDataModal}){
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const url = "http://localhost:5000/quintoArte";

    
    /*2.Función asíncrona para borrar a partir del listener del boton eliminar */
    const handleDelete = async () => {
        Swal.fire({
            title: '¿Esta seguro que desea eliminar el trabajo?',
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
    const handleEdit=()=>{
        estado(true);
        setDataModal(trabajos);

    }
    return(
                <div>
                    <button id="botonEditar" onClick={() => cambiarEstadoModal1(!estadoModal1)} >Editar</button>
               <button onClick={handleDelete}><i class="fa-solid fa-pencil"></i> Eliminar</button>
                <tr className="row-teacher"> 
                <td class="student"> 
                   <button onClick={() => cambiarEstadoModal1(!estadoModal1)} id="btn btn-three"><i class="fa-solid fa-pencil"></i> {trabajos.id}</button>
                   
                   
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
                    <td class="average">98% </td>
               
               </tr> 
              <ModalEdit />
               </div>

            );
        }
export default TableScoreArte