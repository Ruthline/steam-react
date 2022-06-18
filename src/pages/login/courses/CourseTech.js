

import CardTech from '../../../Components/AreaSteam/Tech'
import {useState, useEffect} from "react" 
import axios from 'axios';
import '../../../Components/modales/modal.css'
import techimg from './Tech.svg'
import FooterLogin from "../../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin"
import { Link } from "react-router-dom";

function CourseTech(){
    const url = "http://localhost:5000/tecnologia";

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

        <div>
            
         <HeaderLogin />
            <img src={techimg} alt="bannerArte" width="100%"></img>
            <h1>Trabajos</h1>
            <Link to="/courses/"><button className="btn btn-one">Volver</button></Link>
            <Link to="/courses/5/notastech"><button className="btn btn-three">Ir a notas</button></Link>
            
            {
            list.map((th, index)=>(
                    <CardTech
                        key={index}
                        tech={th}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
}
<FooterLogin />
        </div>
    )
}
export default CourseTech