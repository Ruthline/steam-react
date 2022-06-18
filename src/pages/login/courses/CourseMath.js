

import CardMath from '../../../Components/AreaSteam/Mate'
import {useState, useEffect} from "react" 
import axios from 'axios';
import FooterLogin from "../../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin"
import mathimg from './Math.svg'
import { Link } from "react-router-dom";

function CourseMath(){
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
        <div>
            
            <HeaderLogin />
            <img src={mathimg} alt="bannerArte" width="100%"></img>
            <h1>Trabajos</h1>
            <Link to="/courses/"><button className="btn btn-one">Volver</button></Link>
            <Link to="/courses/3/notasmates"><button className="btn btn-three">Ir a notas</button></Link>
            
            {
            list.map((mt, index)=>(
                    <CardMath
                        key={index}
                        math={mt}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
}
<FooterLogin />
        </div>
    )
}
export default CourseMath