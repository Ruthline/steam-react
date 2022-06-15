
import {useState, useEffect} from "react"
import axios from 'axios'; 
import './AreasSteam.css'



function Arte({art,upList, handleOpen, setDataModal,trabajos}){
    const url = "http://localhost:5000/trabajos";

    /*2. Generar función asíncrona para conentarme a la API*/
    const getData = async () => {
       const response = axios.get(url);
       return response;
   }

   const handleEdit=()=>{
    handleOpen();
    setDataModal(trabajos);

}
    return(
        <>
      
        <div className="card-deliver">
            <img src={art.imagen} alt="imagen trabajos"></img>
            <h2>{art.trabajo}</h2>
           
            <p>{art.descripcion}</p>
        <div className="icons-second" >
                <button onClick={handleEdit}><i className="fa-solid fa-paperclip cta"></i></button>
                <i className="fa-solid fa-comment cta"></i>
            </div>
        </div>
        </>
    )
}
export default Arte