import './ScoreT.css'
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react" 
import axios from 'axios';
import BotonV from '../login/BotonV/BotonV'
import BotonI from '../login/BotonI/BotonI'
import TableScoreT from '../../pages/login/teacher/scoreCrud/TableScoreArte'
function ScoreT(){
    const url = "http://localhost:5000/quintoArte";

   
     /*2. Generar función asíncrona para conentarme a la API*/
     const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3.UseState para guardar la respuesta de la petición y ponerlo a disposión del componente */

    const [list, setList] = useState([]);
    /*5.Crear otro estadopara refrescar el listoadi despues de eliminar */
    const [upList,setUplist] = useState([false]);

    /*4. hook useEffect ejecutar funciones cada vez que renderizamos un componente */
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    console.log(list);
return(
    <div className="students-calificaciones">
       
   <section className="botones-score">
    
    <BotonI  className="cti"/>
    <Link to="/scoreTeacher">
    <button class="btn-verde ctr">
        <Link to="/scoreTeacher/form">
                <i class="fa-solid fa-user"></i>
                <h5>Añadir trabajo</h5>
        </Link>
    </button>
    </Link>
  

    <div id="search">
        <label for="buscar">
        <input type="search" name="search" class="search" required></input>
        <a href="mis-cursos.html">
            <i class="fa-solid fa-magnifying-glass buscador fa-1.5x"></i>
        </a>
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
                list.map((es, index)=>(
                    <TableScoreT
                        key={index}
                        estudiantes={es}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
}
        </table>
  
   
    </div>
                
   
)
}
export default ScoreT