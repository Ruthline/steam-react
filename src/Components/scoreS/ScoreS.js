import './scoreS.css'
import '../../index.css'
import BotonV from '../login/BotonV/BotonV';
import BotonI from '../login/BotonV/BotonV';
function ScoreS(){
    return(
        <div className="students-calificaciones">
       <section className="botones-score">
        <BotonI />
                <BotonV />
      

        <div id="search">
            <label for="buscar">
            <input type="search" name="search" class="search" required></input>
            <a href="mis-cursos.html">
                <i class="fa-solid fa-magnifying-glass buscador fa-1.5x"></i>
            </a>
            </label>
        </div>
        </section>



    <div class="table">
        <table>
            <tr class="rowprincipal"> 
                <th class="activity-students"> Actividad:</th>
                <th class="date-students">Fecha de entrega:</th>
                <th class="score-students">Puntaje:</th>
                <th class="de-students">De:</th>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>

        </table>

    </div>
    </div>
    )
}

export default ScoreS;