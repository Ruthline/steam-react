import {useState, useEffect} from "react" 
import axios from 'axios';


function CardScore(){
    const url="http://localhost:5000/score"

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
        <div>
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
                                    <a href="#modal" class="estudiantenombre"><i class="fa-solid fa-pencil"></i>{es.nombres}</a>

                                </td>
                                <td class="email">{es.correo}</td>
                                <td class="workshop">
                              {es.trabajos}
                                </td>
                                <td class="score-students">{es.puntaje}</td>
                                <td class="average">{es.promedio}</td>
                            </tr>

                        </table>

                    ))
                }
       </div>
    )
}
export default CardScore 