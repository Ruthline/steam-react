
import {useState, useEffect} from "react"
import axios from 'axios'; 
import './AreasSteam.css'



function ArteT({art}){
    const url = "http://localhost:5000/arte";

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
      
        <div className="card-deliver">
            <img src={art.imagen} alt="imagen trabajos"></img>
            <h2>{art.trabajo}</h2>
           
            <p>{art.descripcion}</p>
      
        </div>
        </>
    )
}
export default ArteT