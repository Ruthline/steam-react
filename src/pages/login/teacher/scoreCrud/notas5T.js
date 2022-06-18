import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import TableScoreArte from './TableScoreArte'
import { useState, useEffect } from 'react';
import HeaderLogin from '../../../../Components/headerLogin/HeaderLogin';
import ModalEdit from '../../../../Components/modales/ModalEdit'
import { Boton, Contenido } from "../../../../element/LoginForm";
import '../coursesTe/FormWork.css'

function Notas5T() {
    const url = "http://localhost:5000/quintotech";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    const [list, setList] = useState([]);
    /*5.Crear otro estadopara refrescar el listoadi despues de eliminar */
    const [upList,setUplist] = useState([false]);


    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const handleClose =()=>{cambiarEstadoModal1(false);}
    const handleOpen  =()=>{cambiarEstadoModal1(true);}
    /*2.Función asíncrona para borrar a partir del listener del boton eliminar */
    const[dataModal, setDataModal]=useState({});
    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]:target.value})
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`,dataModal);
        console.log(response); 
        if(response.status===200){
            Swal.fire(
                'Guardado!',
                `La nota del estudiante es de <strong>
                ${response.data.nota}
                </strong>
                ha sido guardado exitosamente!`,
                    'success'
            )
               handleClose();
               setUplist(!upList)
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al actualizar la calificacion!`,
                    'error'
            )
        }
    

    }
   
 
    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
    
        })
    },[upList])
    console.log(list)

 
    
    return (
        <>
            <HeaderLogin />
            <h1>Notas de Tecnología Grado 5</h1>
           
            <div className="students-calificaciones">

                <section className="botones-score">
              
                
                    <button class="btn-verde ctr">
                        <Link to="/coursesTeacher/3">
                            <i class="fa-solid fa-user"></i>
                            <h5>Volver</h5>
                        </Link>
                    </button>

                </section>

                <table className="table">

                    <tr className="rowprincipal-teacher">
                        <th class="student-teacher"> Estudiante:</th>
                        <th class="email-teacher">Correo:</th>
                        <th class="workshop-teacher">Trabajos:</th>
                        <th class="score-teacher">Calificacion:</th>
                        <th class="average-teacher">Promedio:</th>
                    </tr>
                    {
                        list.map((tr, index) => (
                            <TableScoreArte
                                key={index}
                                trabajos={tr}
                                setUplist={setUplist}
                                upList={upList}
                                handleClose={handleClose}
                                handleOpen={handleOpen}
                                setDataModal={setDataModal}
                            />
                        ))
                    }
                  
                </table>
 
                <ModalEdit  estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}>
                <Contenido>
                  <h2>{dataModal.estudiante}</h2>  
                  <h4>{dataModal.trabajo}</h4>

                <form onSubmit={handleSubmit}>
                 
                 <label>Nota: </label>
                  <input  
                  type="text" 
                  name="nota"
                  value={dataModal.nota}
                onChange={handleChangeModal} />
                
                  <br></br>
            
                    <boton onClick={handleClose}>
                        Cerrar
                    </boton>
                    <Boton type="submit">
                        Guardar
                    </Boton>
                </form>
                </Contenido>
                </ModalEdit>
            </div>
        </>

    )
}
export default Notas5T;