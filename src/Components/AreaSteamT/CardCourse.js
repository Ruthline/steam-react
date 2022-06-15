import { Link } from 'react-router-dom';
import {useState, useEffect} from "react" 
import axios from 'axios';
function CardCourse({trabajos}){
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
        <>
        <h1>{trabajos.materia}</h1>
        <div className="card-deliver">
            <img src={trabajos.imagen} alt="imagen trabajos"></img>
            <h2>{trabajos.trabajo}</h2>
           
            <p>{trabajos.descripcion}</p>
            <div className="icons-second" >
                <a href="#modal" class="cta"><i className="fa-solid fa-paperclip" ></i></a>
                <a href="#modal" class="cta"><i className="fa-solid fa-comment"></i></a>
            </div>
        </div>
        </>
      

    )
}
export default CardCourse