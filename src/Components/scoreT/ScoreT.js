import './ScoreT.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {useState, useEffect} from "react" 
import axios from 'axios';
import BotonV from '../../Components/login/BotonV/BotonV'
import BotonI from '../../Components/login/BotonI/BotonI'
function ScoreT({estudiantesNotas}){
    const url = "http://localhost:5000/estudiantes";

   
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    const[list,setList]=useState([]);

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);

        })
    },[])
    console.log(list)
    return(
    <section>
        <BotonI />
        <div class="botons">
           
            <button class="btn-verde ctr">
            <Link to="/scoreTeacher/form">
                    <i class="fa-solid fa-user"></i>
                   
                    <h5>Agregar trabajo</h5>
                </Link>
            </button>
          
        </div>

        <div id="search">
        <button class="btn-verde ctr">
            <Link to="/scoreTeacher/editar">
                    <i class="fa-solid fa-user"></i>
                   
                    <h5>Editar trabajos</h5>
                </Link>
            </button>
        </div>
        {
                    list.map((es)=>(
                        <table className="table">
                             <tr className="rowprincipal-teacher"> 
                                <th class="student-teacher"> Estudiante:</th>
                                <th class="email-teacher">Correo:</th>
                                <th class="workshop-teacher">Trabajos:</th>
                                <th class="score-teacher">Puntaje:</th>
                                <th class="average-teacher">Promedio:</th>
                            </tr>
                            <tr className="row-teacher"> 
                                <td class="student"> 
                                    <button class="estudiantenombre"><i class="fa-solid fa-pencil"></i></button>{es.estudiante}

                                </td>
                                <td class="email">{es.correo}</td>
                                <td class="workshop">

                                <div class="worskhop-two">
                                <a href="#modal2">
                                <i class="fa-solid fa-paperclip"></i>{es.trabajo}
                                </a>
                                </div>
                            </td>
                            <td class="score-students">{es.nota}</td>
                            <td class="average">{es.promedio}</td>
                            </tr>

                        </table>

                    ))
                }

                    
                
    </section>
)
}
export default ScoreT