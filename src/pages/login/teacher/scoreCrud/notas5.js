
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import TableScoreArte from '../../../../Components/scoreT/TableScoreArte'
import { useState, useEffect } from 'react';
import HeaderLogin from '../../../../Components/headerLogin/HeaderLogin';
import ModalEdit from '../../../../Components/modales/ModalEdit'
import { Boton, Contenido } from "../../../../element/LoginForm";

function Notas5() {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const url = "http://localhost:5000/quintoArte";


    /*2. Generar función asíncrona para conentarme a la API*/
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3.UseState para guardar la respuesta de la petición y ponerlo a disposión del componente */

    const [list, setList] = useState([]);
    /*5.Crear otro estadopara refrescar el listoadi despues de eliminar */
    const [upList, setUplist] = useState([false]);

     
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
        //console.log(response)
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
               setUplist(!upList)
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al actualizar la calificacion!`,
                    'error'
            )
        }
    

    }
    /*4. hook useEffect ejecutar funciones cada vez que renderizamos un componente */
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
           
        })
    }, [upList])
    console.log(list);
    return (
        <>
            <HeaderLogin />
            <h1>Notas de Arte Grado 5</h1>
            <div className="students-calificaciones">

                <section className="botones-score">
                <button onClick={() => cambiarEstadoModal1(!estadoModal1)} className="btn btn-three">Aqui</button>
                
                    <button class="btn-verde ctr">
                        <Link to="/coursesTeacher/1">
                            <i class="fa-solid fa-user"></i>
                            <h5>Volver</h5>
                        </Link>
                    </button>



                    <div id="search">
                        <label for="buscar">
                            <input type="search" name="search" class="search" required></input>

                            <i class="fa-solid fa-magnifying-glass buscador fa-1.5x"></i>

                        </label>
                    </div>
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
                        list.map((es, index) => (
                            <TableScoreArte
                                key={index}
                                trabajos={es}
                                setUplist={setUplist}
                                upList={upList}
                                setDataModal={setDataModal}
                            />
                        ))
                    }
                  
                </table>

                <ModalEdit  estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}>
                <Contenido>
                  <h2>Estudiante</h2>  
                  <h4>Trabajo</h4>

                <form onSubmit={handleSubmit}>
                  <label>Nota:
                  <input  
                  type="number" 
                  min="1"
                  max="10"
                  placeholder="Ingrese nota"
                  name="nota"
                  value={dataModal.nota}
                onChange={handleChangeModal} />
                  </label>
                  <br></br>
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
export default Notas5;