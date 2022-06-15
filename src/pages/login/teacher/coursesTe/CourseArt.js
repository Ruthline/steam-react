


import CardArt from '../../../Components/AreaSteam/Arte'
import {useState, useEffect} from "react" 
import axios from 'axios';
import FooterLogin from "../../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../../Components/headerLogin/HeaderLogin"
import arteimg from './Arte.svg'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function CourseArt(){
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
        <div>
          
            <HeaderLogin />
            <img src={arteimg} alt="bannerArte" width="100%"></img>
            <h1>Trabajos</h1>
            <Link to="/courses/"><button className="btn-idiom">Volver</button></Link>
            
            {
            list.map((ar, index)=>(
                    <CardArt
                        key={index}
                        art={ar}
                        setUplist={setUplist}
                        upList={upList}
                       
                    />
                ))
}
    
    <FooterLogin />
        </div>
    )
}
export default CourseArt