import axios from 'axios';
import Swal from 'sweetalert2';
import './scoreS.css'
import {useState, useEffect} from "react" 
function TableScore({trabajos}) {

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

            return (

                <tr class="row"> 
                <td class="activity">{trabajos.trabajo}</td>
                <td class="date">{trabajos.fecha}</td>
                <td class="puntaje">{trabajos.nota}</td>
                <td class="de">{trabajos.materia}</td>
            </tr>
            );
        }

export default TableScore;
