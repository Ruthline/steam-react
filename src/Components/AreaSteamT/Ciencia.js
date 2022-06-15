import {useState, useEffect} from "react"
import axios from 'axios'; 
function Ciencia({sci}){
    const url = "http://localhost:5000/ciencia";

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
            <img src={sci.imagen} alt="imagen trabajos"></img>
            <h2>{sci.trabajo}</h2>
           
            <p>{sci.descripcion}</p>
        <div className="icons-second" >
                <i className="fa-solid fa-paperclip cta"></i>
                <i className="fa-solid fa-comment cta"></i>
            </div>
        </div>
        </>
    )
}
export default Ciencia