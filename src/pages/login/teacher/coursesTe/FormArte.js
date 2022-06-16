import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';
import './FormWork.css'


function FormArte(){
/*una ruta useHistory useNavigate constante para que retorne al listar*/
const navigate=useNavigate();


/* Inicializando los inputs en el estado, para poder escribir los datros o los valores que el usuario digite en el form y manejarlos o controlarlos*/
    const [data,setData]=useState({id:"",trabajo:"", imagen:"",fecha:"", grado:"", descripcion:"",});

     const handleChange=({target})=>{
/*[id:2,nombre:"tatiana",apellido:"cabrera"]
int num=10;*/
/*cada vez que exista un cambio se guarda el valor en el estado data*/
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    /*Peticiones asincronas conectar con bd*/
    const url="http://localhost:5000/arte";
    /* crear una funcion para procesar el envio de datos del formulario*/
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(url,data);
        //console.log(response)
        if(response.status===201){
            Swal.fire(
                'Guardado!',
                `El trabajo <strong>
                ${response.data.trabajo}
                </strong>
                ha sido guardado exitosamente!`,
                    'success'
            )
                navigate("/scoreTeacher");
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar el trabajo!`,
                    'error'
            )
        }
    }

return(
 
<section  className="formcomplete">
    <Form onSubmit={handleSubmit}  className="formWork">
            <div className="groupForm">
                    <label className="trabajo">Trabajo</label>
                        <input
                        type="text"
                        placeholder="Ingrese el trabajo"
                        name="trabajo"
                        value={data.trabajo}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label className="trabajo">Imagen</label>
                        <input
                        type="text"
                        placeholder="Ingrese la url de la imagen"
                        name="imagen"
                        value={data.imagen}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label className="trabajo">Fecha:</label>
                    <input
                    type="date"
                    placeholder="Ingrese la fecha"
                    name="fecha"
                    value={data.fecha}
                    onChange={handleChange}
                    
                    >
                    
                    </input>
                    </div>
                <div>
               <label>Grado</label>
               <select type=""
                        placeholder="Ingrese el Correo"
                        name="grado"
                        value={data.grado}
                        onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    
                </select>
                </div>
               
                <div>
                    <label>Descripción:</label>
                    <textarea

                    placeholder="El siguiente trabajo..."
                    name="descripcion"
                    value={data.descripcion}
                    onChange={handleChange}
                    
                    >
                    
                    </textarea>
                </div>
                        
               
                
        
    <button className="btn-verde center">
        Guardar
    </button>

    </Form>
    </section>

)
}
export default FormArte