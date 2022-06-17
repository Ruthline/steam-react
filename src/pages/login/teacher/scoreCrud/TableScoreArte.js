
import '../../../../Components/scoreT/ScoreT.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ModalEdit from '../../../../Components/modales/ModalEdit';
import { Boton, Contenido } from "../../../../element/LoginForm";

function TableScoreArte({trabajos}){
        
    const url = "http://localhost:5000/quintoArte";

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
        const response=await axios.put(`${url}/${dataModal.nota}`,dataModal);
        
        if(response.status===200){
            Swal.fire(
                'Guardado!',
                `La nota del estudiante es de <strong>
                ${response.data.trabajo}
                </strong>
                ha sido guardado exitosamente!`,
                    'success'
            )
               cambiarEstadoModal1();
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
   
 
   
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    console.log(list);

    const handleEdit=()=>{
        handleOpen();
        setDataModal(trabajos);

    }
    return(
                <div>
            
              
                <tr className="row-teacher"> 
                <td class="student"> 
                   <button onClick={handleEdit} id="btn btn-three"><i class="fa-solid fa-pencil"></i> {trabajos.estudiante}</button>
                   
                   
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
                    <td class="average"><button onClick={handleEdit} id="btn btn-three"><i class="fa-solid fa-pencil"></i></button></td>
               
               </tr> 
               <ModalEdit  estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1} onHide={handleClose}>
                <Contenido>
                  <h2>{dataModal.estudiante}</h2>  
                  <h4>{dataModal.trabajo}</h4>

                <form onSubmit={handleSubmit}>
                 
                 <label>Nota:  </label>
                  <input  
                  type="text" 
                  name="nota"
                  value={dataModal.nota}
                onChange={handleChangeModal} />
                
                  <br></br>
                    <Boton type="submit">
                        Guardar
                    </Boton>
                    <Boton onClick={handleClose}>
                        Cerrar
                    </Boton>
                </form>
                </Contenido>
                </ModalEdit>
             
               </div>

            );
        }
export default TableScoreArte