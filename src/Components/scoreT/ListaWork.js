import axios from 'axios';
import Swal from 'sweetalert2';
import '../scoreS/scoreS.css'
import TableScore from '../scoreS/TableScore';
function ListaWork({trabajos,setUplist,upList,handleOpen,setDataModal}){
   
    const url = "http://localhost:5000/trabajos";
   
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
                            'El trabajo ha sido borrado.',
                            'success'
                        )
                        setUplist(!upList);
                    } else {
                        Swal.fire(
                            '¡Error!',
                            'Hubo un problema al borrar el trabajo.',
                            'success'
                        )
                    }
                })
            }
        })
    }
    const handleEdit=()=>{
        handleOpen();
        setDataModal(trabajos);

    }
            return (
                <>  
                <table className="table">
                
                        
                   
            <tr>
                    
                    <td><button className="btn-verde" onClick={handleEdit}>Editar</button></td>
                    <td><button className="botonEliminar" onClick={handleDelete}>Eliminar</button></td>
                </tr>
                </table>
             
                </>
            );
        }

export default ListaWork