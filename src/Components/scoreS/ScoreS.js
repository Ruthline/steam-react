import './scoreS.css'
import '../../index.css'
import '../login/BotonV/BotonV.css'
import { Link } from 'react-router-dom';

import {useState, useEffect} from "react" 
import axios from 'axios';
import BotonI from '../botonI/BotonI';
import TableScore from './TableScore';
function ScoreS(){
    const url = "http://localhost:5000/trabajos";

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

    <button class="btn-verde ctr">
                <i class="fa-solid fa-user"></i>
                <h5>Exportar</h5>
    </button>
  

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
        
            <tr class="rowprincipal"> 
                <th class="activity-students"> Actividad:</th>
                <th class="date-students">Fecha de entrega:</th>
                <th class="score-student">Puntaje:</th>
                <th class="de-students">Materia:</th>
            </tr>
                    {      
                list.map((tr, index)=>(
                    <TableScore
                        key={index}
                        trabajos={tr}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
}
        </table>
  
   
    </div>


)}

export default ScoreS;