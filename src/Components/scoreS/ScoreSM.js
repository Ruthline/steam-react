import './scoreS.css'
import '../../index.css'
import '../login/BotonV/BotonV.css'
import { Link } from 'react-router-dom';

import {useState, useEffect} from "react" 
import axios from 'axios';
import BotonI from '../botonI/BotonI';
import TableScoreM from './TableScoreM';
function ScoreSM(){
    const url = "http://localhost:5000/matematicas";

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
        <Link to="/courses/3/">
                <i class="fa-solid fa-user"></i>
                <h5>Volver</h5>
                </Link>
    </button>
  

    </section>

        <table className="table">
        
            <tr class="rowprincipal"> 
                <th class="activity-students"> Actividad:</th>
                <th class="date-students">Fecha de entrega:</th>
                <th class="score-student">Puntaje:</th>
            </tr>
                    {      
                list.map((tr, index)=>(
                    <TableScoreM
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

export default ScoreSM;