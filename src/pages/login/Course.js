import FooterLogin from "../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../Components/headerLogin/HeaderLogin"
import { useParams} from "react-router-dom";
import {getCourse} from "../../courses";
import CardCourse from '../../Components/AreaSteam/CardCourse'
import {useState, useEffect} from "react" 
import axios from 'axios';
import '../../Components/modales/modal.css'

function Course(){
    const params=useParams();
    const  course=getCourse(parseInt(params.id));
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
        <div>
            
            <HeaderLogin />

            {
            list.map((tr, index)=>(
                    <CardCourse
                        key={index}
                        trabajos={tr}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
}
            <FooterLogin />
        </div>
    )
}
export default Course