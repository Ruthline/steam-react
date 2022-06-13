import './ScoreT.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {useState, useEffect} from "react" 
import axios from 'axios';
import BotonV from '../../Components/login/BotonV/BotonV'
import BotonI from '../../Components/login/BotonI/BotonI'
function ScoreT({estudiantesNotas}){
    const url = "http://localhost:5000/estudiantesNotas";

   
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
            <Link to="/score-students">
            <button class="btn-verde ctr">
                    <i class="fa-solid fa-user"></i>
                    <h5>Editar todo</h5>
            </button>
            </Link>
        </div>

        <div id="search">
            <label for="search">
            <input type="search" name="search" class="search" required></input>
            <a href="mis-cursos.html">
                <i class="fa-solid fa-magnifying-glass buscador fa-1.5x"></i>
            </a>
            </label>
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
                                <i class="fa-solid fa-paperclip"></i>Trabajo:Lorem ipsum
                                </a>
                                </div>
                                <div class="worskshop-three">
                                        <a href="#modal2">
                                            <i class="fa-solid fa-paperclip"></i>Trabajo:Lorem ipsum
                                            </a>
                                </div>
                                <div class="workshop-four">
                                    <a href="#modal2">
                                        <i class="fa-solid fa-paperclip"></i>Trabajo:Lorem ipsum
                                        </a>
                                </div>
                            </td>
                            <td class="score-students"></td>
                            <td class="average">{es.promedio}</td>
                            </tr>

                        </table>

                    ))
                }

                    
                
    </section>
)
}
export default ScoreT