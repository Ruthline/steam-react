import './ScoreT.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import {useState, useEffect} from "react" 
function TableScoreT({estudiantes, trabajos}){
   
    const url = "http://localhost:5000/estudiantes";
    const url2 = "http://localhost:5000/trabajos";

    /*2. Generar función asíncrona para conentarme a la API*/
    const getData = async () => {
       const response = axios.get(url);
       const response2 = axios.get(url2);
       return (response, response2);
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

            return (

                <tr className="row-teacher"> 
                <td class="student"> 
                    <a href="#modal" class="estudiantenombre"><i class="fa-solid fa-pencil"></i></a>
                    {estudiantes.nombre}
                </td>

                   
                <td class="email"> {estudiantes.correo}</td>
                <td class="workshop">

                    <div class="worskhop-two">
                    <a href="#modal2" className="work">
                    <i class="fa-solid fa-paperclip"></i><h5>Trabajo:Lorem ipsum</h5>
                    </a>
                    </div>
                    <div class="worskhop-two">
                    <a href="#modal2" className="work">
                    <i class="fa-solid fa-paperclip"></i><h5>Trabajo:Lorem ipsum</h5>
                    </a>
                    </div>
                    <div class="worskhop-two">
                    <a href="#modal2" className="work">
                    <i class="fa-solid fa-paperclip"></i><h5>Trabajo:Lorem ipsum</h5>
                    </a>
                    </div>
                </td>
                
                    <td class="score-students">
                        <div>
                        10
                        </div>
                 
                        <div>
                        10
                        </div>
                      
                        <div>
                        10
                        </div>
                        </td>
                    <td class="average"> </td>
               
               </tr> 
            );
        }
export default TableScoreT