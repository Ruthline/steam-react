
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableScoreArte from '../../../../Components/scoreT/TableScoreArte'
import { useState, useEffect} from 'react';
import HeaderLogin from '../../../../Components/headerLogin/HeaderLogin';
function Notas5(){
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
        getData().then((response, response2) => {
            setList(response.data);
            setList(response2.data);
        })
    }, [upList])
    console.log(list);
return(
    <>
    <HeaderLogin />
    <div className="students-calificaciones">
         
          <h1>Notas de Arte Grado 5</h1>
   <section className="botones-score">
    

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
                list.map((es, index)=>(
                    <TableScoreArte
                        key={index}
                        trabajos={es}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
}
        </table>
  
   
    </div>
    </>       
   
)
}
export default Notas5;